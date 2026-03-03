import { ClientBrand } from "@/data/clients";
import { CopyContent } from "@/data/templates";

export type Colors = ClientBrand["colors"];

export type TemplateProps = {
  brand: ClientBrand;
  copy: CopyContent;
  colors: Colors;
  image?: string;
};
