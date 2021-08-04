import {FORMAT_SEARCH} from '../shared/format-search';
import {META} from '../shared/meta';
import {ORDER} from '../shared/order';
import {BACKGROUND_HERO_BLOCK} from './blocks/background-hero.block';
import {CARDS_BLOCK} from './blocks/cards.block';
import {COLUMNS_BLOCK} from './blocks/columns.block';
import {CONTENT_BLOCK} from './blocks/content.block';
import {FAQ_BLOCK} from './blocks/faq.block';
import {FORM_BLOCK} from './blocks/form.block';
import {INVENTORY_BLOCK} from './blocks/inventory.block';
import {MAP_BLOCK} from './blocks/map.block';
import {PROCESSED} from './processed.const';

const blocks = [
  BACKGROUND_HERO_BLOCK,
  CARDS_BLOCK,
  COLUMNS_BLOCK,
  CONTENT_BLOCK,
  FAQ_BLOCK,
  FORM_BLOCK,
  INVENTORY_BLOCK,
  MAP_BLOCK
];

export const PAGES_MODULE = {
  id: 'pages',
  name: 'Pages',
  authorization: {
    write: ['admin']
  },
  layout: {
    editTitleKey: 'title',
    ...ORDER.layout(),
    instance: {
      segments: [
        {
          title: 'GENERAL.GENERAL',
          type: 'card',
          fields: [
            '/id',
            '/title',
            '/header',
            '/footer',
          ],
          columnsDesktop: 6
        },
        META.segment({columnsDesktop: 6}),
        {
          type: 'empty',
          fields: [
            '/blocks'
          ]
        }
      ]
    },
    table: {
      tableColumns: [
        {key: '/title', label: 'PB.FORM.TITLE'},
        {key: '/id', label: 'URL'},
        {key: '/header', label: 'Header', control: true},
        {key: '/footer', label: 'Footer', control: true},
      ]
    }
  },
  schema: {
    properties: {
      id: {type: 'string'},
      title: {type: 'string'},
      header: {type: 'boolean'},
      footer: {type: 'boolean'},
      blocks: {type: 'array'},
      ...META.property(),
      ...ORDER.property
    }
  },
  definitions: {
    id: {
      label: 'URL',
      disableOn: 'edit',
      formatOnSave: FORMAT_SEARCH(),
      hint: 'Created from title if left empty'
    },
    title: {label: 'Title'},
    header: {label: 'Show In Header'},
    footer: {label: 'Show In Footer'},
    blocks: {
      component: {
        type: 'pb-blocks',
        configuration: {
          styles: PROCESSED.css,
          blocks,
          styleUrls: []
        }
      }
    },
    ...META.definitions()
  }
};
