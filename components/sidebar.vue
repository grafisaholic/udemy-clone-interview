<template>
  <div class="text-white p-6 w-full rounded-lg shadow-lg">
    <div class="mb-6">
      <div class="relative">
        <img src="/banner.jpg" alt="Course preview" class="w-full h-40 object-cover rounded-lg" />
        <button class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <span class="text-white font-semibold">Preview this course</span>
        </button>
      </div>
    </div>

    <div class="border-b border-gray-600 pb-4 mb-4">
      <div class="text-3xl font-bold text-purple-500">Rp119,000</div>
      <div class="text-sm line-through text-gray-400">Rp349,000</div>
      <div class="text-sm text-green-400 font-semibold mb-2">66% off</div>
      <p class="text-sm text-red-500 mb-4">⏰ 1 day left at this price!</p>
      <button class="bg-purple-500 text-white w-full py-2 rounded-lg font-semibold hover:bg-purple-600">
        Add to cart
      </button>
      <button class="border border-gray-500 text-gray-300 w-full py-2 rounded-lg mt-2 font-semibold hover:bg-gray-700">
        <span class="material-icons">favorite_border</span>
      </button>
      <p class="text-xs text-gray-400 text-center mt-4">30-Day Money-Back Guarantee</p>
      <p class="text-xs text-gray-400 text-center">Full Lifetime Access</p>
    </div>

    <div class="border-b border-gray-600 pb-4 mb-4 text-sm">
      <div class="flex justify-between text-gray-400 mb-2">
        <span>Share</span>
        <span>Gift this course</span>
        <span>Apply Coupon</span>
      </div>
      <div class="flex items-cente p-2 border-2 rounded-lg mb-2">
        <span class="text-xs text-gray-300 flex-1">ST20MT111124B is applied</span>
        <button class="text-gray-300">✕</button>
      </div>
      <input type="text" placeholder="Enter Coupon" class="w-full p-2 text-gray-800 rounded-lg mb-2" />
      <button class="bg-gray-900 text-white w-full py-2 rounded-lg font-semibold">Apply</button>
    </div>

    <div class="text-sm text-gray-400">
      <p class="mb-4">
        <strong>Subscribe to Udemy's top courses</strong>
        <br />
        Get this course, plus 12,000+ of our top-rated courses, with Personal Plan.
        <a href="#" class="text-blue-400">Learn more</a>
      </p>
      <button class="bg-gray-700 text-white w-full py-2 rounded-lg font-semibold hover:bg-gray-600">
        Try Personal Plan for free
      </button>
      <p class="text-xs text-gray-500 text-center mt-2">
        Starting at Rp187,500 per month after trial<br />
        Cancel anytime
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseSidebar",
};
</script>

<style scoped>
.material-icons {
  font-size: 1.25rem;
}
</style>
