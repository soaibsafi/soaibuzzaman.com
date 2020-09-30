<template>
  <Layout>
    <main>
      <Nav />
      <main class="flex items-center">
        <section class="bg-gray-100 mx-auto px-8 py-6 rounded shadow-xl relative">
          <h1 class="text-3xl font-sans font-bold mb-4">Page Not Found</h1>
          <p class="font-sans mb-4 leading-normal text-gray-700">Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
          <g-link to="/" class="text-md text-blue-500 hover:text-blue-900 font-sans">&larr; Back to Home</g-link>
        </section>
    </main>
      <site-footer class="py-3" />
    </main>
  </Layout>
</template>

<script>
import Nav from "@/components/Nav";
import SiteFooter from "@/components/Footer";

export default {
  components: {
    Nav,
    SiteFooter,
  },
  metaInfo() {
    return {
      metaInfo() {
        return {
          title: `Page Not Found (404)`,
        };
      },
    };
  },
};
</script>
