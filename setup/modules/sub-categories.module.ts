import {FORMAT_SEARCH} from './shared/format-search';
import {IMAGE_PIPE} from './shared/image-pipe';
import {ORDER} from './shared/order';

export const SUBCATEGORIES_MODULE =  {
  id: 'subCategories',
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
            '/title',
            '/id',
            '/featured',
            '/description'
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
        {key: '/id', label: 'URL'}
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
      hint: 'Created from title if left empty.',
      columnsDesktop: 6
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
      component: {type: 'textarea'}
    },
    featured: {
      label: 'Featured Image',
      component: {type: 'image'}
    },
    title: {label: 'Title', columnsDesktop: 6},
  }
};
