"use client";

import { useState, useCallback } from "react";
import { Sparkles, RefreshCw, Check, X, ChevronDown } from "lucide-react";
import { AiPrompt, getPromptsForClient, getBlogPrompts } from "@/data/prompts";
import { ClientBrand } from "@/data/clients";

type ReviewCategory = {
  name: string;
  score: number;
  feedback: string;
};

type ReviewResult = {
  pass: boolean;
  overallScore: number;
  categories: ReviewCategory[];
  summary: string;
  regenerationHint?: string | null;
};

type Props = {
  brand: ClientBrand;
  onAccept: (imageDataUrl: string) => void;
};

export function AiGeneratePanel({ brand, onAccept }: Props) {
  const [prompt, setPrompt] = useState("");
  const [aspectRatio, setAspectRatio] = useState<"4:5" | "1:1" | "16:9">("4:5");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [reviewResult, setReviewResult] = useState<ReviewResult | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [showPresets, setShowPresets] = useState(false);

  const clientPrompts = getPromptsForClient(brand.id);
  const blogPresets = getBlogPrompts();
  const hasPresets = clientPrompts.length > 0 || blogPresets.length > 0;

  const selectPreset = useCallback((preset: AiPrompt) => {
    setPrompt(preset.prompt);
    setAspectRatio(preset.aspectRatio);
    setShowPresets(false);
  }, []);

  const runReview = useCallback(
    async (imageDataUrl: string): Promise<ReviewResult | null> => {
      setIsReviewing(true);
      try {
        const res = await fetch("/api/review", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            image: imageDataUrl,
            stage: "background",
            brandContext: {
              clientName: brand.name,
              colors: brand.colors,
              mood: brand.brandRules?.mood || [],
              forbidden: brand.brandRules?.forbidden || [],
            },
          }),
        });
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || "Review failed");
        }
        const result: ReviewResult = await res.json();
        setReviewResult(result);
        return result;
      } catch (err) {
        console.error("Review error:", err);
        // If review fails, don't block — let human decide
        return null;
      } finally {
        setIsReviewing(false);
      }
    },
    [brand]
  );

  const generate = useCallback(
    async (promptText: string, attemptNum: number, feedbackHint?: string) => {
      setIsGenerating(true);
      setError(null);
      setReviewResult(null);
      setAttempt(attemptNum);

      try {
        const enhancedPrompt = feedbackHint
          ? `${promptText}\n\nIMPORTANT CORRECTIONS (from design review): ${feedbackHint}`
          : promptText;

        const res = await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            prompt: enhancedPrompt,
            masterInstructions: brand.brandRules?.masterInstructions || "",
            aspectRatio,
          }),
        });

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || "Generation failed");
        }

        const data = await res.json();
        setGeneratedImage(data.image);
        setIsGenerating(false);

        // Auto-review
        const review = await runReview(data.image);

        // Auto-regenerate if failed and this was attempt 1
        if (review && !review.pass && attemptNum === 1 && review.regenerationHint) {
          await generate(promptText, 2, review.regenerationHint);
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : "Generation failed";
        setError(message);
        setIsGenerating(false);
      }
    },
    [aspectRatio, brand, runReview]
  );

  const handleGenerate = useCallback(() => {
    if (!prompt.trim()) return;
    generate(prompt, 1);
  }, [prompt, generate]);

  const handleRegenerate = useCallback(() => {
    if (!prompt.trim()) return;
    const hint = reviewResult?.regenerationHint;
    generate(prompt, 1, hint || undefined);
  }, [prompt, generate, reviewResult]);

  const handleAccept = useCallback(() => {
    if (generatedImage) {
      onAccept(generatedImage);
    }
  }, [generatedImage, onAccept]);

  const scoreColor = (score: number) => {
    if (score >= 7) return "text-green-600 bg-green-50";
    if (score >= 5) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  return (
    <div className="space-y-3">
      {/* Preset selector */}
      {hasPresets && (
        <div className="relative">
          <button
            onClick={() => setShowPresets(!showPresets)}
            className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2 text-left text-sm hover:border-gray-300"
          >
            <span className="text-gray-500">Presets</span>
            <ChevronDown size={14} className={`text-gray-400 transition-transform ${showPresets ? "rotate-180" : ""}`} />
          </button>
          {showPresets && (
            <div className="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg">
              {clientPrompts.length > 0 && (
                <div>
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-50">
                    {brand.name}
                  </div>
                  {clientPrompts.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => selectPreset(p)}
                      className="flex w-full items-center gap-2 px-3 py-2 text-left text-xs hover:bg-blue-50"
                    >
                      <span className="font-mono text-[10px] text-gray-400">{p.id}</span>
                      <span className="text-gray-700">{p.label}</span>
                    </button>
                  ))}
                </div>
              )}
              {blogPresets.length > 0 && (
                <div>
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-50">
                    Blog Headers
                  </div>
                  {blogPresets.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => selectPreset(p)}
                      className="flex w-full items-center gap-2 px-3 py-2 text-left text-xs hover:bg-blue-50"
                    >
                      <span className="text-gray-700">{p.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Prompt textarea */}
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe the background image to generate..."
        rows={4}
        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-700 placeholder:text-gray-400 focus:border-blue-400 focus:outline-none resize-y"
      />

      {/* Aspect ratio toggle */}
      <div className="flex gap-1">
        {(["4:5", "1:1", "16:9"] as const).map((ar) => (
          <button
            key={ar}
            onClick={() => setAspectRatio(ar)}
            className={`flex-1 rounded-md px-2 py-1.5 text-[11px] font-medium transition-all ${
              aspectRatio === ar
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            {ar}
            <span className="ml-1 text-[9px] opacity-70">
              {ar === "4:5" ? "Feed" : ar === "1:1" ? "Square" : "Blog"}
            </span>
          </button>
        ))}
      </div>

      {/* Generate button */}
      <button
        onClick={handleGenerate}
        disabled={!prompt.trim() || isGenerating}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2.5 text-sm font-medium text-white transition-all hover:from-purple-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isGenerating ? (
          <>
            <RefreshCw size={14} className="animate-spin" />
            Generating{attempt > 1 ? ` (retry ${attempt}/2)` : ""}...
          </>
        ) : (
          <>
            <Sparkles size={14} />
            Generate with AI
          </>
        )}
      </button>

      {/* Error */}
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-600">
          {error}
        </div>
      )}

      {/* Generated image preview */}
      {generatedImage && !isGenerating && (
        <div className="space-y-2">
          <img
            src={generatedImage}
            alt="AI Generated"
            className="w-full rounded-lg border border-gray-200 object-contain"
          />

          {/* Review results */}
          {isReviewing && (
            <div className="flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-xs text-blue-600">
              <RefreshCw size={12} className="animate-spin" />
              Reviewing image...
            </div>
          )}

          {reviewResult && (
            <div className={`rounded-lg border ${reviewResult.pass ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"} p-3 space-y-2`}>
              {/* Pass/fail header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {reviewResult.pass ? (
                    <Check size={14} className="text-green-600" />
                  ) : (
                    <X size={14} className="text-red-600" />
                  )}
                  <span className={`text-xs font-bold ${reviewResult.pass ? "text-green-700" : "text-red-700"}`}>
                    {reviewResult.pass ? "PASS" : "FAIL"} — {reviewResult.overallScore.toFixed(1)}/10
                  </span>
                </div>
                {attempt > 0 && (
                  <span className="text-[10px] text-gray-400">Attempt {attempt}/2</span>
                )}
              </div>

              {/* Summary */}
              <p className="text-[11px] text-gray-600">{reviewResult.summary}</p>

              {/* Category scores */}
              <div className="grid grid-cols-2 gap-1">
                {reviewResult.categories.map((cat) => (
                  <div
                    key={cat.name}
                    className={`rounded px-2 py-1 ${scoreColor(cat.score)}`}
                    title={cat.feedback}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-medium truncate">{cat.name}</span>
                      <span className="text-[10px] font-bold ml-1">{cat.score}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Regeneration hint */}
              {reviewResult.regenerationHint && !reviewResult.pass && (
                <p className="text-[10px] text-gray-500 italic">
                  Hint: {reviewResult.regenerationHint}
                </p>
              )}
            </div>
          )}

          {/* Action buttons */}
          <div className="flex gap-2">
            <button
              onClick={handleAccept}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-green-500 px-3 py-2 text-xs font-medium text-white hover:bg-green-600"
            >
              <Check size={12} />
              Accept
            </button>
            <button
              onClick={handleRegenerate}
              disabled={isGenerating}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gray-200 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-300 disabled:opacity-50"
            >
              <RefreshCw size={12} />
              Regenerate
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
