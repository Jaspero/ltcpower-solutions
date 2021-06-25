import {COMMON_OPTIONS} from './shared';

export const CARDS = {
  id: 'cards',
  label: 'PB.FORM.BLOCKS.CARDS.TITLE',
  icon: 'view_column',
  previewTemplate: `<et-cards [data]="data"></et-cards>`,
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
        title: 'PB.FORM.BLOCKS.CARDS.TITLE',
        array: '/cards',
        fields: [
          '/style',
          '/background',
          '/linkHref'
        ]
      },
      {
        title: 'PB.FORM.BLOCKS.SHARED.BLOCK_OPTIONS',
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
        label: 'PB.FORM.BLOCKS.CARDS.FIELDS.STYLE',
        component: {
          type: 'select',
          configuration: {
            dataSet: [
              {name: 'PB.FORM.BLOCKS.CARDS.FIELDS.STYLE_ONE', value: 'card-1'},
              {name: 'PB.FORM.BLOCKS.CARDS.FIELDS.STYLE_TWO', value: 'card-2'},
              {name: 'PB.FORM.BLOCKS.CARDS.FIELDS.STYLE_THREE', value: 'card-3'},
            ]
          }
        }
      },
      'cards/linkHref': {label: 'PB.FORM.BLOCKS.CARDS.FIELDS.LINK_HREF'},
      'cards/style': {
        label: 'PB.FORM.BLOCKS.CARDS.FIELDS.CARD_STYLE',
        component: {
          type: 'select',
          configuration: {
            dataSet: [
              {name: 'PB.FORM.BLOCKS.CARDS.FIELDS.CARD_STYLE_PLAIN', value: ''},
              {name: 'PB.FORM.BLOCKS.CARDS.FIELDS.CARD_STYLE_BORDER', value: 'border'},
              {name: 'PB.FORM.BLOCKS.CARDS.FIELDS.CARD_STYLE_SHADOW', value: 'shadow'},
            ]
          }
        }
      },
      'cards/background': {label: 'PB.FORM.BLOCKS.CARDS.FIELDS.BACKGROUND'},
      ...COMMON_OPTIONS.definitions
    }
  }
};
