import {COMMON_OPTIONS} from './shared';

export const PROJECTS_BLOCK = {
  id: 'projects',
  label: 'Projects',
  icon: 'burst_mode',
  previewTemplate: `<jms-projects [data]="data"></jms-projects>`,
  previewValue: {
    title: `<h1>Our projects</h1>`,
    ...COMMON_OPTIONS.defaults
  },
  form: {
    segments: [
      ...COMMON_OPTIONS.segment
    ],
    schema: {
      properties: {
        title: {type: 'string'},
        ...COMMON_OPTIONS.properties
      }
    },
    definitions: {
      ...COMMON_OPTIONS.definitions
    }
  }
};
