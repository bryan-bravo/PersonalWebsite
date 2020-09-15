<template>
  <!-- wrapper element -->
  <div>

    <!-- display -->
    <div> 
      
      <!-- Regular text -->
      <div v-if="content.type==='text'"> {{content.content}} </div>

      <!-- link -->
       <a  v-if="content.type==='link'" :href='content.url'> {{content.content}} </a> 
      <!-- image | https://www.labnol.org/embed/google/photos/-->
      <div v-if="content.type==='image'">
        <!-- for external url--> 

        <!--<img :src="content.url"/>-->
        <img :src="'image/'+content.url">


      </div>

    </div>
    
    <!-- when editing we will have smaller stuff (form inputs)to modify the actual content displayed if more complex --> 
    <div></div>
  
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import ContentBlock from '../models/ContentBlock'
@Component
export default class ContentBlockComponent extends Vue {
/* 
  This component will consume a contentBlock and emit contentBlock to parent component
  - contentBlock.content will house value relevant to type of block and displayal of that element ""
  - going to have a stage theatre like area for the content,
   this will be a div with conditional rules for the different ways to render content
  - when editing we will have smaller stuff (form inputs)to modify the actual content displayed if more complex 
 Content types: switch(type)
    text : p
    link : a <display text : url>
    image: img : url path (either google api endpoint | rest end point for image controller)
    video: iframe: 
    code : ??? might be plug in
  TODO create a model dummy class
  TODO add a field on the class for the link's display text
  TODO: approach these tasks one by one and assure that you can <display | edit>
  TODO edit this and submit the changes to the parent Project Article class

*/
//   private editState: boolean;
  @Prop({default: ''})
  private content!: ContentBlock;
  
  constructor() {
    super();
  } 

  // get imageUrl() : String {
  //   // if image

  //   // else if disk image, want to generate a path/link to a get request that returns the same shit as src, look at tools for response definition
  // }

}
</script>