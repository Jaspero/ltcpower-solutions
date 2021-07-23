export const COMMON_OPTIONS = {
  properties: {
    size: {type: 'string'},
    contained: {type: 'boolean'},
    background: {type: 'string'},
    verticalAlignment: {type: 'string'},
    additionalStyle: {type: 'string'},
    backgroundRepeat: {type: 'boolean'},
    backgroundSize: {type: 'string'}
  },
  segment: [
    {
      type: 'accordion',
      configuration: [
        {
          title: 'PB.FORM.BLOCKS.SHARED.STANDARD_OPTIONS',
          fields: [
            '/size',
            '/verticalAlignment',
            '/background',

            // TODO: Show only when background is url
            '/backgroundRepeat',
            '/backgroundSize',
            '/contained'
          ]
        },
        {
          title: 'PB.FORM.BLOCKS.SHARED.ADVANCED_OPTIONS',
          fields: ['/additionalStyle']
        }
      ]
    }
  ],
  definitions: {
    size: {
      label: 'PB.FORM.BLOCKS.SHARED.SIZE',
      component: {
        type: 'select',
        configuration: {
          dataSet: [
            {name: 'PB.FORM.BLOCKS.SHARED.SIZE_SMALL', value: 'small'},
            {name: 'PB.FORM.BLOCKS.SHARED.SIZE_REGULAR', value: 'regular'},
            {name: 'PB.FORM.BLOCKS.SHARED.SIZE_LARGE', value: 'large'},
            {
              name: 'PB.FORM.BLOCKS.SHARED.SIZE_FULL_SCREEN',
              value: 'full-screen'
            }
          ]
        }
      }
    },
    contained: {
      label: 'bg-size:contained'
    },
    background: {
      label: 'Background url'
    },
    backgroundRepeat: {
      label: 'backgroundRepeat'
    },
    backgroundSize: {
      label: 'Background-size',
      component: {
        type: 'select',
        configuration: {
          dataSet: [
            {name: 'bg-size:cover', value: 'cover'},
            {name: 'bg-size:contain', value: 'regular'}
          ]
        }
      }
    },
    verticalAlignment: {
      label: 'PB.FORM.BLOCKS.SHARED.VERTICAL_ALIGNMENT',
      component: {
        type: 'select',
        configuration: {
          dataSet: [
            {
              name: 'PB.FORM.BLOCKS.SHARED.VERTICAL_ALIGNMENT_CENTER',
              value: 'center'
            },
            {
              name: 'PB.FORM.BLOCKS.SHARED.VERTICAL_ALIGNMENT_TOP',
              value: 'top'
            },
            {
              name: 'PB.FORM.BLOCKS.SHARED.VERTICAL_ALIGNMENT_BOTTOM',
              value: 'bottom'
            }
          ]
        }
      }
    },
    additionalStyle: {
      label: 'Additional style',
      component: {
        type: 'monaco',
        configuration: {
          options: {
            theme: 'vs-dark',
            language: 'css',
            minimap: {
              enabled: false
            },
            folding: false,
            glyphMargin: false,
            lineNumbers: 'off',
            activityBar: {
              visible: false
            },
            lineDecorationsWidth: 0,
            lineNumbersMinChars: 0
          }
        }
      }
    }
  },
  defaults: {
    size: 'regular',
    contained: true,
    verticalAlignment: 'center'
  }
};

export const TEXT_FIELD = {
  component: {
    type: 'tinymce',
    configuration: {
      options: {
        plugins: ['link', 'lists', 'advlist', 'autolink', 'emoticons'],
        menubar: false,
        toolbar: [
          'styleselect',
          'bold italic underline',
          'forecolor backcolor',
          'alignleft aligncenter alignright alignjustify',
          'bullist numlist outdent indent',
          'link emoticons'
        ].join(' | ')
      }
    }
  }
};
