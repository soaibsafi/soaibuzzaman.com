<template>
  <Layout>
    <div class="mt-8 md:mt-16 flex flex-wrap items-center justify-center">
      <div>
        <h1
          class="font-maintitle text-5xl sm:text-7xl block text-center sm:pr-8 text-gray-700"
        >
          {{ $static.metadata.siteName }}
        </h1>
      </div>
    </div>

    <h2>👋 Hi, nice to meet you!</h2>
    <p class="text-md font-mono text-gray-700 pb-2">
      I am Soaibuzzaman, a Master's student at TU Chemnitz. My area of interest
      includes research and development in the field of Computer Vision, Machine
      Learning and Automation Technology. <br />
      Apart from my academic life, I am a mountain lover, bookworm, nature
      explorer. You can learn more
      <a class="text-gray-700" href="https://soaibsafi.com/" target="_blank"
        >about me</a
      >, read my 📝<a href="https://blog.soaibsafi.com/" target="_blank"
        >blog</a
      >
      or 📚<a href="https://blog.soaibsafi.com/" target="_blank">book notes.</a>
    </p>

    <!-- Publicarion-->
    <h3>📘 Publications</h3>
    <ul class="text-md font-mono text-gray-700 pb-2 list-disc ml-2">
      <li class="py-1">
        S. Ahmed, <b>Soaibuzzaman</b>, S. Rahman, and M. Saiedur Rahaman, “A
        Blockchain-based Architecture for Integrated Smart Parking Systems, “in
        PerAwareCity’19 – 4th IEEE International Workshop on Pervasive
        Context-Aware Smart Cities and Intelligent Transport Systems
        (PerAwareCity’19), Kyoto, Japan, Mar. 2019.
        <p>
          DOI:
          <a
            href="https://ieeexplore.ieee.org/document/8730772"
            target="_blank"
          >
            10.1109/PERCOMW.2019.8730772</a
          >
        </p>
      </li>
    </ul>

    <!-- Research-->
    <h3>🔬 Research</h3>
    <ul class="text-md font-mono text-gray-700 pb-2 list-disc ml-2">
      <li>
        High Dynamic Range Imaging Using Sub-Pixel Architecture for Automotive
        CMOS Sensor.
      </li>
      <li>Car2Car Communication Applications.</li>
      <li>
        Attention Based English to Bangla Machine Translation Using Sequence to
        Sequence Learning with Neural Networks. <br />
        Source Code:
        <a href="https://github.com/soaibsafi/seq2seq-e2b" target="_blank">seq2seq-e2b</a>
      </li>
      <li>
        Mental Health After Stroke and Rehabilitation Using BCI Technology and
        VR Feedback.
      </li>
    </ul>

    <!-- Work Experience-->
    <h3>💻 Work Experience</h3>
    <p class="text-md font-mono text-gray-700 ml-5">
      I am currently working as a Graduate Research Assistant at
      <a href="https://www.iwu.fraunhofer.de/" target="_blank"
        >Fraunhofer IWU</a
      >
    </p>
    <p />
    <p class="text-md font-mono text-gray-700 ml-5">
      In the past, I’ve worked at:
    </p>
    <p />
    <ul class="text-md font-mono text-gray-700 pb-2 list-disc ml-2">
      <li>
        (2020) Programmer/Application Developer -
        <a href="https://www.palmer-gruppe.de/" target="_blank"
          >Palmer Gruppe</a
        >
      </li>
      <li>
        (2018) Teaching Assistant -
        <a href="https://www.aiub.edu/" target="_blank"
          >American International University-Bangladesh</a
        >
      </li>
    </ul>

    <!-- Academic-->
    <h3>🎓 Academic Journey</h3>
    <ul class="text-md font-mono text-gray-700 pb-2 list-disc ml-2">
      <li>
        M.Sc., Automotive Software Engineering,
        <p class="ml-5">
          Technische Universität Chemnitz<br />
          Department of Computer Science<br />
          October 2019 - Present<br />
        </p>
      </li>

      <li>
        B.Sc., in Computer Science &amp; Engineering,
        <p class="ml-5">
          American International University - Bangladesh<br />
          Department of Computer Science<br />
          2014 - 2018<br />
        </p>
      </li>
    </ul>

    <!-- Contact-->
    <h3>📮 Get in Touch</h3>
    <ul class="text-md font-mono text-gray-700 pb-2 list-disc ml-2">
      <li class="py-1">
        📧
        <a class="text-gray-700" href="mailto:mail@soaibsafi.com">Email</a> - If
        you have questions, suggestions, concerns or anything else, simply write
        me an email (<a class="text-gray-700" href="mailto:mail@soaibsafi.com"
          >mail@soaibsafi.com</a
        >) or contact me on
        <a
          href="https://www.linkedin.com/in/soaibuzzaman-2a080378/"
          target="_blank"
          >LinkedIn</a
        >.
      </li>
      <li class="py-1">
        ☕️
        <a
          href="https://www.google.com/maps/place/Chemnitz/@50.8227027,12.8209367,12z/"
          target="_blank"
          >In person</a
        > - I love meeting up with people in real life. If you are taking a trip
        to Chemnitz, Germany and want to chat, I'll buy you a coffee. I would
        also like to host @<a
          href="https://www.couchsurfing.com/people/soaibuzzaman"
          target="_blank"
          >Couchsurfing</a
        >. If you are searching for a 🛋️couch at Chemnitz, drop me an email and
        we can work something out.
      </li>
    </ul>

    <br />
    <br />
    <hr />

    <!-- Footer-->
    <footer class="flex justify-center items-center mt-8 mb-4">
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
    </footer>

    <!-- Credit-->
    <p class="text-center mb-8 text-xs">
      Made with ❤️ <br />
      &copy; 2020 by Soaibuzzaman
    </p>

    <!-- Github Corner-->
    <GithubCorner
      url="https://github.com/soaibsafi"
      :size="70"
      colorScheme
      cornerColor="black"
    ></GithubCorner>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import GithubCorner from "vue-github-corners";
export default {
  components: {
    GithubCorner,
  },
  metaInfo: {
    title: "Soaibuzzaman",
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
a {
  background: linear-gradient(transparent 80%, #66ff99 0);
}
a:hover {
  background: linear-gradient(transparent 0%, #66ff99 0);
}
footer a {
  background: none;
}
</style>