import {ORDER} from './shared/order';

export const PROJECTS_MODULE = {
  id: 'projects',
  name: 'Projects',
  description: 'Projects collection',
  layout: {
    editTitleKey: 'name',
    ...ORDER.layout('question'),
    instance: {
      segments: [{
        fields: [
          '/name',
          '/excerpt',
          '/featuredImage',
          '/description',
          '/gallery'
        ]
      }]
    },
    table: {
      tableColumns: [
        {key: '/name', label: 'Name'},
        {key: '/excerpt', label: 'Excerpt'},
      ]
    }
  },
  schema: {
    properties: {
      id: {type: 'string'},
      order: {type: 'number'},
      createdOn: {type: 'number'},
      name: {type: 'string'},
      excerpt: {type: 'string'},
      featuredImage: {type: 'string'},
      description: {type: 'string'},
      gallery: {type: 'array'},
      ...ORDER.property
    },
  },
  definitions: {
    name: {label: 'Name'},
    excerpt: {label: 'Excerpt'},
    featuredImage: {label: 'Featured Image', component: {type: 'image'}},
    description: {label: 'Description'},
    gallery: {
      label: 'Gallery',
      component: {
        type: 'gallery',
        configuration: {
          allowServerUpload: true
        }
      }
    }
  }
};
