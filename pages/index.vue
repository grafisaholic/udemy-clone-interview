<template>
  <!-- <Header /> -->
  <Container>
    <template #header>
      <Header />
    </template>

    <template #content>
      <Related />
      <CourseDetail />
      <Overview />
      <MoreCource />
    </template>

    <template #sidebar>
      <CourseSidebar />
    </template>
  </Container>
</template>

<script>
import Container from '~/components/layout/container.vue'
import Header from "~/components/hero.vue";
import Content from "@/components/content.vue";
import Related from "@/components/related.vue";
import CourseDetail from "@/components/courseDetail.vue";
import Overview from "@/components/overview.vue";
import MoreCource from "@/components/moreCourse.vue";
import CourseSidebar from '@/components/sidebar.vue'

export default {
  components: {
    Container,
    Header,
    Content,
    Related,
    CourseDetail,
    Overview,
    MoreCource,
    CourseSidebar
  },
};
</script>