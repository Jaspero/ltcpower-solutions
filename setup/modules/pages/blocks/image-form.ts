import {COMMON_OPTIONS} from './shared';

export const IMAGE_FORM = {
  id: 'image-form',
  label: 'Image-form',
  icon: 'subject',
  previewTemplate: `<jms-image-form [data]="data"></jms-image-form>`,
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
          '/image'
        ],
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        title: {type: 'string'},
        image: {type: 'string'},
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      title: {label: 'Title'},
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
