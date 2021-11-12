<template>
  <li class="btn" @click="addMemo">+</li>
</template>

<script>
export default {
  name: 'CreateMemo',
  methods: {
    addMemo () {
      this.$store.commit('editModeOn')
      this.$store.commit('addMemo')
    }
  }
}
</script>

<style scoped>
.btn {
  color: #d4d5d6;
  font-weight: bold;
  cursor: pointer;
  padding: 8px 0;
}
</style>
