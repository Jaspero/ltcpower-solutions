import {COMMON_OPTIONS} from './shared';

export const INVENTORY_BLOCK = {
  id: 'inventory',
  label: 'Inventory',
  icon: 'subject',
  previewTemplate: `<jms-inventory-block [data]="data"></jms-inventory-block>`,
  previewValue: {
    content: '<h1>Custom Title</h1><h2>Custom Subtitle</h2><p>Custom content</p>',
    ...COMMON_OPTIONS.defaults
  },
  form: {
    segments: [
      {
        type: 'empty',
        fields: [
          '/content',
          '/title'
        ],
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        content: {type: 'string'},
        title: {type: 'string'},
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      content: {
        label: '',
        component: {
          type: 'tinymce'
        }
      },
      title: {label:'Title'},
      ...COMMON_OPTIONS.definitions
    }
  }
};
