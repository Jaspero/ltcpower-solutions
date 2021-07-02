import {CREATED_ON} from './shared/created-on';

export const SUBCATEGORIES_MODULE = {
  id: 'subcategories',
  name: 'Sub-categories',
  description: 'Collection of sub-categories',
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
            '/title',
            '/image'
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
          key: '/image',
          label: 'Image'
        }
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
      title: {
        type: 'string'
      },
      image: {
        type: 'string'
      },
    },
    required: [
      'title',
      'image'
    ]
  },
  definitions: {
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
  },
  metadata: {
    autoSave: 0
  }
};
