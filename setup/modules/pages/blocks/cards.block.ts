import {COMMON_OPTIONS} from './shared';

export const CARDS_BLOCK = {
  id: 'cards',
  label: 'Cards',
  icon: 'view_column',
  previewTemplate: `<ltc-cards [data]="data"></ltc-cards>`,
  previewValue: {
    cards: [
      {
        image: 'https://firebasestorage.googleapis.com/v0/b/ltcpower.appspot.com/o/members-qSJo-rQQjzFr1ptE2ETPU-profile.png?alt=media&token=e308fbf5-0591-4f5f-9c2f-ba7a8e8dff89',
        title: '<h2 style="text-align:center">Kartica 1</h2>',
        subtitle: '<h3 style="text-align:center">Podnaslov 1</h3>',
        content: '<p style="text-align:center">Sadržaj 1</p>',
        link: ''
      },
      {
        image: 'https://dummyimage.com/300x300/000/fff',
        title: '<h2 style="text-align:center">Kartica 2</h2>',
        subtitle: '<h3 style="text-align:center">Podnaslov 2</h3>',
        content: '<p style="text-align:center">Sadržaj 2</p>',
        link: ''
      },
      {
        image: 'https://dummyimage.com/300x300/000/fff',
        title: '<h2 style="text-align:center">Kartica 3</h2>',
        subtitle: '<h3 style="text-align:center">Podnaslov 3</h3>',
        content: '<p style="text-align:center">Sadržaj 3</p>',
        link: ''
      }
    ],
    title: 'Our Team',
    ...COMMON_OPTIONS.defaults
  },
  form: {
    segments: [
      {
        fields: [
          '/title'
        ]
      },
      {
        title: 'Cards',
        array: '/cards',
        fields: [
          '/linkHref',
          '/image',
          '/name',
          '/role',
          '/background',
          '/description'
        ]
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        cards: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              image: {type: 'string', default: ' https://firebasestorage.googleapis.com/v0/b/ltcpower.appspot.com/o/members-qSJo-rQQjzFr1ptE2ETPU-profile.png?alt=media&token=e308fbf5-0591-4f5f-9c2f-ba7a8e8dff89'},
              name: {type: 'string'},
              role: {type: 'string'},
              description: {type: 'string'},
              linkHref: {type: 'string'},
              style: {type: 'string'},
              background: {type: 'string'}
            }
          }
        },
        title: {type: 'string'},
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      title: {label: 'Title'},
      'cards/image': {
        label: 'Image',
        component: {
          type: 'image'
        }
      },
      'cards/name': {label: 'Name'},
      'cards/role': {label: 'Role'},
      'cards/description': {
        label: 'Description',
        component: {
          type: 'tinymce'
        }
      },
      'cards/linkHref': {
        label: 'Link',
        component: {
          type: 'input',
          configuration: {
            type: 'url'
          }
        }
      },
      'cards/background': {
        label: 'Background',
        component: {
          type: 'input',
          configuration: {
            type: 'color'
          }
        }
      },
      ...COMMON_OPTIONS.definitions
    }
  }
};
