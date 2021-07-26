import {COMMON_OPTIONS} from './shared';

export const IMAGE_TEXT = {
  id: 'image-text',
  label: 'Image-text',
  icon: 'subject',
  previewTemplate: `<jms-background-hero [data]="data"></jms-background-hero>`,
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
          '/description',
          '/image'
        ],
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        title: {type: 'string'},
        description: {type: 'string'},
        image: {type: 'string'},
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      title: {label: 'Title'},
      description: { label: 'Description',},
      image: {
        label: 'Image',
        component: {
          type: 'image'
        }
      },
      ...COMMON_OPTIONS.definitions
    }
  }
};
