import {COMMON_OPTIONS} from './shared';

export const FORM_BLOCK = {
  id: 'form',
  label: 'PB.FORM.BLOCKS.FORM.TITLE',
  icon: 'contact_mail',
  previewTemplate: `<jms-form [data]="data"></jms-form>`,
  previewValue: {
    title: '<h2>Form Title</h2>',
    description: '<h3>Form description</h3>',
    action: 'Send Message',
    image: 'https://via.placeholder.com/500x320'
  },
  form: {
    segments: [
      {
        type: 'empty',
        fields: [
          '/form',
          '/email',
          '/action'
        ]
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        title: {type: 'string'},
        description: {type: 'string'},
        form: {type: 'string'},
        email: {type: 'string'},
        action: {type: 'string'},
        image: {type: 'string'},
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      form: {
        component: {
          type: 'ref',
          configuration: {
            collection: 'forms',
            searchBy: {key: '/name', label: 'GENERAL.NAME'},
            display: {key: '/name', label: 'PB.FORM.BLOCKS.FORM.FIELDS.FORM'},
            table: {
              tableColumns: [
                {key: '/name', label: 'GENERAL.NAME'}
              ]
            }
          }
        }
      },
      email: {
        component: {
          type: 'ref',
          configuration: {
            collection: 'automatic-emails',
            searchBy: {key: '/name', label: 'GENERAL.NAME'},
            display: {key: '/name', label: 'GENERAL.EMAIL'},
            table: {
              tableColumns: [
                {key: '/name', label: 'GENERAL.NAME'},
                {key: '/description', label: 'GENERAL.DESCRIPTION'},
              ]
            }
          }
        }
      },
      action: {
        label: 'Action'
      },
      image: {
        component: {
          type: 'image'
        }
      },
      ...COMMON_OPTIONS.definitions
    }
  }
};
