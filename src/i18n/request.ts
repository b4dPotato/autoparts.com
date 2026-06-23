import {getRequestConfig} from 'next-intl/server';
import {defaultLocale, isLocale} from './routing';
import {getLocaleMessages} from './messages';

export default getRequestConfig(async ({locale}) => {
  const safeLocale = locale && isLocale(locale) ? locale : defaultLocale;

  return {
    locale: safeLocale,
    messages: getLocaleMessages(safeLocale)
  };
});
