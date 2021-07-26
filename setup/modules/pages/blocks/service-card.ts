import {COMMON_OPTIONS} from './shared';

export const SERVICECARD = {
  id: 'service-card',
  label: 'Service Card',
  icon: 'view_column',
  previewTemplate: `<jms-service-card [data]="data"></jms-service-card>`,
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
    style: 'card-1',
    ...COMMON_OPTIONS.defaults
  },
  form: {
    segments: [
      {
        title: 'Service Cards',
        array: '/cards',
        fields: [
          '/style',
          '/image',
          '/title',
          '/description'
        ]
      },
      {
        title: 'Style',
        fields: [
          '/style',
        ]
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        style: {type: 'string'},
        cards: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              image: {type: 'string', default: ' https://firebasestorage.googleapis.com/v0/b/ltcpower.appspot.com/o/members-qSJo-rQQjzFr1ptE2ETPU-profile.png?alt=media&token=e308fbf5-0591-4f5f-9c2f-ba7a8e8dff89'},
              title: {type: 'string'},
              description: {type: 'string'},
              style: {type: 'string'},
            }
          }
        },
        image: {type: 'string'},
        title: {type: 'string'},
        role: {type: 'string'},
        description: {type: 'string'},
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      style: {
        label: 'Cards-style',
        component: {
          type: 'select',
          configuration: {
            dataSet: [
              {name: 'style-one', value: 'card-1'},
              {name: 'style-two', value: 'card-2'},
              {name: 'style-three', value: 'card-3'},
            ]
          }
        }
      },
      image: {
        label: 'Image',
        component: {
          type: 'image'
        }
      },
      title: {label: 'Title'},
      description: {label: 'Description'},
      'cards/style': {
        label: 'Card-style',
        component: {
          type: 'select',
          configuration: {
            dataSet: [
              {name: 'Blank', value: ''},
              {name: 'Border', value: 'border'},
              {name: 'Shadow', value: 'shadow'},
            ]
          }
        }
      },
      ...COMMON_OPTIONS.definitions
    }
  }
};
