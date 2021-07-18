import {COMMON_OPTIONS} from './shared';

export const INVENTORY_BLOCK = {
  id: 'inventory',
  label: 'Inventory',
  icon: 'subject',
  previewTemplate: `<jms-inventory-block [data]="data"></jms-inventory-block>`,
  previewValue: {
    categories: true,
    subCategories: true,
    loadMore: true,
    title: 'Our Rental Equipment',
    ...COMMON_OPTIONS.defaults
  },
  form: {
    segments: [
      {
        type: 'empty',
        fields: [
          '/title',
          '/categories',
          '/subCategories',
          '/loadMore'
        ],
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        title: {type: 'string'},
        categories: {type: 'boolean'},
        subCategories: {type: 'boolean'},
        loadMore: {type: 'boolean'},
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      title: {label:'Title'},
      categories: {label: 'Categories'},
      subCategories: {label: 'Subcategories'},
      loadMore: {label: 'Load More'},
      ...COMMON_OPTIONS.definitions
    }
  }
};
