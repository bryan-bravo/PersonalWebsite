<template>
<div>
ContentBlockComponent works!
</div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
//TODO: go to angular link and look at example of naming this?
export default class ContentBlockComponent extends Vue {

//   private editState: boolean;
//   @Prop({default: ''})
//   private content!:ContentBlock;

  constructor() {
    super();
  } 


}
</script>