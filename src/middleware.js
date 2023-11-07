import createMiddleware from 'next-intl/middleware';
import i18n from '../i18n';

export default createMiddleware({
  // Our app's supported locales. We can have
  // as many as we want.
  locales: ["fr", "en"],

  // If this locale is matched, pathnames work without
  // a prefix (e.g. `/about`)
  defaultLocale: "fr",
  localePrefix: "always"
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
