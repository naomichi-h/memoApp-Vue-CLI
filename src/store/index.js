import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const STORAGE_KEY = 'memoapp-spa'
const savedMemoData = localStorage.getItem(STORAGE_KEY)

const store = new Vuex.Store({
  state: {
    memos: savedMemoData ? JSON.parse(savedMemoData) : [
      {
        id: 1,
        text: `メモの新規作成
+ボタンを押して新しいメモを作成してください`
      }
    ],
    // nextMemoId: 2,
    editMode: false,
    editBody: '',
    editMemoId: null,
    editMemoIndex: null
  },

  mutations: {
    addMemo (state) {
      const id = new Date().getTime()
      state.memos.push({
        id: id,
        text: '新規メモ'
      })
      // state.nextMemoId++
      state.editBody = '新規メモ'
      state.editMemoId = state.memos.slice(-1)[0].id
      state.editMemoIndex = state.memos.length - 1
    },
    editMemo (state) {
      state.memos.find((memo) => memo.id === state.editMemoId).text = state.editBody
    },
    deleteMemo (state) {
      state.memos.splice(state.editMemoIndex, 1)
    },
    editModeOn (state) {
      state.editMode = true
    },
    editModeOff (state) {
      state.editMode = false
    },
    editBodySetter (state, payload) {
      state.editBody = payload.editBody
    },
    editMemoIdSetter (state, payload) {
      state.editMemoId = payload.editMemoId
    },
    editMemoIndex (state, payload) {
      state.editMemoIndex = payload.editMemoIndex
    },
    editMemoIndexClean (state) {
      state.editMemoIndex = null
    }
  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.memos))
})

export default store
