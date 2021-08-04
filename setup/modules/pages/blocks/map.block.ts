import {COMMON_OPTIONS} from './shared';

export const MAP_BLOCK = {
  id: 'map',
  label: 'Map',
  icon: 'map',
  previewTemplate: `<jms-map [data]="data"></jms-map>`,
  previewValue: {
    ...COMMON_OPTIONS.defaults
  },
  form: {
    segments: [
      {
        type: 'empty',
        fields: ['/link']
      },
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        link: {type: 'string'},
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      link: {label: 'Link'},
      ...COMMON_OPTIONS.definitions
    }
  }
};
