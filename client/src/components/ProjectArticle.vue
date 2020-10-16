<template>
  <div class='ProjectArticle'>
    
    <!-- title -->
    <p>Project Article Dashboard</p>
    <p>{{project.title}}</p>
    <p> {{project.dateModified}}</p>
    
    
    <!-- new block form --> 
    <div>
      <label>New ContentBlock of type </label>
      <select>
        <option v-for="type in contentBlockTypes" :key="type" > {{type}} </option>
      </select>
      <button v-on:click="createContentBlock()">Create</button>
    </div>

    <!-- contentBlocks -->
    <div :key='contentBlock.id' v-for='contentBlock in project.contentBlocks' class='content'>
      <ContentBlockComponent :content = "contentBlock" :projectId = "projectId"></ContentBlockComponent>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HttpService from '../services/HttpService';
import Project from '../models/Project';
import ContentBlock from '../models/ContentBlock'
import ContentBlockComponent from './ContentBlockComponent.vue';

@Component({
  components: { ContentBlockComponent }
})
export default class ProjectArticle extends Vue {

  private httpService: HttpService;
  private editState: boolean;
  @Prop({default: ''})
  private projectId!: number;
  private project!: Project;
  private contentBlockTypes: string[];
  private selectedType!: string;

  constructor() {
    super();
    this.httpService = this.$store.state.httpService;
    this.editState = false;
    this.project = new Project(0,"","",[]);
    this.contentBlockTypes = this.populateTypes();
    this.selectedType= this.contentBlockTypes[0];
  } 

  mounted(): void {
    // get Project 
    this.httpService.getProjectById(this.projectId)
    .then( (res: any) => {
      this.project = res.data;
    }).catch( (err: any) => {
      console.log(err)
    });
  }
  
  createContentBlock(): void {
    // instantiate a new content block
    // add to list
    this.project.contentBlocks.push(
      new ContentBlock(undefined, this.selectedType,"default content text" ,"", 1,""  )
    );
  }

  /**
   * Populates the select for the content block creation form
   */
  populateTypes(): string[] {
    return ["text", "link", "image", "video", "code"];
  }

  toggleEditState(): void {
    this.editState = !this.editState;
  }
}
</script>