<template>
  <div class="form" v-show="editFlg">
    <textarea class="textarea" rows="20" v-model="editBody" v-focus="editBody" ></textarea>
    <div class="btn-wrap">
      <EditMemo class="btn-edit"/>
      <DeleteMemo class="btn-delete"/>
    </div>
  </div>
</template>

<script>
import EditMemo from './editMemo.vue'
import DeleteMemo from './deleteMemo.vue'

export default {
  name: 'Form',
  components: {
    EditMemo,
    DeleteMemo
  },
  computed: {
    editFlg () {
      return this.$store.state.editFlg
    },
    editBody: {
      get () {
        return this.$store.state.editBody
      },
      set (value) {
        this.$store.commit('editBodySetter', {
          editBody: value
        })
      }
    }
  },
  directives: {
    focus: function (el, binding) {
      if (binding.value) {
        el.focus()
      }
    }
  }
}
</script>

<style scoped>
.textarea{
  box-sizing: border-box;
  width: 100%;
  border-style: none;
  outline: none;
  resize: none;
  border-radius: 13px;
  padding: 16px;
  background: #3f3f3f;
  color: #d4d5d6;
}
.btn-wrap{
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}
.btn-edit{
  flex-grow: 3;
  margin-right: 8px;
}
.btn-delete{
  flex-grow: 1;
}
</style>
