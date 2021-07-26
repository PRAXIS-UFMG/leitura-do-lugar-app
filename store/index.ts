import { ActionTree, GetterTree, MutationTree } from 'vuex'

export const state = () => ({
  tutorial: true
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  tutorial: state => state.tutorial
}

export const mutations: MutationTree<RootState> = {
  CLEAR_TUTORIAL: (state) => (state.tutorial = false)
}

export const actions: ActionTree<RootState, RootState> = {
  clearTutorial({ commit }) {
    commit('CLEAR_TUTORIAL')
  }
}
