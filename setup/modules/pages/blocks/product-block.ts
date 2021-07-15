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
        title: 'Product',
        specifications: 'array',
        fields: [
          '/title',
          '/image',
          '/label',
          '/value',
          '/specLabel',
          '/specValue',
        ]
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        specifications: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              specLabel: {type: 'string'},
              specValue: {type: 'string'},
            }
          }
        },
        image: {type: 'string'},
        title: {type: 'string'},
        label: {type: 'string'},
        value: {type: 'string'},
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      image: {
        label: 'Image',
        component: {
          type: 'image'
        }
      },
      title: {label: 'Title'},
      label: {label: 'Label'},
      value: {label: 'Value'},
      specLabel: {label: 'Test'},
      specValue: {label: 'TestTwo'},
      ...COMMON_OPTIONS.definitions
    }
  }
};
