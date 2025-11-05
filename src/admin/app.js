export default {
  config: {
    auth: {
      //logo: 'https://cdn.astroved.com/images/images-av/AstroVed-Logo.svg',
      logo:'https://teamschat.astroved.com/assets/logo.png',
      background: '#f9f5ff',
      // ✅ Custom welcome message
      welcomeMessage: 'Welcome to AstroVed CMS Portal',
      message: 'Manage your content and configurations easily.',
    },
    menu: {
      //logo: 'https://cdn.astroved.com/images/images-av/AstroVed-Logo.svg',
      logo:'https://teamschat.astroved.com/assets/logo.png',
    },
    head: {
      favicon:'https://teamschat.astroved.com/assets/logo.png',//'https://cdn.astroved.com/images/images-av/AstroVed-Logo.svg',
    },
    theme: {
      light: {
        colors: {
          primary100: '#f9f5ff',
          primary200: '#e9d7fe',
          primary500: '#7f56d9',
          primary600: '#6941c6',
          primary700: '#53389e',
        },
      },
      dark: {
        colors: {
          primary100: '#1b1a55',
          primary200: '#535c91',
          primary500: '#7f56d9',
          primary600: '#6f42c1',
          primary700: '#bface2',
        },
      },
    },
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "AstroVed CMS",
        "app.components.LeftMenu.navbrand.workplace": "Admin Dashboard",
        "Auth.form.welcome.title": "Welcome to AstroVed CMS",
        "Auth.form.welcome.subtitle": "Sign in to manage your AstroVed content and data",
      },
    },
  },
  bootstrap() {},
};
