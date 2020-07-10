<template>
<div>
ContentBlockComponent works!
{{content.content}}
</div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import ContentBlock from '../models/ContentBlock'
@Component
//TODO: go to angular link and look at example of naming this?
export default class ContentBlockComponent extends Vue {

//   private editState: boolean;
  @Prop({default: ''})
  private content!: ContentBlock;

  constructor() {
    super();
  } 


}
</script>