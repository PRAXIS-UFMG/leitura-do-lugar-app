import { ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  narratives: {
    texts: { name: 'Textos', value: false },
    images: { name: 'Imagens', value: false },
    videos: { name: 'Vídeos', value: false },
    audios: { name: 'Áudios', value: false }
  },
  supports: {
    timeline: { name: 'Linha do Tempo', value: false },
    map: { name: 'Mapa', value: false },
    lineAnalyses: { name: 'Linhas de Análise', value: false }
  },
  lineAnalyses: {}
})

type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setControl(state, { group, property, value }) {
    state[group][property].value = value
  },
  setLineAnalysis(state, lines) {
    state.lineAnalyses = lines
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchControls({ commit }) {
    const lineAnalyses = await this.$axios.$get('/api/linhas-analise.json')
    commit('setLineAnalysis', lineAnalyses.reduce((obj, line) => ({
      ...obj,
      [line.id]: {
        name: line.name,
        value: false
      }
    }), {})) // js é... muito feio
  },
  setControl({ commit, state }, { group, property, value }) {
    if (group === 'supports' && value === true) {
      const supportsDisable = Object.keys(state.supports).filter(k => k !== property)
      for (const support of supportsDisable)
        commit('setControl', { group, property: support, value: false })
    }
    commit('setControl', { group, property, value })
  }
}
