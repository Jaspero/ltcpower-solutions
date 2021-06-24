import {minify} from 'csso';
import {readFileSync} from 'fs';
import {join} from 'path';
import {CREATED_ON} from '../shared/created-on';
import {FORMAT_SEARCH} from '../shared/format-search';
import {META} from '../shared/meta';
import {CONTENT_BLOCK} from './blocks/content.block';
import {FORM_BLOCK} from './blocks/form.block';
import {INVENTORY_BLOCK} from './blocks/inventory-block';

const blocks = [
  CONTENT_BLOCK,
  FORM_BLOCK,
  INVENTORY_BLOCK
];

const {css: styles} = minify(
  readFileSync(join(__dirname, 'style.css')).toString()
);

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
            '/title'
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
        {key: '/id', label: 'URL'}
      ]
    }
  },
  schema: {
    properties: {
      id: {type: 'string'},
      title: {type: 'string'},
      blocks: {type: 'array'},
      ...META.property(),
    }
  },
  definitions: {
    id: {
      label: 'URL',
      disableOn: 'edit',
      formatOnSave: FORMAT_SEARCH(),
      hint: 'PB.FORM.ID_HINT'
    },
    title: {label: 'Title'},
    blocks: {
      component: {
        type: 'pb-blocks',
        configuration: {
          styles,
          blocks,
          styleUrls: []
        }
      }
    },
    ...META.definitions()
  }
};
