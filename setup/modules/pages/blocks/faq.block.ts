import {COMMON_OPTIONS} from './shared';

export const FAQ_BLOCK = {
  id: 'faq',
  label: 'Faq',
  icon: 'help',
  previewTemplate: `<jms-faq [data]="data"></jms-faq>`,
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
          '/googleMapLink',
          '/phoneNumber',
          '/email',
          '/address',
          '/hideFAQ'
        ]
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        title: {type: 'string'},
        googleMapLink: {type: 'string'},
        phoneNumber: {type: 'string'},
        email: {type: 'string'},
        address: {type: 'string'},
        hideFAQ: {type: 'boolean'},
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
      title: {label: 'Title'},
      hideFAQ: {label: 'Hide FAQ'},
      googleMapLink: {label: 'Google map link'},
      phoneNumber: {label: 'Phone number'},
      email: {label: 'Email'},
      address: {label: 'Adress'},
      ...COMMON_OPTIONS.definitions
    }
  }
};
