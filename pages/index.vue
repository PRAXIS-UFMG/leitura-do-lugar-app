<template>
  <main>
    <div class='tutorial'>
      <nuxt-picture src='logo-praxis.png' sizes='sm:75vw md:50vw lg:256px' class='mx-auto lg:hidden' />
      <AppTitle class='lg:hidden text-3xl' />
      <p class='text-center leading-relaxed md:text-lg'>
        Utilize o menu na lateral esquerda para conhecer as narrativas enviadas.<br>
        Basta clicar no item desejado para habilitar/desabilitar a camada.
      </p>
      <dl class='definitions'>
        <div>
          <dt>narrativas</dt>
          <dd>textos, fotos, vídeos e áudios enviados pelos moradores sobre seus territórios</dd>
        </div>
        <div>
          <dt>suportes</dt>
          <dd>período do tempo da narrativa, localização geográfica (mapa) da narrativa e linhas de análise
            relacionadas
          </dd>
        </div>
        <div>
          <dt>linhas de análise</dt>
          <dd>14 linhas de análise que desvelam territórios pela presença de atributos</dd>
        </div>
      </dl>
      <div class='shortcuts'>
        <button class='button-primary w-48'>ver narrativas <br>e linhas de análise</button>
        <button class='button-primary w-48'>ver narrativas <br>no mapa</button>
      </div>
    </div>
  </main>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    opened: false
  })
})
</script>

<style scoped>
.tutorial {
  @apply w-full flex flex-col items-center justify-center gap-8 md:gap-16;
  @apply mt-16 md:mt-24 lg:mt-8;
}

.definitions {
  @apply hidden md:flex gap-6;

  & > div {
    @apply w-56 flex flex-col text-center;

    & dt {
      @apply uppercase font-medium text-lg;
    }

    & dd {
      @apply mt-2 leading-relaxed;
    }
  }
}

.shortcuts {
  @apply flex flex-col md:flex-row gap-2 md:gap-8 leading-tight;
}
</style>
