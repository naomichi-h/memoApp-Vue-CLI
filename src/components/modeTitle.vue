<template>
  <h2 class="mode-title" v-if="editMode">編集</h2>
  <h2 class="mode-title" v-else>一覧</h2>
</template>

<script>
export default {
  name: 'ModeTitle',
  computed: {
    editMode () {
      return this.$store.state.editMode
    }
  }
}
</script>

<style scoped>
.mode-title {
  font-size: 16px;
  margin: 0;
  color: #d4d5d6;
  font-family: "arial", sans-serif;
}
</style>
