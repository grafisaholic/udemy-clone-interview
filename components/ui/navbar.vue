<template>
  <div>
    <!-- Promo Banner -->
    <div class="bg-yellow-200 text-black py-5 flex justify-between items-center">
      <div class="w-full text-center">
        <span class="font-semibold mr-1">Shop our sale</span> | We’ve got learning for all skill levels. Get courses from Rp119,000.
        <span class="ml-2 font-semibold">1 day left!</span>
      </div>
      <button class="ml-auto mr-4 text-black">✕</button>
    </div>

    <!-- Main Navbar -->
    <div class="flex items-center justify-between px-4 lg:px-10 bg-white border-b border-gray-300">
      <div class="flex items-center space-x-4">
        <img src="/logo.svg" alt="Logo" class="w-20 h-20" />
        <a href="#" class="text-gray-600 hover:text-black">Categories</a>
      </div>

      <!-- Search Bar -->
      <div class="flex-1 mx-4">
        <div class="relative">
          <input
            type="text"
            placeholder="Search for anything"
            class="w-full py-2 pl-10 pr-4 border rounded-full bg-gray-100 focus:outline-none"
          />
          <span class="absolute left-4 top-2.5 text-gray-400 material-icons">search</span>
        </div>
      </div>

      <!-- Navigation Icons -->
      <div class="flex items-center space-x-4 text-gray-600">
        <a href="#" class="hover:text-black">Udemy Business</a>
        <a href="#" class="hover:text-black">Teach on Udemy</a>
        <a href="#" class="hover:text-black">My learning</a>
        <span class="material-icons cursor-pointer hover:text-black">favorite_border</span>
        <span class="material-icons cursor-pointer hover:text-black">shopping_cart</span>
        <span class="material-icons cursor-pointer hover:text-black relative">
          notifications
          <span class="absolute top-0 right-0 w-2.5 h-2.5 bg-purple-500 rounded-full"></span>
        </span>
        <div class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white font-semibold">K</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.material-icons {
  font-size: 1.25rem;
}
</style>
