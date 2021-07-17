import {FORMAT_SEARCH} from './shared/format-search';
import {ORDER} from './shared/order';

export const CATEGORIES_MODULE = {
  id: 'categories',
  name: 'Categories',
  authorization: {
    write: ['admin']
  },
  layout: {
    editTitleKey: 'title',
    ...ORDER.layout(),
    instance: {
      segments: [
        {
          title: 'General',
          fields: [
            '/id',
            '/title',
            '/image',
          ]
        }
      ]
    },
    table: {
      tableColumns: [
        {key: '/title', label: 'Title'},
        {key: '/id', label: 'URL'},
        {key: '/image', label: 'Image'},
      ]
    }
  },
  schema: {
    properties: {
      id: {type: 'string'},
      title: {type: 'string'},
      image: {type: 'string'},
      ...ORDER.property
    }
  },
  definitions: {
    id: {
      label: 'URL',
      disableOn: 'edit',
      formatOnSave: FORMAT_SEARCH(),
      hint: 'Created from title if left empty.'
    },
    title: {label: 'Title'},
    image: {
      label: 'Image',
      component: {
        type: 'image'
      }
    }
  }
};
