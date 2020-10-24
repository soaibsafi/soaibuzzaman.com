<template>
  <Layout>
    <main>
      <Nav />

      <div
        class="flex flex-col md:flex-row md:max-w-3xl xl:max-w-4xl mx-auto text-left px-3 pt-3"
      >
        <div class="max-w-5xl md:max-w-3xl xl:max-w-5xl">
          <h1
            class="text-2xl sm:text-4xl md:text-4xl font-sans font-bold mb-1 text-gray-800"
          >
            Hey!👋
            <br />
            I'm Soaibuzzaman.
            <br />
          </h1>
          <h3 class="text-xl text-2xl font-sans font-bold mb-1 text-gray-700">
            I'm a Researcher, Programmer, Software Engineer.
          </h3>
          <br />
          <p class="font-sans text-xl text-gray-800">
            This website is my 🏡 internet home and 🌱digital garden- a synopses
            of things I have learned and created over the time, thoughts and
            contemplation, ideas and tales and anything else I want to write
            about.
          </p>
          <br />
          <p class="font-sans text-xl text-gray-800">
            You can read my 📝<a href="/blog">blog</a> or learn more 👨‍💻<a
              href="/about"
              >about me</a
            >. You can also have a look at my 📚<a href="/tag/Book%20Note/"
              >book notes</a
            >.
          </p>
          <br />
          <p class="font-sans text-xl text-gray-800">
            I have an old domain where I usually write my philosophy and travel
            stories in Bengali. But I hardly get time to update that site since
            I moved to Germany. If you happen to read Bengali, you can read my
            Bengali blog <a href="http://blog.soaibsafi.com/">(ব্লগ)</a>.
          </p>
        </div>

        <div class="order-first sm:order-first md:order-last pl-5 py-4">
          <img
            class="rounded-lg sm:object-scale-down h-48 md:max-w-xs mx-auto"
            :src="image"
            alt="Soaib"
          />
        </div>
      </div>

      <site-footer class="py-3" />
    </main>
  </Layout>
</template>

<script>
import config from "~/.temp/config.js";
import Nav from "@/components/Nav";
import SiteFooter from "@/components/Footer";
import image from "../../static/images/soaib.jpg";

export default {
  components: {
    Nav,
    SiteFooter,
  },
  data() {
    return {
      image: image,
    };
  },
  metaInfo() {
    return {
      title: "Home",
      meta: [
        {
          key: "description",
          name: "description",
          content: this.ogDescription,
        },

        { property: "og:type", content: "Homepage" },
        { property: "og:title", content: "Soaibuzzaman" },
        { property: "og:description", content: this.ogDescription },
        { property: "og:url", content: `${this.config.siteUrl}` },
      ],
    };
  },
  computed: {
    config() {
      return config;
    },
    ogDescription() {
      return "Soaibuzzaman's internet home and digital garden.";
    },
  },
};
</script>


<style scoped>
body {
  margin: 0;
  padding: 0;
}
a {
  background: linear-gradient(transparent 75%, #66ff99 0);
}
a:hover {
  background: linear-gradient(transparent 0%, #66ff99 0);
}
</style>