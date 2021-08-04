import {COMMON_OPTIONS} from './shared';

export const COLUMNS_BLOCK = {
  id: 'columns',
  label: 'Columns',
  icon: 'view_week',
  previewTemplate: `<jms-three-column [data]="data"></jms-three-column>`,
  previewValue: {
    ...COMMON_OPTIONS.defaults,
    columns: [
      {
        title: 'Hundreds of generators in stock',
        description: 'We have what you need',
        image: 'https://firebasestorage.googleapis.com/v0/b/ltcpower.appspot.com/o/block-presets-anywhere-anysize-anytime-anywhere.svg?alt=media'
      },
      {
        title: 'Excellent customer service',
        description: 'We strive to make every rental stress free for you',
        image: 'https://firebasestorage.googleapis.com/v0/b/ltcpower.appspot.com/o/block-presets-anywhere-anysize-anytime-anysize.svg?alt=media'
      },
      {
        title: 'Always there for you',
        description: 'We will get you a generator when you need it most',
        image: 'https://firebasestorage.googleapis.com/v0/b/ltcpower.appspot.com/o/block-presets-anywhere-anysize-anytime-anytime.svg?alt=media'
      }
    ]
  },
  form: {
    segments: [
      {
        title: 'Columns',
        array: '/columns',
        fields: [
          '/title',
          '/image',
          '/description'
        ]
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        columns: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              image: {
                type: 'string',
                default: 'https://firebasestorage.googleapis.com/v0/b/ltcpower.appspot.com/o/block-presets-anywhere-anysize-anytime-anywhere.svg?alt=media'
              },
              title: {type: 'string'},
              description: {type: 'string'},
            }
          }
        },
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      'columns/image': {
        label: 'Image',
        component: {
          type: 'image'
        }
      },
      'columns/title': {label: 'Title'},
      'columns/description': {label: 'Description'},
      ...COMMON_OPTIONS.definitions
    }
  }
};
