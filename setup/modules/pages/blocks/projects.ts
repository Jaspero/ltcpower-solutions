import {COMMON_OPTIONS} from './shared';

export const PROJECTS = {
  id: 'projects',
  label: 'Projects',
  icon: 'subject',
  previewTemplate: `<jms-projects [data]="data"></jms-projects>`,
  previewValue: {
    content: '<h1>Custom Title</h1><h2>Custom Subtitle</h2><p>Custom content</p>',
    ...COMMON_OPTIONS.defaults
  },
  form: {
    segments: [
      {
        type: 'empty',
        fields: [
          '/name',
          '/excerpt',
          '/featuredImage',
        ],
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        id: {
          type: 'string'
        },
        createdOn: {
          type: 'number'
        },
        name: {
          type: 'string'
        },
        excerpt: {
          type: 'string'
        },
        featuredImage: {
          type: 'string'
        },
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      name: {
        label: 'Name'
      },
      excerpt: {
        label: 'Excerpt'
      },
      featuredImage: {
        label: 'Featured Image',
        component: {
          type: 'image'
        }
      },
      ...COMMON_OPTIONS.definitions
    }
  }
};
