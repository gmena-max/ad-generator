import { TemplateProps } from "../types";

export type MfVariant = "a" | "b" | "c";

export type MfTemplateProps = TemplateProps & {
  variant?: MfVariant;
};
