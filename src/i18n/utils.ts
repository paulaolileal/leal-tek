import { translations, type Locale } from './translations';

export function getTranslations(locale: string | undefined) {
  return translations[(locale as Locale) ?? 'pt'];
}
