import {NavigationItemWithActive} from '../app/shared/interfaces/navigation-item-with-active.interface';

/**
 * Configuration that is consistent across environments
 */
export const STATIC_CONFIG = {
  displayName: 'JMS',
  elementSelectorPrefix: 'jms-e-',
  navigation: {
    items: [
      {
        icon: 'dashboard',
        label: 'DASHBOARD',
        type: 'link',
        value: '/dashboard'
      },
      {
        icon: 'web',
        label: 'PAGES',
        type: 'link',
        value: '/m/pages'
      },
      {
        icon: 'construction',
        label: 'Products',
        type: 'expandable',
        children: [
          {
            icon: 'precision_manufacturing',
            label: 'Categories',
            type: 'link',
            value: '/m/categories/overview'
          },
          {
            icon: 'handyman',
            label: 'Sub categories',
            type: 'link',
            value: '/m/subCategories/overview'
          },
          {
            icon: 'arrow_forward',
            label: 'Products',
            type: 'link',
            value: '/m/products/overview'
          },
          {
            icon: 'arrow_forward',
            label: 'Models',
            type: 'link',
            value: '/m/models/overview'
          },
        ]
      },
      {
        icon: 'question_answer',
        label: 'Faq',
        type: 'link',
        value: '/m/faq'
      },
      {
        children: [
          {
            icon: 'supervised_user_circle',
            label: 'GENERAL.USERS',
            type: 'link',
            value: '/m/users'
          },
          {
            icon: 'vpn_key',
            label: 'GENERAL.ROLES',
            type: 'link',
            value: '/m/roles'
          }
        ],
        icon: 'account_box',
        label: 'LAYOUT.MANAGEMENT',
        type: 'expandable'
      },
      {
        children: [
          {
            icon: 'view_module',
            label: 'LAYOUT.MODULES',
            type: 'link',
            value: '/module-definition/overview'
          },
          {
            icon: 'send',
            label: 'LAYOUT.INVITES',
            type: 'link',
            value: '/m/user-invites'
          }
        ],
        icon: 'dns',
        label: 'LAYOUT.SYSTEM',
        type: 'expandable'
      }
    ] as NavigationItemWithActive[]
  }
};
