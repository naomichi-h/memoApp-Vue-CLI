<template>
  <ul class="item-wrap">
    <li class="item" v-for="(memo, index) in memos" v-bind:key="memo.id" @click="editMemoStart(memo, index)" v-bind:class="{ editActive: isActive(index) }">
      {{ memoFirstline(memo.text) }}
    </li>
    <CreateMemo />
  </ul>
</template>

<script>
import CreateMemo from './createMemo.vue'

export default {
  name: 'IndexMemo',
  components: {
    CreateMemo
  },
  computed: {
    memos () {
      return this.$store.state.memos
    },
    memoFirstline: () => (item) => {
      return item.split(/\r\n|\r|\n/)[0]
    }
  },
  methods: {
    editMemoStart (memo, index) {
      this.$store.commit('editModeOn')
      this.$store.commit('editBodySetter', {
        editBody: memo.text
      })
      this.$store.commit('editMemoIdSetter', {
        editMemoId: memo.id
      })
      this.$store.commit('editMemoIndex', {
        editMemoIndex: index
      })
    },
    isActive (index) {
      return this.$store.state.editMemoIndex === index
    }
  }
}
</script>

<style scoped>
.item-wrap {
  background: #2b2b2b;
  padding: 16px;
}
.item {
  padding: 8px 0;
  cursor: pointer;
  color: #d4d5d6;
}
.editActive {
  background:#000;
}
</style>
