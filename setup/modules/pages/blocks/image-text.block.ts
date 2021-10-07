import {COMMON_OPTIONS} from './shared';

export const IMAGE_TEXT_BLOCK = {
  id: 'image-text',
  label: 'Image-text',
  icon: 'image',
  previewTemplate: `<jms-image-text [data]="data"></jms-image-text>`,
  previewValue: {
    title: `<h5>Example Title</h5>`,
    description: `<p>This is an example description.</p>`,
    ...COMMON_OPTIONS.defaults
  },
  form: {
    segments: [
      {
        type: 'empty',
        fields: [
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
      image: {label: 'Image', component: {type: 'image'}},
      ...COMMON_OPTIONS.definitions
    }
  }
};
