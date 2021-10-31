<template>
  <button class="btn" @click="deleteMemo">削除</button>
</template>

<script>
export default {
  name: 'DeleteMemo',
  methods: {
    deleteMemo () {
      this.$store.commit('deleteMemo')
      this.$store.commit('editFlgOff')
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
