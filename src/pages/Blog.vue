<template>
  <Layout class="bg-white">
    <main>
      <Nav />
      <header>
        <div
          class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto text-center px-6 py-6 md:py-6 border-b border-gray-300"
        >
          <h1 class="text-3xl sm:text-3xl md:text-4xl font-sans font-bold mb-1">
            <g-link to="/blog" class="text-black">🌱Blog</g-link>
          </h1>
          <p
            class="text-xl sm:text-xl md:text-xl text-gray-700 text-lg font-sans sm:text-3xl"
          >
            Thoughts, stories, ideas, articles and everything else.
          </p>
        </div>
      </header>
      <div class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto">
        <section class="ml-3">
          <post-item
            v-for="edge in $page.posts.edges"
            :key="edge.node.id"
            :post="edge.node"
          />
        </section>
      </div>

      <site-footer class="py-3" />
    </main>
  </Layout>
</template>

<script>
import config from "~/.temp/config.js";
import SiteFooter from "@/components/Footer";
import PostItem from "@/components/PostItem";
import Nav from "@/components/Nav";

export default {
  components: {
    PostItem,
    SiteFooter,
    Nav,
  },
  metaInfo() {
    return {
      title: "Blog",
      meta: [
        { property: "og:type", content: "website" },
        { property: "og:title", content: this.$static.metadata.siteName },
        {
          property: "og:description",
          content: this.$static.metadata.siteDescription,
        },
        { property: "og:url", content: this.$static.metadata.siteUrl },
      ],
    };
  },
  computed: {
    config() {
      return config;
    },
  },
};
</script>


<style scoped>
body {
    margin: 0;
    padding: 0;
}
</style>



<page-query>
  query Home ($page: Int) {
    posts: allPost (page: $page, perPage: 6) @paginate {
      totalCount
      edges {
        node {
          id
          title
          datetime: date (format: "YYYY-MM-DD HH:mm:ss")
          content
          description
          path
          tags {
            id
            title
            path
          }
        }
      }
    }
  }
</page-query>

<static-query>
query {
  metadata {
    siteName
    siteUrl
    siteDescription
  }
}
</static-query>


