<template>
  <ul class="item-wrap">
    <li class="item" v-for="(memo, index) in memos" v-bind:key="memo.id" @click="editMemoStart(memo, index)" v-bind:class="{ editActive: isActive(index) }">
      {{ memo.text.split(/\r\n|\r|\n/)[0] }}
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
    editFlg () {
      return this.$store.state.editFlg
    },
    editBody () {
      return this.$store.state.editBody
    },
    editMemoId () {
      return this.$store.state.editMemoId
    },
    editMemoIndex () {
      return this.$store.state.editMemoIndex
    }
  },
  methods: {
    editMemoStart (memo, index) {
      this.$store.commit('editFlgOn')
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
