<template>
  <Layout>
    <main>
      <post-header :post="$page.post" />
      <div class="flex justify-center text-xs pb-2">
        <g-link
          v-for="tag in $page.post.tags"
          :key="tag.id"
          :to="`${tag.path}/`"
          class="inline-block bg-gray-200 rounded-full px-2 py-1 bg-blue-200 hover:bg-blue-300 text-gray-700 mr-1 mb-1"
        >
          #{{ tag.title }}
        </g-link>
      </div>
      <hr />
      <article
        class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto px-6 sm:px-12 pt-3"
      >
        <div
          class="markdown text-lg font-sans leading-normal text-gray-700"
          v-html="$page.post.content"
        />
      </article>

      <site-footer class="pb-8 sm:pb-10" />
    </main>
  </Layout>
</template>

<script>
import moment from "moment";
import config from "~/.temp/config.js";
import slugify from "@sindresorhus/slugify";
import SiteFooter from "@/components/Footer";
import PostHeader from "~/components/PostHeader";

export default {
  components: {
    PostHeader,
    SiteFooter,
  },
  metaInfo() {
    return {
      title: `${this.$page.post.title} ${
        this.$page.post.tag ? "- " + this.$page.post.tag.name : ""
      }`,
      meta: [
        {
          key: "description",
          name: "description",
        },

        { property: "og:type", content: "article" },
        { property: "og:title", content: this.$page.post.title },
        { property: "og:url", content: this.postUrl },
        {
          property: "article:published_time",
          content: moment(this.$page.post.date).format("YYYY-MM-DD"),
        },
      ],
    };
  },
  computed: {
    config() {
      return config;
    },
    postIsOlderThanOneYear() {
      let postDate = moment(this.$page.post.datetime);
      return moment().diff(postDate, "years") > 0 ? true : false;
    },
    postUrl() {
      let siteUrl = this.config.siteUrl;
      let postPath = this.$page.post.path;
      debugger;

      return postPath
        ? `${siteUrl}${postPath}`
        : `${siteUrl}/${slugify(this.$page.post.title)}/`;
    },
  },
};
</script>

<page-query>
query Post ($path: String) {
  post (path: $path) {
    title
    path
    slug
    datetime: date (format: "YYYY-MM-DD HH:mm:ss")
    content
    description
    tags {
      id
      title
      path
    }
  }
}
</page-query>

