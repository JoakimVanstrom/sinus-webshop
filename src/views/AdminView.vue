<template>
  <div>
      <form @submit.prevent="upload">
          <input type="file" ref="fileField">
          <button>Add a product</button>
      </form>
  </div>
</template>

<script>
export default {
    methods: {
        upload(){
            
        }
    }
}
</script>

<style>

</style>