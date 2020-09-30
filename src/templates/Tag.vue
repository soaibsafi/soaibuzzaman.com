<template>
  <Layout>
    <main>
      <Nav />
      <header>
        <div
          class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto text-center px-6 py-6 md:py-6 border-b border-gray-300"
        >
          <h1 class="text-4xl sm:text-4xl md:text-4xl font-sans font-bold mb-1">
            <g-link to="/blog" class="text-black">🌱Blog</g-link>
          </h1>
          <h1 class="text-3xl md:text-4xl font-sans font-bold mb-1 text-black">
            #{{ titleCase($page.tag.title) }}
          </h1>
        </div>
      </header>
      <div class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto">
      <section class="ml-3">
        <post-item
          v-for="edge in $page.tag.belongsTo.edges"
          :key="edge.node.id"
          :post="edge.node"
        />
      </section>
      </div>
      <site-footer class="py-8 sm:py-16" />
    </main>
  </Layout>
</template>

<script>
import moment from "moment";
import config from "~/.temp/config.js";
import Nav from "@/components/Nav";
import PostItem from "@/components/PostItem";
import SiteFooter from "@/components/Footer";

export default {
  components: {
    Nav,
    PostItem,
    SiteFooter,
  },
  metaInfo() {
    return {
      title: `Posts tagged "${this.titleCase(this.$page.tag.title)}"`,
      meta: [
        {
          key: "description",
          name: "description",
          content: `Browse posts tagged "${this.titleCase(
            this.$page.tag.title
          )}"`,
        },

        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: `Posts tagged "${this.titleCase(this.$page.tag.title)}"`,
        },
        {
          property: "og:description",
          content: `Browse posts tagged "${this.titleCase(
            this.$page.tag.title
          )}"`,
        },
        {
          property: "og:url",
          content: `${this.config.siteUrl}${this.$page.tag.path}`,
        },
      ],
    };
  },
  methods: {
    titleCase(str) {
      return str
        .replace("-", " ")
        .split(" ")
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
    },
  },
  computed: {
    config() {
      return config;
    },
  },
};
</script>

<page-query>
query Tag ($path: String!, $page: Int) {
  tag (path: $path) {
    id
    title
    path
    belongsTo (page: $page, perPage: 6) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            id
            title
            datetime: date (format: "YYYY-MM-DD HH:mm:ss")
            path
            content
            excerpt
            description
            timeToRead
          }
        }
      }
    }
  }
}
</page-query>
