import { ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  narratives: {
    texts: { name: 'Textos', value: true, readonly: true },
    images: { name: 'Imagens', value: false, readonly: true },
    videos: { name: 'Vídeos', value: false, readonly: true },
    audios: { name: 'Áudios', value: false, readonly: true }
  },
  supports: {
    timeline: { name: 'Linha do Tempo', value: false, readonly: true },
    map: { name: 'Mapa', value: false },
    lineAnalyses: { name: 'Linhas de Análise', value: false, readonly: true }
  },
  lineAnalyses: {},
  excerpts: []
})

type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setControl(state, { group, property, value }) {
    state[group][property].value = value
  },
  setLineAnalysis(state, lines) {
    state.lineAnalyses = lines
  },
  setExcerpts(state, narratives) {
    state.excerpts = narratives
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchControls({ commit }) {
    const lineAnalyses = await this.$axios.$get('/api/linhas-analise.json')
    commit('setLineAnalysis', lineAnalyses.reduce((obj, line) => ({
      ...obj,
      [line.id]: {
        name: line.name,
        value: true,
        readonly: true
      }
    }), {})) // js é... muito feio
  },
  setControl({ commit, state }, { group, property, value }) {
    if (property !== 'texts' && property !== 'map') return
    if (group === 'supports' && value === true) {
      const supportsDisable = Object.keys(state.supports).filter(k => k !== property)
      for (const support of supportsDisable)
        commit('setControl', { group, property: support, value: false })
    }
    commit('setControl', { group, property, value })
  },
  async fetchNarratives({ commit }) {
    const response = await this.$axios.$get('/api/trechos.json')
    commit('setExcerpts', response.trechos)
  }
}
