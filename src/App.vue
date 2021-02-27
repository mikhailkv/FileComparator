<template>
  <div>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
    <div class="container">
      <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
      <FileUpload />
      <FileList />
    </div>
  </div>
</template>


<script>
import FileUpload from './components/FileUpload.vue'
import FileList from './components/FileList.vue'

export default {
  name: 'App',
  components: {
    FileUpload,
    FileList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
    max-width: 1000px;
    margin: 1em;
}
</style>
