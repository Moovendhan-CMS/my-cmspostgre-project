export default [
  'strapi::logger',
  'strapi::errors',
   
   {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https://cdn.astroved.com', // ✅ allow your AstroVed logo CDN
            'https://teamschat.astroved.com',
            'https://market-assets.strapi.io',
            'https://strapi-ai-staging.s3.us-east-1.amazonaws.com',
            'https://strapi-ai-production.s3.us-east-1.amazonaws.com',
          ],
          'media-src': ["'self'", 'data:', 'blob:', 'https://cdn.astroved.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
