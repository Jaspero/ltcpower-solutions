import {CREATED_ON} from './shared/created-on';

export const MODELS_MODULE = {
  id: 'models',
  name: 'Models',
  description: 'Different models of a product',
  authorization: {
    write: ['admin'],
    read: ['admin']
  },
  layout: {
    order: 8,
    sort: {
      active: 'title',
      direction: 'asc'
    },
    sortModule: {
      sortKey: 'order',
      sortTitle: 'title'
    },
    instance: {
      segments: [
        {
          title: 'General',
          fields: [
            '/createdOn',
            '/id',
            '/product',
            '/title',
            '/excerpt',
            '/featured'
          ]
        },
        {
          title: 'Primary Specifications',
          array: '/primarySpecs',
          fields: [
            '/label',
            '/value'
          ]
        },
        {
          title: 'Specifications',
          array: '/specifications',
          fields: [
            '/label'
          ],
          nestedSegments: [{
            title: 'Values',
            array: '/values',
            fields: [
              '/label',
              '/value'
            ]
          }]
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
          key: '/product',
          label: 'Product'
        },
        {
          key: '/title',
          label: 'Title'
        },
        {
          key: '/id',
          label: 'URL'
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
      excerpt: {
        type: 'string'
      },
      featured: {
        type: 'string'
      },
      createdOn: {
        type: 'number'
      },
      product: {
        type: 'string'
      },
      specifications: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            label: {
              type: 'string'
            },
            values: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  label: {
                    type: 'string'
                  },
                  value: {
                    type: 'string'
                  }
                }
              }
            }
          }
        }
      },
      primarySpecs: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            label: {
              type: 'string'
            },
            value: {
              type: 'string'
            }
          }
        }
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
    product: {
      label: 'Product',
      component: {
        type: 'select',
        configuration: {
          populate: {
            collection: 'products',
            orderBy: 'order',
            nameKey: 'title'
          }
        }
      }
    },
    id: {
      label: 'URL',
      disableOn: 'edit',
      formatOnSave: `(id, item) => id ? id : (item.title || '').replace(/ /g, '-').trim().toLowerCase()`,
      hint: 'Created from title if left empty.'
    },
    title: {
      label: 'Title'
    },
    excerpt: {
      label: 'Excerpt',
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
    'primarySpecs/label': {
      label: 'Label',
      columnsDesktop: 6,
      columnsMobile: 12
    },
    'primarySpecs/value': {
      label: 'Value',
      columnsDesktop: 6,
      columnsMobile: 12
    },
    'specifications/label': {
      label: 'Label',
    },
    'specifications/values/label': {
      label: 'Label',
      columnsDesktop: 6,
      columnsMobile: 12
    },
    'specifications/values/value': {
      label: 'Value',
      columnsDesktop: 6,
      columnsMobile: 12
    },
  }
}