import {CREATED_ON} from './shared/created-on';

export const SUBCATEGORIES_MODULE =  {
  id: 'subCategories',
  name: 'Sub categories',
  description: 'Product sub categories',
  authorization: {
    write: ['admin']
  },
  layout: {
    order: 7,
    sort: {
      active: 'order',
      direction: 'asc'
    },
    sortModule: {
      sortKey: 'order',
      sortTitle: 'title'
    },
    instance: {
      segments: [
        {
          fields: [
            '/createdOn',
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
        {
          key: '/createdOn',
          label: 'Created On',
          pipe: ['date'],
          sortable: true
        },
        {
          key: '/title',
          label: 'Title'
        },
        {
          key: '/id',
          label: 'URL'
        },
        {
          key: '/category',
          label: 'Category'
        },
        {
          key: '/featured',
          label: 'Featured Image'
        }
      ]
    }
  },
  schema: {
    properties: {
      order: {
        type: 'number'
      },
      id: {
        type: 'string',
      },
      title: {
        type: 'string',
      },
      createdOn: {
        type: 'number'
      },
      featured: {
        type: 'string'
      },
      category: {
        type: 'string'
      },
      description: {
        type: 'string'
      }
    }
  },
  definitions: {
    createdOn: {
      label: 'Created On',
      formatOnLoad: '(value) => value || Date.now()',
      component: {
        type: 'date',
        configuration: {
          format: 'number'
        }
      }
    },
    id: {
      label: 'URL',
      disableOn: 'edit',
      formatOnSave: `(id, item) => id ? id : (item.title || '').replace(/ /g, '-').trim().toLowerCase()`,
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
}