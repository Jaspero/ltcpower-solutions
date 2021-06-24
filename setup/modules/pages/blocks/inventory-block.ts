import {COMMON_OPTIONS} from './shared';

export const INVENTORY_BLOCK = {
  id: 'inventory-block',
  label: 'Inventory-block',
  icon: 'subject',
  previewTemplate: `<jms-content [data]="data"></jms-content>`,
  previewValue: {
    content: '<h1>Custom Title</h1><h2>Custom Subtitle</h2><p>Custom content</p>',
    ...COMMON_OPTIONS.defaults
  },
  form: {
    segments: [
      {
        type: 'empty',
        fields: [
          '/content'
        ],
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        content: {type: 'string'},
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
      ...COMMON_OPTIONS.definitions
    }
  }
};
