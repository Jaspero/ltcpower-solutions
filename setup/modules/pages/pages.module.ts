import {CREATED_ON} from '../shared/created-on';
import {FORMAT_SEARCH} from '../shared/format-search';
import {META} from '../shared/meta';
import {CONTENT_BLOCK} from './blocks/content.block';
import {FORM_BLOCK} from './blocks/form.block';
import {PROCESSED} from './processed.const';
import {INVENTORY_BLOCK} from './blocks/inventory.block';
import {BACKGROUND_HERO_BLOCK} from './blocks/background-hero-block';
import {CARDS} from './blocks/cards.block';
import {FAQ_BLOCK} from './blocks/faq-block';
import {MAP_BLOCK} from './blocks/map-block';
import {COLUMN_BLOCK} from './blocks/three-column-block';
import {PRODUCT_BLOCK} from './blocks/product-block';


const blocks = [
  CONTENT_BLOCK,
  FORM_BLOCK,
  INVENTORY_BLOCK,
  BACKGROUND_HERO_BLOCK,
  FAQ_BLOCK,
  CARDS,
  MAP_BLOCK,
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
          type: 'card',
          fields: [
            '/id',
            '/title',
            '/featured',
            '/order'
          ]
        },
        {
          type: 'empty',
          fields: [
            '/blocks'
          ]
        },
        META.segment()
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
