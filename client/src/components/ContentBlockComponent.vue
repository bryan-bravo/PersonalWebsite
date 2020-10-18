<template>
  <!-- wrapper element -->
  <div>
    <!----- display ----->
    <div> 
      
      <!-- Regular text -->
      <div v-if="content.type==='text'"> {{content.content}} </div>

      <!-- link -->
       <a  v-if="content.type==='link'" :href='content.url'> {{content.content}} </a> 
      
      <!-- image | https://www.labnol.org/embed/google/photos/-->
      <!-- TODO: depending on screen size we conditionally set the parameters to size the photo -->
      <div v-if="content.type==='image'">
        <!-- for external url--> 
        <img v-if="isExternalResource(content.url)" :src="content.url"/>
        <!-- for internal hosted images -->
        <img v-else :src="'image/'+content.url">
      </div>

      <!-- video -->
      <!-- TODO: dynamically generate the width based off of the media size -->
      <div v-if="content.type==='video'">
      <!-- this is the format of the url https://www.youtube.com/embed/0_qCE82oqrA -->
        <iframe :src="content.url" width="560" height="315" frameborder="0" allowfullscreen></iframe>
      </div>

      <!-- code -->
      <div v-if="content.type==='code'">
        <!-- TODO: text area for the content take line breaks into account, text input or dropdown for language -->
        <pre><code :data-language="content.language">{{content.content}}</code></pre>
      </div>
    </div>
    
    <!----- editing -----> 
    <button v-if="loggedIn" v-on:click="editState = !editState">Edit</button>

    <div v-if="editState" v-on-clickaway="clickedAway">
        <button v-on:click="saveContentBlock()">Save</button>
        <button v-on:click="deleteContentBlock()">Delete</button>

      <!-- Regular text -->
      <div v-if="content.type==='text'"> 
        <label>Content</label>
        <textarea type="textarea" v-model="content.content"> </textarea>
      </div>

      <!-- link -->
      <div  v-if="content.type==='link'" :href='content.url'> {{content.content}} 
            <label>Content</label>
            <input v-model="content.content" />
            <label>URL</label>
            <input v-model="content.url" />
      </div> 
            

      <!-- image | https://www.labnol.org/embed/google/photos/-->
      <div v-if="content.type==='image'">
        <!-- TODO:
            if discS
              well image upload file/IO so some logic is going to be necessary on the backend
              response should return the url 
              display a file form input
              also display text form input, to display the server url so if it is set we can refer to it
              that was the same image can be used accross different components
            elif external url
              should just be a form text input
        -->
        TODO
        <!-- for external url--> 
        <!-- <img v-if="isExternalResource(content.url)" :src="content.url"/> -->
        <!-- for internal hosted images -->
        <!-- <img v-else :src="'image/'+content.url"> -->
      </div>

      <!-- video -->
      <div v-if="content.type==='video'">
      <!-- this is the format of the url https://www.youtube.com/embed/0_qCE82oqrA -->
        <label>Embedded URL </label>
        <input v-model="content.url">
      </div>

      <!-- code -->
      <div v-if="content.type==='code'">
        <!-- <pre><code :data-language="content.language">{{content.content}}</code></pre> -->
        <label> Language </label>
        <select v-model="content.language">
          <option> python </option>
          <option> java </option>
        </select>
        <textarea type="textarea" v-model="content.content"> </textarea>
      </div>

    </div>
  
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import ContentBlock from '../models/ContentBlock'
import HttpService from '../services/HttpService';
import { mixin as clickaway } from 'vue-clickaway';

@Component({
  mixins: [clickaway]
})
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
    code : ??? might be plug in TODO: get rainbow going

*/
  @Prop({default: ''})
  private projectId!: number;
  @Prop({default: ''})
  private propContent!: ContentBlock;
  // we do not want to manipulate parents data non explicity so we set a local instance here
  private content: ContentBlock;
  private httpService: HttpService;
  private loggedIn: boolean;
  private editState: boolean;
  
  constructor() {
    super();
    // TODO: put logged in into the store
    this.loggedIn = true;
    this.httpService = this.$store.state.httpService;
    this.content = this.propContent;
    this.editState = false;
  } 
  /**
   * Utilized by vue to determine whether or not the URL of an image is hosted locally or sharable resource on google photos
   * @returns boolean :true if it is an external resource
   */
  isExternalResource( ): boolean {
    // if url has http as inside
    return this.content.url.includes("http");
  }

  mounted() {
    // if passed in content block does not have an id then we save to server
    if (!this.content.id) 
      this.saveContentBlock();
    
  }

  /**
   * Calls HttpService and sends down the payload
   * Remeber that .then catches 200's and .catch handles error status code
   */
  saveContentBlock(): void {
    this.httpService.saveContentBlock(this.projectId, this.content)
    .then( (res: any) => {
     // call message service and alert that successful
     this.content = res.data;

    }).catch( (err: any) => {
     // call message service and alert that failure
      console.log(err.data)
    });
    
  }

  deleteContentBlock(): void {
    
    // todo make an alert first
    if (!confirm("Are you sure you wish to delete this"))
      return;

    this.httpService.deleteContentBlock(this.projectId, this.content.id)
    .then( (res: any) => {
      console.log(res.data)
     // need to emit the content block Id to the parent to remove from the list
           this.$emit('content-block-deleted', this.content.id )

     // call message service and alert that successful


    }).catch( (err: any) => {
     // call message service and alert that failure
      console.log(err.data)
    });

  }

  // TODO: image upload
  /**
   * Utilized if the user clicks away from the contentblock while editing 
   */
  clickedAway(): void {
    this.editState = false;
  }

}
</script>