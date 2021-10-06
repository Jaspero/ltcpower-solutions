import {AUTOMATIC_EMAILS_MODULE} from './emails/automatic-emails.module';
import {SENT_EMAILS_MODULE} from './emails/sent-emails.module';
import {FAQ_MODULE} from './faq.module';
import {FORMS_MODULE} from './forms.module';
import {PAGES_MODULE} from './pages/pages.module';
import {ROLES_MODULE} from './roles.module';
import {USER_INVITES_MODULE} from './user-invites.module';
import {USERS_MODULE} from './users.module';

/**
 * Schemas for all of the modules
 */
export const MODULES = [
  USERS_MODULE,
  ROLES_MODULE,
  USER_INVITES_MODULE,
  PAGES_MODULE,
  FORMS_MODULE,
  FORMS_MODULE,
  FAQ_MODULE,
  AUTOMATIC_EMAILS_MODULE,
  SENT_EMAILS_MODULE
];
