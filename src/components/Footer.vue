<template>
  <footer class="pt-10">
    <nav class="flex justify-center items-center">
      <a
        href="/"
        class="block px-4 py-1 text-black font-mono text-xl rounded hover:bg-gray-200"
        >Home</a
      >
      <a
        href="/about"
        class="block px-4 py-1 text-black font-mono text-xl rounded hover:bg-gray-200"
        >About</a
      >
      <a
        href="/feed.xml"
        class="block px-4 py-1 text-black font-mono text-xl rounded hover:bg-gray-200"
        >RSS</a
      >
      <a
        href="https://ko-fi.com/soaibuzzaman"
        target="_blank"
        class="block px-4 py-1 text-black font-mono text-xl rounded hover:bg-gray-200"
        >Ko-fi</a
      >
    </nav>

    <nav class="flex justify-center items-center py-2">
      <a
        class="block px-2 py-1 rounded hover:bg-gray-200"
        href="https://orcid.org/0000-0002-8971-5904"
        target="_blank"
      >
        <font-awesome-icon
          :icon="{ prefix: 'fab', iconName: 'orcid' }"
          size="lg"
        />
      </a>

      <a
        class="block px-2 py-1 rounded hover:bg-gray-200"
        href="https://scholar.google.com/citations?user=TXNeiWcAAAAJ&hl=en"
        target="_blank"
      >
        <font-awesome-icon
          :icon="{ prefix: 'fab', iconName: 'google' }"
          size="lg"
        />
      </a>

      <a
        class="block px-2 py-1 rounded hover:bg-gray-200"
        href="https://www.researchgate.net/profile/Soaibuzzaman"
        target="_blank"
      >
        <font-awesome-icon
          :icon="{ prefix: 'fab', iconName: 'researchgate' }"
          size="lg"
        />
      </a>

      <a
        class="block px-2 py-1 rounded hover:bg-gray-200"
        href="https://github.com/soaibsafi"
        target="_blank"
      >
        <font-awesome-icon
          :icon="{ prefix: 'fab', iconName: 'github-square' }"
          size="lg"
        />
      </a>

      <a
        class="block px-2 py-1 rounded hover:bg-gray-200"
        href="https://www.linkedin.com/in/soaibuzzaman-2a080378/"
        target="_blank"
      >
        <font-awesome-icon
          :icon="{ prefix: 'fab', iconName: 'linkedin' }"
          size="lg"
        />
      </a>

      <a
        class="block px-2 py-1 rounded hover:bg-gray-200"
        href="https://twitter.com/sooaaib"
        target="_blank"
      >
        <font-awesome-icon
          :icon="{ prefix: 'fab', iconName: 'twitter-square' }"
          size="lg"
        />
      </a>

      <a
        class="block px-2 py-1 rounded hover:bg-gray-200"
        href="https://www.goodreads.com/user/show/55336570-soaib-safi"
        target="_blank"
      >
        <font-awesome-icon
          :icon="{ prefix: 'fab', iconName: 'goodreads' }"
          size="lg"
        />
      </a>
    </nav>

    <nav class="flex justify-center items-center">
      <p class="">&copy; 2020 Soaibuzzaman</p>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>