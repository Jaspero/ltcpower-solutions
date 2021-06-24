export interface Page {
  id: string;
  title: string;
  meta: {
    title: string;
    keywords?: string;
    description?: string;
  };
  blocks: any[];
}
