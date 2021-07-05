import {CREATED_ON} from './shared/created-on';

export const FAQ_MODULE = {
  id: 'faq',
  name: 'Faq',
  description: 'Faq collection',
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
            '/createdOn',
            '/question',
            '/answer'
          ]
        }
      ]
    },
    table: {
      tableColumns: [
        CREATED_ON.column(),
        {
          key: '/question',
          label: 'Question'
        },
        {
          key: '/answer',
          label: 'Answer'
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
      question: {
        type: 'string'
      },
      answer: {
        type: 'string'
      },
      ...CREATED_ON.property
    },
    required: [
      'question',
      'answer'
    ]
  },
  definitions: {
    question: {
      label: 'Question'
    },
    answer: {
      label: 'Answer',
    },
    ...CREATED_ON.definition()
  },
  metadata: {
    autoSave: 0
  }
};
