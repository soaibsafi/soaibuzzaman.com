// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: https://gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/base.postcss'

import GithubCorner from 'vue-github-corners'

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithubSquare,
  faGoogle,
  faGoodreads,
  faLinkedin,
  faTwitterSquare,
  faResearchgate,
  faOrcid,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add({
  faGithubSquare,
  faGoogle,
  faGoodreads,
  faLinkedin,
  faTwitterSquare,
  faResearchgate,
  faOrcid,
});

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component("font-awesome-icon", FontAwesomeIcon);


  head.htmlAttrs = { lang: 'en' }
  head.bodyAttrs = { class: 'antialiased font-body font-serif' }

  // Styles
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Great+Vibes|Libre+Baskerville&display=swap',
  })

  // Basic meta tags
  head.meta.push({
    name: 'author',
    content: 'Soaibuzzaman',
  })

  head.meta.push({
    name: 'keywords',
    content: 'Soaibuzzaman, Soaib, Soaib Safi, TU Chemnitz',
  })

  head.meta.push({
    name: 'description',
    content: 'Soaibuzzaman - Personal homepage.',
  })

  // Open Graph + Twitter meta tags
  head.meta.push({
    property: 'og:description',
    content: 'Soaibuzzaman - Personal homepage.',
  })

  head.meta.push({
    name: 'twitter:description',
    content: 'Soaibuzzaman - Personal homepage.',
  })

  head.meta.push({
    property: 'og:type',
    content: 'Personal homepage',
  })

  head.meta.push({
    property: 'og:title',
    content: 'Soaibuzzaman - Personal homepage',
  })

  head.meta.push({
    name: 'twitter:title',
    content: 'Soaibuzzaman - Personal homepage',
  })

  head.meta.push({
    name: 'twitter:card',
    content: 'summary_large_image',
  })

  head.meta.push({
    name: 'twitter:creator',
    content: '@sooaaib',
  })

  head.meta.push({
    property: 'og:image',
    content: 'https://soaibsafi.com/img/social-preview.jpg',
  })

  head.meta.push({
    name: 'twitter:image',
    content: 'https://soaibsafi.com/img/social-preview.jpg',
  })
}
