<template>
  <div class="max-w-4xl mx-auto my-8">
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">
        More Courses by <span class="text-blue-600">István Szép</span>
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div v-for="(course, index) in istvanCourses" :key="index" class="border rounded-lg p-4">
          <img :src="course.image" alt="Course Image" class="w-full h-32 object-cover rounded-lg mb-4" />
          <h3 class="text-lg font-semibold mb-1">{{ course.title }}</h3>
          <p class="text-gray-500 text-sm mb-2">{{ course.instructor }}</p>
          <div class="flex items-center space-x-1 text-yellow-400 text-sm mb-2">
            <span>{{ course.rating }}</span>
            <span class="material-icons">star</span>
            <span class="text-gray-500">({{ course.reviews }})</span>
          </div>
          <p class="text-sm text-gray-600 mb-4">{{ course.details }}</p>
          <div class="flex items-center space-x-2">
            <span class="font-semibold">{{ course.price }}</span>
            <span class="line-through text-gray-500">{{ course.originalPrice }}</span>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">
        More Courses by <span class="text-blue-600">Gergely Szerovay</span>
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div v-for="(course, index) in gergelyCourses" :key="index" class="border rounded-lg p-4">
          <img :src="course.image" alt="Course Image" class="w-full h-32 object-cover rounded-lg mb-4" />
          <h3 class="text-lg font-semibold mb-1">{{ course.title }}</h3>
          <p class="text-gray-500 text-sm mb-2">{{ course.instructor }}</p>
          <div class="flex items-center space-x-1 text-yellow-400 text-sm mb-2">
            <span>{{ course.rating }}</span>
            <span class="material-icons">star</span>
            <span class="text-gray-500">({{ course.reviews }})</span>
          </div>
          <p class="text-sm text-gray-600 mb-4">{{ course.details }}</p>
          <div class="flex items-center space-x-2">
            <span class="font-semibold">{{ course.price }}</span>
            <span class="line-through text-gray-500">{{ course.originalPrice }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MoreCourses",
  data() {
    return {
      istvanCourses: [
        {
          title: "Learn Inkscape now - create vector graphics for free!",
          instructor: "István Szép",
          rating: "4.3",
          reviews: "781",
          details: "4 total hours • 41 lectures • All Levels",
          price: "Rp119,000",
          originalPrice: "Rp249,000",
          image: "/more-course.jpg",
        },
        {
          title: "Create modular game art and tile sets faster with...",
          instructor: "István Szép",
          rating: "4.4",
          reviews: "86",
          details: "4 total hours • 22 lectures • Intermediate",
          price: "Rp119,000",
          originalPrice: "Rp249,000",
          image: "/more-course.jpg",
        },
        {
          title: "Create your own 2D game assets with Inkscape for...",
          instructor: "István Szép",
          rating: "4.5",
          reviews: "602",
          details: "4.5 total hours • 32 lectures • All Levels",
          price: "Rp119,000",
          originalPrice: "Rp249,000",
          image: "/more-course.jpg",
        },
      ],
      gergelyCourses: [
        {
          title: "How to train your designer eye & develop your design...",
          instructor: "Krisztina Szerovay, Gergely Szerovay",
          rating: "4.9",
          reviews: "60",
          details: "3 total hours • 38 lectures • Beginner",
          price: "Rp119,000",
          originalPrice: "Rp249,000",
          image: "/more-course.jpg",
        },
        {
          title: "Be a better UX designer by understanding developme...",
          instructor: "Krisztina Szerovay, Gergely Szerovay",
          rating: "4.1",
          reviews: "287",
          details: "8.5 total hours • 59 lectures • All Levels",
          price: "Rp119,000",
          originalPrice: "Rp379,000",
          image: "/more-course.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.material-icons {
  font-size: 14px;
}
</style>
