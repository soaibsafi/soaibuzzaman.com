import DefaultLayout from "~/layouts/Default.vue";
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
require("gridsome-plugin-remark-prismjs-all/themes/night-owl.css");

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  Vue.component("font-awesome-icon", FontAwesomeIcon);

  head.htmlAttrs = { lang: "en", class: "h-full" };
  head.bodyAttrs = { class: "antialiased font-serif" };

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Fira+Sans:400,700%7CCardo"
  });
}
