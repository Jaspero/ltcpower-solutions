import {COMMON_OPTIONS} from './shared';

export const CARDS = {
  id: 'cards',
  label: 'Cards',
  icon: 'view_column',
  previewTemplate: `<ltc-cards [data]="data"></ltc-cards>`,
  previewValue: {
    cards: [
      {
        image: 'https://dummyimage.com/300x300/000/fff',
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
        title: 'CARDS',
        array: '/cards',
        fields: [
          '/style',
          '/background',
          '/linkHref'
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
              image: {type: 'string', default: 'https://dummyimage.com/300x300/000/fff'},
              title: {type: 'string', default: '<h2>Naslov</h2>'},
              subtitle: {type: 'string', default: '<h3>Podnaslov</h3>'},
              content: {type: 'string', default: '<p>Sadržaj</p>'},
              link: {type: 'string'},
              linkHref: {type: 'string'},
              style: {type: 'string'},
              background: {type: 'string'}
            }
          }
        },
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
      'cards/linkHref': {label: 'Card-link'},
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
      'cards/background': {label: 'Card-background'},
      ...COMMON_OPTIONS.definitions
    }
  }
};
