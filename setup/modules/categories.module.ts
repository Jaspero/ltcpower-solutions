import {CREATED_ON} from './shared/created-on';

export const CATEGORIES_MODULE = {
  id: 'categories',
  name: 'Categories',
  description: 'Product categories',
  authorization: {
    write: ['admin']
  },
  layout: {
    order: 6,
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
            '/id',
            '/title',
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
    title: {
      label: 'Title'
    },
  }
}
