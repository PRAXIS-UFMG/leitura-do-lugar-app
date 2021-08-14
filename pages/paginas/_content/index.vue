<template>
  <main class="mt-4 md:mt-16">
    <article class="mx-auto prose prose-praxis">
      <header>
        <h2 class="title">{{ $data.title }}</h2>
      </header>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="$data.content"></div>
    </article>
  </main>
</template>

<script>
export default {
  layout: 'content',
  async asyncData({ params, $axios }) {
    const response = await $axios.$get(`/api/conteudos/${params.content}.json`)
    return { content: response.article_rendered, title: response.title }
  },
}
</script>

<style scoped lang="postcss">
.title {
  @apply uppercase text-xl font-medium text-gray-400;
  @apply mt-4 mb-2;
}
</style>
