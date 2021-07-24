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
        label: 'Dashboard',
        type: 'link',
        value: '/dashboard'
      },
      {
        icon: 'web',
        label: 'Pages',
        type: 'link',
        value: '/m/pages'
      },
      {
        icon: 'construction',
        label: 'Inventory',
        type: 'expandable',
        children: [
          {
            icon: 'handyman',
            label: 'Categories',
            type: 'link',
            value: '/m/subCategories'
          },
          {
            icon: 'construction',
            label: 'Products',
            type: 'link',
            value: '/m/products'
          },
          {
            icon: 'build',
            label: 'Models',
            type: 'link',
            value: '/m/models'
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
            icon: 'send',
            label: 'LAYOUT.INVITES',
            type: 'link',
            value: '/m/user-invites'
          },
          {
           icon: 'email',
           label: 'MODULES.AUTOMATIC_EMAILS',
           type: 'link',
           value: '/m/automatic-emails'
          },
          {
            icon: 'send',
            label: 'MODULES.SENT_EMAILS',
            type: 'link',
            value: '/m/sent-emails'
          }
        ],
        icon: 'account_box',
        label: 'LAYOUT.MANAGEMENT',
        type: 'expandable'
      }
    ] as NavigationItemWithActive[]
  }
};
