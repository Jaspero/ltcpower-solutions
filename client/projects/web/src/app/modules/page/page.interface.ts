export interface Page {
  id: string;
  title: string;
  featured: boolean;
  meta: {
    title: string;
    keywords?: string;
    description?: string;
  };
  blocks: any[];
}
