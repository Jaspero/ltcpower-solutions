import {COMMON_OPTIONS} from './shared';

export const BACKGROUND_HERO_BLOCK = {
  id: 'hero',
  label: 'Hero',
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
          '/title',
          '/subtitle',
          '/image'
        ],
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        title: {type: 'string'},
        subtitle: {type: 'string'},
        image: {type: 'string'},
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      title: {label: 'Title'},
      subtitle: { label: 'Subtitle',},
      image: {
        label: 'Background',
        component: {
          type: 'image'
        }
      },
      ...COMMON_OPTIONS.definitions
    }
  }
};
