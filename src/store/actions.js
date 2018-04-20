export default {
  addTapCount({ commit, state }) {
    commit('ADD_TAP_COUNT')
    localStorage.setItem('topCount', state.tapCount)
  },
  //
  setToken({ commit, state }, { token }) {
    localStorage.setItem('access_token', token)
    commit('SET_TOKEN', { token })
  },
  FETCH_USER({ commit, state }, { id }) {
    return state.users[id]
      ? Promise.resolve(state.users[id])
      : fetchUser(id).then(user => commit('SET_USER', { id, user }))
  }
}