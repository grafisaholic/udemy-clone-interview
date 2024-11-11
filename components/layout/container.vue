<template>
  <div class="min-h-screen flex flex-col justify-center">
    <Navbar />

    <div class="bg-gray-900 h-400px items-start py-10">
      <div class="max-w-7xl w-full mx-auto">
        <slot name="header"></slot>
      </div>
    </div>
    <div class="max-w-7xl w-full mx-auto">
      <div class="flex flex-col lg:flex-row lg:space-x-8">
        <!-- Main Content Section -->
        <div class="flex-1">
          <slot name="content"></slot>
        </div>

        <!-- Sidebar Section -->
        <aside class="w-full lg:w-1/3 mt-8 lg:mt-0">
          <slot name="sidebar"></slot>
        </aside>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/ui/navbar.vue'
import Footer from "~/components/ui/footer.vue";

export default {
  components: {
    Footer,
    Navbar
  },
  name: "Container",
};
</script>