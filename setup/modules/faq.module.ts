import {ORDER} from './shared/order';

export const FAQ_MODULE = {
  id: 'faq',
  name: 'Faq',
  description: 'Faq collection',
  layout: {
    editTitleKey: 'name',
    ...ORDER.layout('question'),
    instance: {
      segments: [{
        fields: [
          '/createdOn',
          '/question',
        ]
      }]
    },
    table: {
      tableColumns: [
        {key: '/question', label: 'Question'},
        {key: '/answer', label: 'Answer'}
      ]
    }
  },
  schema: {
    properties: {
      question: {type: 'string'},
      answer: {type: 'string'},
      ...ORDER.property
    },
    required: [
      'question',
      'answer'
    ]
  },
  definitions: {
    question: {label: 'Question'},
    answer: {label: 'Answer'}
  }
};
