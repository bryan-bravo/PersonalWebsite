<template lang="html">

  <section class="file-upload">
    <!-- upload regular file -->

    <!-- upload image -->
    <!-- center/ crop it -->
    <!-- compress and make copies, rename, associate with db, save on disk -->
  </section>

</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class FileUpload extends Vue {

      constructor() {
        super();
      } 
  }

</script>

<style scoped lang="scss">
  .file-upload {

  }
</style>
