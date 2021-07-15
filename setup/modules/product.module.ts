import {CREATED_ON} from './shared/created-on';

export const PRODUCT_MODULE = {
  id: 'products',
  name: 'Product',
  description: 'Collection of products',
  authorization: {
    read: ['admin'],
    write: ['admin']
  },
  layout: {
    editTitleKey: 'name',
    sort: CREATED_ON.sort,
    instance: {
      segments: [
        {
          components: [
            {
              selector: 'duplicate'
            }
          ]
        },
        {
          fields: [
            '/id',
            '/title',
            '/createdOn',
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
        CREATED_ON.column(),
        {
          key: '/title',
          label: 'Title'
        },
        {
          key: '/id',
          label: 'URL'
        },
        {
          key: '/categories',
          label: 'Category'
        },
        {
          key: '/subCategory',
          label: 'Sub category'
        },
      ],
      actions: [
        {
          value: `it => '<jms-e-new-prepopulate collection="users" data-name="Prefill Test" data-email="{{it.data.description}}" label="Assign User"></jms-e-new-prepopulate>'`
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
      categories: {
        type: 'string'
      },
      subCategory: {
        type: 'string'
      },
      featured: {
        type: 'string'
      },
      excerpt: {
        type: 'string'
      },
      meta: {
        type: 'object',
        properties: {
          structured: {
            type: 'string'
          },
          description: {
            type: 'string'
          },
          title: {
            type: 'string'
          },
          keywords: {
            type: 'string'
          }
        }
      },
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
      label: 'Category',a
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
      formatOnSave: `(id, item) => id ? id : (item.title || '').replace(/ /g, '-').trim().toLowerCase()`,
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
    title: {
      label: 'Title'
    },
    ...CREATED_ON.definition()
  },
  metadata: {
    autoSave: 0
  }
}