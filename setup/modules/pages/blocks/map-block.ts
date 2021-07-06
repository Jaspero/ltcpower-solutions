import {COMMON_OPTIONS} from './shared';

export const MAP_BLOCK = {
  id: 'map',
  label: 'Map-block',
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
          '/link'
        ],
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        link: {type: 'string'},
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      content: {
        label: 'Link',
      },
      ...COMMON_OPTIONS.definitions
    }
  }
};
