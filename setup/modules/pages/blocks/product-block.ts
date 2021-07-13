import {COMMON_OPTIONS} from './shared';

export const PRODUCT_BLOCK = {
  id: 'product',
  label: 'Product',
  icon: 'subject',
  previewTemplate: `<jms-product-block [data]="data"></jms-product-block>`,
  previewValue: {
    content: '<h1>Custom Title</h1><h2>Custom Subtitle</h2><p>Custom content</p>',
    ...COMMON_OPTIONS.defaults
  },
  form: {
    segments: [
      {
        title: 'product',
        array: '/specifications',
        type: 'empty',
        fields: [
          '/title',
          '/label',
          '/value',
          '/image',
          '/specTitle',
          '/productLabel',
          '/productValue',
        ],
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        title: {type: 'string'},
        label: {type: 'string'},
        value: {type: 'string'},
        image: {type: 'string'},
        specifications: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              specTitle:    {type: 'string'},
              productLabel: {type: 'string'},
              productValue: {type: 'string'},
            }
          }
        },
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      title: {label:'Title'},
      image: {
        label: 'Image',
        component: {
          type: 'image'
        }
      },
      label: {label: 'Product label'},
      value: {label: 'Product value'},
      specTitle: {label: 'Specification Title'},
      productLabel: {label: 'Specification Label'},
      productValue: {label: 'Specification Value'},
      ...COMMON_OPTIONS.definitions
    }
  }
};
