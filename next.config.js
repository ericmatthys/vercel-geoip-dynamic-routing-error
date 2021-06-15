const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  return {
    i18n: {
      locales: ['en', 'es'],
      defaultLocale: 'en',
    },
    async rewrites() {
      return {
        afterFiles:
          phase === PHASE_DEVELOPMENT_SERVER
            ? [
                {
                  // Fallback if the country header is not present (local dev).
                  source: '/:path*',
                  destination: `/${process.env.FALLBACK_COUNTRY_CODE}/:path*`,
                },
              ]
            : [
                {
                  source: '/:path*',
                  has: [
                    {
                      type: 'header',
                      key: 'x-vercel-ip-country',
                      value: '(?<country>.*)',
                    },
                  ],
                  destination: '/:country/:path*',
                },
              ],
      };
    },
  };
};
