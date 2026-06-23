import en from '../../messages/en.json';
import ru from '../../messages/ru.json';
import uk from '../../messages/uk.json';
import {defaultLocale, type Locale} from './routing';

const messages = {
  uk,
  ru,
  en
};

export type AppMessages = typeof uk;

export function getLocaleMessages(locale: Locale): AppMessages {
  return messages[locale] ?? messages[defaultLocale];
}
