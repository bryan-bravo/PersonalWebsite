<template>
  <div class='ProjectArticle'>
    
    <!-- title -->
    <p>Project Article Dashboard</p>
    <p>{{project.title}}</p>
    <p> {{project.dateModified}}</p>
    <button @click='toggleEditState()'>Toggle Edit State</button>

    
    <!-- new block form --> 
    <div v-if = "editState">
      <label>New ContentBlock of type </label>
      <select>
        <option v-for="type in contentBlockTypes" :key="type" > {{type}} </option>
      </select>
      <button v-on:click="createContentBlock()">Create</button>
    </div>
    <hr/>
    <!-- contentBlocks -->
    <div :key='contentBlock.id' v-for='contentBlock in project.contentBlocks' class='content'>
      <ContentBlockComponent 
        :projectId = "projectId" 
        :propContent = "contentBlock" 
        @content-block-deleted = "removeContentBlock"
      ></ContentBlockComponent>
      <hr/>
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
    this.project.contentBlocks.push(
      new ContentBlock(undefined, this.selectedType,"default content text" ,"", 1,""  )
    );
  }

  removeContentBlock(contentBlockId: number ): void  {
    const index = this.project.contentBlocks.map(x => {
      return x.id;
    }).indexOf(contentBlockId);

    this.project.contentBlocks.splice(index, 1);
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