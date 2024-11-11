<template>
  <div class="max-w-4xl mx-auto my-8">
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Students also bought</h2>
      <div class="space-y-4">
        <div v-for="(course, index) in relatedCourses" :key="index" class="flex items-start space-x-4">
          <img :src="course.image" alt="Related course" class="w-20 h-20 rounded-lg"/>
          <div class="flex-1">
            <h3 class="text-lg font-semibold">{{ course.title }}</h3>
            <p class="text-sm text-gray-600">{{ course.details }}</p>
            <div class="flex items-center space-x-2">
              <span class="text-yellow-400 font-semibold">{{ course.rating }}</span>
              <span class="text-gray-500">• {{ course.students }} students</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="font-semibold">{{ course.price }}</span>
              <span class="line-through text-gray-500">{{ course.originalPrice }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Course Rating</h2>
      <div class="flex items-center space-x-2">
        <span class="text-3xl font-bold text-yellow-400">4.6</span>
        <span class="text-lg font-semibold text-gray-700">course rating</span>
        <span class="text-gray-500">• 4K ratings</span>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-semibold mb-4">Student Reviews</h2>
      <div class="space-y-6">
        <div v-for="(review, index) in reviews" :key="index" class="border-b pb-4 mb-4">
          <div class="flex items-center space-x-4 mb-2">
            <span class="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full font-semibold">{{ review.initials }}</span>
            <div>
              <h3 class="text-lg font-semibold">{{ review.name }}</h3>
              <div class="flex items-center space-x-1 text-yellow-400">
                <span v-for="i in review.rating" :key="i" class="material-icons text-sm">star</span>
              </div>
              <p class="text-gray-500 text-sm">{{ review.date }}</p>
            </div>
          </div>
          <p class="text-gray-700">{{ review.comment }}</p>
          <div class="flex items-center space-x-4 mt-2 text-sm text-gray-500">
            <span>Helpful?</span>
            <button class="flex items-center space-x-1">
              <span class="material-icons text-gray-500">thumb_up</span> <span>{{ review.likes }}</span>
            </button>
            <button class="flex items-center space-x-1">
              <span class="material-icons text-gray-500">thumb_down</span> <span>{{ review.dislikes }}</span>
            </button>
          </div>
        </div>
      </div>
      <button class="mt-4 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200">
        Show all reviews
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: "Overview",
  data() {
    return {
      relatedCourses: [
        {
          title: "UX Fundamentals: Career in UX",
          details: "2 total hours • Updated 8/2021",
          rating: "4.6",
          students: "2,392",
          price: "Rp119,000",
          originalPrice: "Rp249,000",
          image: "/course-package.jpg",
        },
        {
          title: "Object-Oriented UX (OOUX) Fundamentals",
          details: "6.5 total hours • Updated 4/2023",
          rating: "4.6",
          students: "5,984",
          price: "Rp119,000",
          originalPrice: "Rp449,000",
          image: "/course-package.jpg",
        },
        // Add more course data as necessary
      ],
      reviews: [
        {
          initials: "HK",
          name: "Himanshu K.",
          rating: 5,
          date: "2 weeks ago",
          comment: "This is something I always wanted to learn...",
          likes: 12,
          dislikes: 2,
        },
        {
          initials: "DS",
          name: "Dhyey S.",
          rating: 5,
          date: "3 weeks ago",
          comment: "I would love to see a section where we sketch...",
          likes: 8,
          dislikes: 1,
        },
        // Add more review data as necessary
      ],
    };
  },
};
</script>

<style scoped>
.material-icons {
  font-size: 16px;
}
</style>
