export interface Page {
  id: string;
  title: string;
  featured: boolean;
  links: string;
  meta: {
    title: string;
    keywords?: string;
    description?: string;
  };
  blocks: any[];
}
