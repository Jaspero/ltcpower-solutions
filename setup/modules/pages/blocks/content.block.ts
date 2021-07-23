import {COMMON_OPTIONS} from './shared';

export const CONTENT_BLOCK = {
  id: 'content',
  label: 'PB.FORM.BLOCKS.CONTENT.TITLE',
  icon: 'subject',
  previewTemplate: `<jms-content [data]="data"></jms-content>`,
  previewValue: {
    content:
      '<h1>Custom Title</h1><h2>Custom Subtitle</h2><p>Custom content</p>',
    ...COMMON_OPTIONS.defaults
  },
  form: {
    segments: [
      {
        type: 'empty',
        fields: ['/title', '/description']
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        title: {type: 'string'},
        description: {type: 'string'},
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      title: {label: 'Title'},
      description: {
        label: 'Description',
        component: {
          type: 'tinymce'
        },
        configuration: {
          options: {
            plugins: ['link', 'list', 'autolink', 'emoticons'],
            menubar: false,
            toolbar: [
              'styleselect',
              'bold italic underline',
              'list',
              'link emoticons'
            ].join(' | ')
          }
        }
      },
      ...COMMON_OPTIONS.definitions
    }
  }
};
