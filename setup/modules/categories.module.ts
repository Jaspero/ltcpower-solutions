import {CREATED_ON} from './shared/created-on';

export const CATEGORIES_MODULE = {
  id: 'categories',
  name: 'Categories',
  description: 'Product categories',
  authorization: {
    write: ['admin']
  },
  layout: {
    sort: {
      active: 'order',
      direction: 'asc'
    },
    sortModule: {
      sort: CREATED_ON.sort,
    },
    instance: {
      segments: [
        {
          fields: [
            '/createdOn',
            '/id',
            '/title',
            '/image',
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
          key: '/image',
          label: 'Image'
        },
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
      image: {
        type: 'string',
      },
      ...CREATED_ON.property
    }
  },
  definitions: {
    id: {
      label: 'URL',
      disableOn: 'edit',
      formatOnSave: `(id, item) => id ? id : (item.title || '').replace(/ /g, '-').trim().toLowerCase()`,
      hint: 'Created from title if left empty.'
    },
    title: {
      label: 'Title'
    },
    image: {
      label: 'Image',
      component: {
        type: 'image'
      }
    },
    ...CREATED_ON.definition()
  }
}
