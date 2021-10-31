<template>
  <div class="body">
    <Header />
    <div class="app-wrap">
      <ModeTitle />
      <div class="content-wrap">
        <IndexMemo class="index"/>
        <Form class="form"/>
      </div>
    </div>
  </div>
</template>

<script>
import 'normalize.css'
import Header from './components/header.vue'
import ModeTitle from './components/modeTitle.vue'
import IndexMemo from './components/indexMemo.vue'
import Form from './components/form.vue'

export default {
  components: {
    Header,
    ModeTitle,
    IndexMemo,
    Form
  }
}
</script>

<style scoped>
.body {
  background: #d4d5d6;
  height: 100%;
}
.app-wrap {
  background: #000;
  width: 680px;
  min-height: 300px;
  margin: 0 auto;
  margin-top: 30px;
  padding: 16px;
  border-radius: 13px;
}
.content-wrap {
  display: flex;
  justify-content: space-around;
  background: #3f3f3f;
  min-height: 480px;
}
.index {
  flex-grow: 1;
}
.form {
  flex-grow: 2;
  padding: 16px;
}
</style>

<style>
html, body {
  height: 100%;
  background: #3f3f3f;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
</style>
