import {FORMAT_SEARCH} from '../shared/format-search';
import {META} from '../shared/meta';
import {ORDER} from '../shared/order';
import {BACKGROUND_HERO} from './blocks/background-hero';
import {CARDS} from './blocks/cards';
import {CONTENT_BLOCK} from './blocks/content.block';
import {FORM_BLOCK} from './blocks/form.block';
import {INVENTORY} from './blocks/inventory';
import {MAP} from './blocks/map';
import {COLUMNS} from './blocks/three-columns';
import {PROCESSED} from './processed.const';
import {FAQ} from './blocks/faq';

const blocks = [
  CONTENT_BLOCK,
  FORM_BLOCK,
  INVENTORY,
  BACKGROUND_HERO,
  FAQ,
  CARDS,
  MAP,
  COLUMNS,
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
