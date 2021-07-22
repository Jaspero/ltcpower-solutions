import {FORMAT_SEARCH} from './shared/format-search';
import {IMAGE_PIPE} from './shared/image-pipe';
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
    ...ORDER.layout(),
    instance: {
      segments: [
        {
          title: 'General',
          fields: [
            '/title',
            '/id',
            '/subCategory',
            '/featured',
            '/excerpt'
          ]
        }
      ]
    },
    table: {
      tableColumns: [
        {
          key: '/featured',
          label: 'Featured Image',
          pipe: ['custom'],
          pipeArguments: {
            0: IMAGE_PIPE
          }
        },
        {key: '/title', label: 'Title'},
        {key: '/id', label: 'URL'},
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
      hint: 'Created from title if left empty.',
      columnsDesktop: 6
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
    title: {label: 'Title', columnsDesktop: 6},
    ...META.definitions()
  }
};
