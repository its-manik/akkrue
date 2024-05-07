import { DefaultConfigOptions } from '@formkit/vue';
import { generateClasses } from '@formkit/themes'
// import { genesisIcons } from '@formkit/icons'
import myFormkitTheme from './formkit-theme.js'
import { en } from '@formkit/i18n'

const config: DefaultConfigOptions = {
  locales: { en },
  locale: 'en',
  config: {
    classes: generateClasses(myFormkitTheme),
  },
};

export default config;