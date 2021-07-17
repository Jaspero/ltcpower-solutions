export interface Model {
  id: string;
  title: string;
  createdOn: number;
  featured: string;
  primarySpecs: Array<{
    value: string;
    label: string;
  }>;
  specifications: Array<{
    active?: boolean;
    label: string;
    values: Array<{
      value: string;
      label: string;
    }>;
  }>;
  meta: {
    title: string;
    keywords?: string;
    description?: string;
  };
  blocks: any[];
}
