<template>
  <main class='mt-4 md:mt-16'>
    <article class='prose sm:prose-sm prose-praxis mx-auto'>
      <header>
        <h2 class='title'>{{ $data.title }}</h2>
      </header>
      <div v-html='$data.content'></div>
    </article>
  </main>
</template>

<script>
const ptToEnMap = {
  sobre: 'about_project',
  equipe: 'team_and_aid'
}

export default {
  layout: 'content',
  async asyncData({ params, $axios }) {
    const response = await $axios.$get(
      `/api/contents/${ptToEnMap[params.content]}.json`
    )
    return { content: response.article_rendered, title: response.title }
  }
}
</script>

<style scoped>
h2.title {
  @apply uppercase text-xl font-medium text-gray-400;
  @apply mt-4 mb-2;
}
</style>
