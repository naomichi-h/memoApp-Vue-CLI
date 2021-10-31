<template>
  <button class="btn" @click="editMemoFinish">編集</button>
</template>

<script>
export default {
  name: 'EditMemo',
  methods: {
    editMemoFinish () {
      this.$store.commit('editMemo')
      this.$store.commit('editFlgOff')
      this.$store.commit('editMemoIndexClean')
    }
  }
}
</script>

<style scoped>
.btn {
  height: 40px;
  border-radius: 13px;
  font-size: 16px;
  border-style: none;
  font-family: "arial", sans-serif;
  color: #d4d5d6;
  font-weight: bold;
  cursor: pointer;
  background: #000;}
</style>
