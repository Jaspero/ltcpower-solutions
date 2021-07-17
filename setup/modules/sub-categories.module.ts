import {FORMAT_SEARCH} from './shared/format-search';
import {ORDER} from './shared/order';

export const SUBCATEGORIES_MODULE =  {
  id: 'subCategories',
  name: 'Sub categories',
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
            '/category',
            '/featured',
            '/id',
            '/title',
            '/description'
          ]
        }
      ]
    },
    table: {
      tableColumns: [
        {key: '/title', label: 'Title'},
        {key: '/id', label: 'URL'},
        {key: '/category', label: 'Category'},
        {key: '/featured', label: 'Featured Image'}
      ]
    }
  },
  schema: {
    properties: {
      id: {type: 'string'},
      title: {type: 'string'},
      featured: {type: 'string'},
      category: {type: 'string'},
      description: {type: 'string'},
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
    category: {
      label: 'Category',
      component: {
        type: 'select',
        configuration: {
          populate: {
            collection: 'categories',
            orderBy: 'order',
            nameKey: 'title'
          }
        }
      }
    },
    description: {
      label: 'Description',
      component: {
        type: 'textarea'
      }
    },
    featured: {
      label: 'Featured Image',
      component: {
        type: 'image'
      }
    },
    title: {
      label: 'Title'
    },
  }
};
