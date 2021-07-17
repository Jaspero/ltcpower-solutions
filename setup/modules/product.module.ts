import {FORMAT_SEARCH} from './shared/format-search';
import {META} from './shared/meta';
import {ORDER} from './shared/order';

export const PRODUCT_MODULE = {
  id: 'products',
  name: 'Product',
  authorization: {
    write: ['admin']
  },
  layout: {
    editTitleKey: 'title',
    ...ORDER,
    instance: {
      segments: [
        {
          title: 'General',
          fields: [
            '/id',
            '/title',
            '/categories',
            '/subCategory',
            '/featured',
            '/excerpt'
          ]
        }
      ]
    },
    table: {
      tableColumns: [
        {key: '/title', label: 'Title'},
        {key: '/id', label: 'URL'},
        {key: '/categories', label: 'Category'},
        {key: '/subCategory', label: 'Sub category'},
      ]
    }
  },
  schema: {
    properties: {
      id: {type: 'string',},
      title: {type: 'string',},
      categories: {type: 'string'},
      subCategory: {type: 'string'},
      featured: {type: 'string'},
      excerpt: {type: 'string'},
      ...ORDER.property,
    },
    required: [
      'title',
      'image'
    ]
  },
  definitions: {
    subCategory: {
      label: 'Sub category',
      component: {
        type: 'select',
        configuration: {
          populate: {
            collection: 'subCategories',
            orderBy: 'order',
            nameKey: 'title'
          }
        }
      }
    },
    categories: {
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
    id: {
      label: 'URL',
      disableOn: 'edit',
      formatOnSave: FORMAT_SEARCH(),
      hint: 'Created from title if left empty.'
    },
    featured: {
      label: 'Featured Image',
      component: {
        type: 'image'
      }
    },
    excerpt: {
      label: 'Short Description',
      component: {
        type: 'textarea'
      }
    },
    title: {label: 'Title'},
    ...META.definitions()
  }
};
