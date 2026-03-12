import { AiPrompt } from "./types";

export const blogPrompts: AiPrompt[] = [
  {
    id: "blog-dark-gradient",
    clientId: "_blog",
    templateId: "_blog",
    label: "Dark gradient with abstract shapes",
    prompt: `Generate a blog header image (1200x800, 16:9).

STYLE: Dark, premium, modern. Near-black background (#0a0a0a) with subtle abstract geometric shapes in gold (#F5B51A) at low opacity. Clean, minimal — suitable for a professional blog post header. NO text, NO logos, NO watermarks.`,
    aspectRatio: "16:9",
  },
  {
    id: "blog-tech-abstract",
    clientId: "_blog",
    templateId: "_blog",
    label: "Abstract tech / digital marketing",
    prompt: `Generate a blog header image (1200x800, 16:9).

STYLE: Dark background with abstract digital/tech elements — circuit-like lines, data visualization dots, subtle grid patterns. Color accent: gold (#F5B51A) on dark (#0a0a0a). Premium feel, not corporate stock photo. NO text, NO logos, NO watermarks.`,
    aspectRatio: "16:9",
  },
  {
    id: "blog-analytics",
    clientId: "_blog",
    templateId: "_blog",
    label: "Analytics / dashboard visualization",
    prompt: `Generate a blog header image (1200x800, 16:9).

STYLE: Dark background with abstract analytics visualization — glowing chart lines, bar graphs as abstract art, data points connected by thin lines. Gold (#F5B51A) and white accents on near-black (#0a0a0a). Premium, modern, data-driven feel. NO text, NO numbers, NO logos, NO watermarks.`,
    aspectRatio: "16:9",
  },
  {
    id: "blog-social-media",
    clientId: "_blog",
    templateId: "_blog",
    label: "Social media / digital presence",
    prompt: `Generate a blog header image (1200x800, 16:9).

STYLE: Dark moody background with abstract representations of social connectivity — floating abstract shapes suggesting connection, networking, digital presence. Subtle gold (#F5B51A) accents on dark (#0a0a0a). Premium, not literal. NO text, NO social media icons, NO logos, NO watermarks.`,
    aspectRatio: "16:9",
  },
  {
    id: "blog-seo-search",
    clientId: "_blog",
    templateId: "_blog",
    label: "SEO / search / visibility",
    prompt: `Generate a blog header image (1200x800, 16:9).

STYLE: Dark background with abstract search/discovery concept — subtle magnifying glass silhouette, radiating light beams, or spotlight effect. Gold (#F5B51A) light on dark (#0a0a0a). Premium, atmospheric, not literal or clipart-like. NO text, NO logos, NO watermarks.`,
    aspectRatio: "16:9",
  },
];
