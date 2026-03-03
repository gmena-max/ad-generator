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
} from "./templates";

type AdCanvasProps = {
  brand: ClientBrand;
  template: TemplateId;
  copy: CopyContent;
  image?: string;
};

const AD_WIDTH = 1080;
const AD_HEIGHT = 1350;

export const AdCanvas = forwardRef<HTMLDivElement, AdCanvasProps>(
  function AdCanvas({ brand, template, copy, image }, ref) {
    const { colors } = brand;

    return (
      <div
        ref={ref}
        style={{
          width: AD_WIDTH,
          height: AD_HEIGHT,
          position: "relative",
          overflow: "hidden",
          fontFamily: "'Inter', Arial, Helvetica, sans-serif",
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
      </div>
    );
  }
);
