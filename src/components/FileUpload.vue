<template>
  <div
    class="upload"
    :class="isDragging ? 'drag-enter': 'drag-leave'"
    @dragover="isDragging=true" 
    @dragleave="isDragging=false">
    <form class="box" method="post" action="" enctype="multipart/form-data">
      <div class="box__input">
        
        <input 
          class="box__file" 
          type="file" 
          id="file" 
          data-multiple-caption="{count} files selected" 
          @change="fileSave($event.target.files)"
          />
        <label v-if="!isUploading" for="file"><strong>Choose a file</strong><span class="box__dragndrop"> or drag it here</span>.</label>
        <label v-else><strong>Uploading</strong></label>
      </div>
    </form>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'FileUpload',
  data() {
    return {
      isDragging: false,
      isUploading: false
    }
  },
  computed: {
    ...mapGetters(["isDragging"])
  },
  methods: {
    fileSave(fileName) {
      console.log(fileName)
      this.isDragging = false
      console.log(this.isDragging)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .upload {
   position: relative;
 }
 .upload.drag-enter{
    background: lightblue;
 }
  .upload.drag-leave{
    background: #ffffff;
 }
 .box__input {
    position: relative;
    width: 100%;
    height: 150px;
    border: 5px dashed #00ADCE;
    text-align: center;
    font-size: 2em;
    padding-top: 60px;
}
 input {
    
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
}
</style>
