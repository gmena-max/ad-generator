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

type AdCanvasProps = {
  brand: ClientBrand;
  template: TemplateId;
  copy: CopyContent;
  image?: string;
  variant?: MfVariant;
};

const AD_WIDTH = 1080;
const AD_HEIGHT = 1350;

const isMfTemplate = (id: string) => id.startsWith("mf-");

export const AdCanvas = forwardRef<HTMLDivElement, AdCanvasProps>(
  function AdCanvas({ brand, template, copy, image, variant }, ref) {
    const { colors } = brand;
    const fontFamily = isMfTemplate(template)
      ? "var(--font-geist), 'Geist', Arial, sans-serif"
      : "'Inter', Arial, Helvetica, sans-serif";

    return (
      <div
        ref={ref}
        style={{
          width: AD_WIDTH,
          height: AD_HEIGHT,
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
          <MfPillarHighlight brand={brand} copy={copy} colors={colors} variant={variant} />
        )}
        {template === "mf-quote-card" && (
          <MfQuoteCard brand={brand} copy={copy} image={image} colors={colors} variant={variant} />
        )}
        {template === "mf-stat-insight" && (
          <MfStatInsight brand={brand} copy={copy} image={image} colors={colors} variant={variant} />
        )}
        {template === "mf-question-hook" && (
          <MfQuestionHook brand={brand} copy={copy} colors={colors} variant={variant} />
        )}
      </div>
    );
  }
);
