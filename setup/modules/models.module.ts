import {FORMAT_SEARCH} from './shared/format-search';
import {META} from './shared/meta';
import {ORDER} from './shared/order';

export const MODELS_MODULE = {
  id: 'models',
  name: 'Models',
  authorization: {
    write: ['admin']
  },
  layout: {
    editTitleKey: 'title',
    ...ORDER.layout(),
    instance: {
      segments: [
        {
          title: 'General',
          fields: [
            '/title',
            '/id',
            '/product',
            '/excerpt',
            '/featured'
          ],
          columnsDesktop: 6
        },
        META.segment({columnsDesktop: 6}),
        {
          title: 'Primary Specifications',
          array: '/primarySpecs',
          fields: [
            '/label',
            '/value'
          ],
          columnsDesktop: 6
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
          }],
          columnsDesktop: 6
        }
      ]
    },
    table: {
      tableColumns: [
        {key: '/product', label: 'Product'},
        {key: '/title', label: 'Title'},
        {key: '/id', label: 'URL'}
      ]
    }
  },
  schema: {
    properties: {
      id: {type: 'string',},
      title: {type: 'string',},
      excerpt: {type: 'string'},
      featured: {type: 'string'},
      product: {type: 'string'},
      specifications: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            label: {type: 'string'},
            values: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  label: {type: 'string'},
                  value: {type: 'string'}
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
            label: {type: 'string'},
            value: {type: 'string'}
          }
        }
      },
      ...ORDER.property,
      ...META.property(),
    }
  },
  definitions: {
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
      formatOnSave: FORMAT_SEARCH(),
      hint: 'Created from title if left empty.',
      columnsDesktop: 6
    },
    title: {label: 'Title', columnsDesktop: 6},
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
    ...META.definitions()
  }
};
