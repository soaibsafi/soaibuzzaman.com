<template>
  <header>
    <Nav />
    <div class="max-w-xl md:max-w-3xl xl:max-w-4xl mx-auto text-center px-6">
      <h1
        class="text-3xl sm:text-5xl leading-tight font-sans font-bold mb-2 text-black"
      >
        {{ post.title }}
      </h1>
      <p class="text-gray-700">
        <time :datetime="post.datetime" class="capitalize">{{
          formattedPublishDate
        }}</time>
      </p>
    </div>
  </header>
</template>

<script>
import moment from "moment";
import Nav from "@/components/Nav";

export default {
  props: ["post"],
  components: {
    Nav,
  },
  computed: {
    formattedPublishDate() {
      return moment(this.post.datetime).format("DD MMMM, YYYY");
    },
  },
};
</script>