import {FORMAT_SEARCH} from '../shared/format-search';
import {META} from '../shared/meta';
import {BACKGROUND_HERO} from './blocks/background-hero';
import {CARDS} from './blocks/cards.block';
import {CONTENT_BLOCK} from './blocks/content.block';
import {FAQ_BLOCK} from './blocks/faq-block';
import {FORM_BLOCK} from './blocks/form.block';
import {INVENTORY_BLOCK} from './blocks/inventory.block';
import {MAP} from './blocks/map';
import {PRODUCT_BLOCK} from './blocks/product-block';
import {COLUMN_BLOCK} from './blocks/three-column-block';
import {PROCESSED} from './processed.const';

const blocks = [
  CONTENT_BLOCK,
  FORM_BLOCK,
  INVENTORY_BLOCK,
  BACKGROUND_HERO,
  FAQ_BLOCK,
  CARDS,
  MAP,
  COLUMN_BLOCK,
  PRODUCT_BLOCK
];

export const PAGES_MODULE = {
  id: 'pages',
  name: 'Pages',
  authorization: {
    write: ['admin']
  },
  layout: {
    editTitleKey: 'title',
    instance: {
      segments: [
        {
          title: 'GENERAL.GENERAL',
          type: 'card',
          fields: [
            '/id',
            '/title',
            '/featured',
            '/order'
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
        {key: '/featured', label: 'Featured', control: true },
      ]
    }
  },
  schema: {
    properties: {
      id: {type: 'string'},
      title: {type: 'string'},
      featured: {type: 'boolean'},
      order: {type: 'number'},
      blocks: {type: 'array'},
      ...META.property(),
    },
    required: ['order']
  },
  definitions: {
    id: {
      label: 'URL',
      disableOn: 'edit',
      formatOnSave: FORMAT_SEARCH(),
      hint: 'PB.FORM.ID_HINT'
    },
    title: {label: 'Title'},
    featured: {label: 'Featured'},
    order: {label: 'Order'},
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
