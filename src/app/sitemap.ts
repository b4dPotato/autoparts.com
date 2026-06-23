import type {MetadataRoute} from 'next';
import {siteConfig} from '@/config/site';
import {locales} from '@/i18n/routing';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: locale === 'uk' ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(locales.map((item) => [item, `${siteConfig.url}/${item}`]))
    }
  }));
}
