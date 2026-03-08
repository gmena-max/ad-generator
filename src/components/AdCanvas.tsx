"use client";

import { forwardRef } from "react";
import { ClientBrand } from "@/data/clients";
import { CopyContent, TemplateId } from "@/data/templates";
import {
  PhotoHero,
  StatAuthority,
  SymptomQuestion,
  SocialProof,
  Testimonial,
  FaqCard,
  Educational,
  Scarcity,
  MfCoachHero,
  MfPillarHighlight,
  MfQuoteCard,
  MfStatInsight,
  MfQuestionHook,
} from "./templates";
import type { MfVariant } from "./templates/mf/types";

type AspectRatio = "4:5" | "1:1";

type AdCanvasProps = {
  brand: ClientBrand;
  template: TemplateId;
  copy: CopyContent;
  image?: string;
  variant?: MfVariant;
  aspectRatio?: AspectRatio;
};

const DIMENSIONS: Record<AspectRatio, { width: number; height: number }> = {
  "4:5": { width: 1080, height: 1350 },
  "1:1": { width: 1080, height: 1080 },
};

const isMfTemplate = (id: string) => id.startsWith("mf-");

export const AdCanvas = forwardRef<HTMLDivElement, AdCanvasProps>(
  function AdCanvas({ brand, template, copy, image, variant, aspectRatio = "4:5" }, ref) {
    const { colors } = brand;
    const fontFamily = isMfTemplate(template)
      ? "var(--font-geist), 'Geist', Arial, sans-serif"
      : "'Inter', Arial, Helvetica, sans-serif";
    const { width, height } = DIMENSIONS[aspectRatio];

    return (
      <div
        ref={ref}
        style={{
          width,
          height,
          position: "relative",
          overflow: "hidden",
          fontFamily,
        }}
      >
        {template === "photo-hero" && (
          <PhotoHero brand={brand} copy={copy} image={image} colors={colors} />
        )}
        {template === "stat-authority" && (
          <StatAuthority brand={brand} copy={copy} image={image} colors={colors} />
        )}
        {template === "symptom-question" && (
          <SymptomQuestion brand={brand} copy={copy} colors={colors} />
        )}
        {template === "social-proof" && (
          <SocialProof brand={brand} copy={copy} colors={colors} />
        )}
        {template === "testimonial" && (
          <Testimonial brand={brand} copy={copy} colors={colors} />
        )}
        {template === "faq-card" && (
          <FaqCard brand={brand} copy={copy} colors={colors} />
        )}
        {template === "educational" && (
          <Educational brand={brand} copy={copy} colors={colors} />
        )}
        {template === "scarcity" && (
          <Scarcity brand={brand} copy={copy} image={image} colors={colors} />
        )}
        {template === "mf-coach-hero" && (
          <MfCoachHero brand={brand} copy={copy} image={image} colors={colors} variant={variant} />
        )}
        {template === "mf-pillar-highlight" && (
          <MfPillarHighlight brand={brand} copy={copy} image={image} colors={colors} variant={variant} />
        )}
        {template === "mf-quote-card" && (
          <MfQuoteCard brand={brand} copy={copy} image={image} colors={colors} variant={variant} />
        )}
        {template === "mf-stat-insight" && (
          <MfStatInsight brand={brand} copy={copy} image={image} colors={colors} variant={variant} />
        )}
        {template === "mf-question-hook" && (
          <MfQuestionHook brand={brand} copy={copy} image={image} colors={colors} variant={variant} />
        )}
      </div>
    );
  }
);
