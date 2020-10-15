<template>
  <div class="flex flex-col md:flex-row mx-auto px-1 pb-1">
    <div class="max-w-xl">
      <time
        :datetime="post.datetime"
        class="text-gray-600 text-bold font-family:roboto text-xs mb-1 mx-0"
        >{{ formatPublishDate(post.datetime) }}</time
      >
      <h2 class="text-xl sm:text-xl leading-tight text-gray-800 font-sans font-bold">
        <g-link
          :to="`${post.path}/`"
          >{{ post.title }}</g-link
        >
      </h2>
    </div>
    <div
      class="font-sans md:ml-auto "
    >
      <div class="py-1">
        <g-link
          v-for="tag in post.tags"
          :key="tag.id"
          :to="`${tag.path}/`"
          class="inline-block rounded-lg px-2 py-1 bg-green-200 hover:bg-green-400 text-sm text-gray-700 mr-1 mb-1 mt-0 sm:mt-4"
        >
          {{ tag.title }}
        </g-link>

      </div>
    </div>
    <hr>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: ["post"],
  computed: {
    formattedPublishDate() {
      return moment(this.post.datetime).format("DD MMMM, YYYY");
    },
  },
  methods: {
    formatPublishDate(date) {
      return moment(date).format("DD MMMM, YYYY");
    },
    titleCase(str) {
      return str
        .replace("-", " ")
        .split(" ")
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
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