import {COMMON_OPTIONS} from './shared';

export const COLUMN_BLOCK = {
  id: 'columns',
  label: 'Columns',
  icon: 'subject',
  previewTemplate: `<jms-three-column-block [data]="data"></jms-three-column-block>`,
  previewValue: {
    content:
      '<h1>Custom Title</h1><h2>Custom Subtitle</h2><p>Custom content</p>',
    ...COMMON_OPTIONS.defaults
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
              image: {type: 'string', default: ' https://firebasestorage.googleapis.com/v0/b/ltcpower.appspot.com/o/members-qSJo-rQQjzFr1ptE2ETPU-profile.png?alt=media&token=e308fbf5-0591-4f5f-9c2f-ba7a8e8dff89'},
              title: {type: 'string'},
              description: {type: 'string'},
            }
          }
        },
        image: {type: 'string'},
        title: {type: 'string'},
        description: {type: 'string'},
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
      description: {label: 'Description'},
      ...COMMON_OPTIONS.definitions
    }
  }
};
