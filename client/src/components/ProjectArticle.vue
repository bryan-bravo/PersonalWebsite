<template>
<div class='ProjectArticle'>
  <p>Project Article </p>
  <p>{{project.title}}</p>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HttpService from '../services/HttpService';
import Project from '../models/Project';

@Component
export default class ProjectArticle extends Vue {

  private httpService: HttpService;
  private editState: boolean;
  @Prop({default: ''})
  private projectId!: number;
  private project!: Project;

  constructor() {
    super();
    this.httpService = this.$store.state.httpService;
    this.editState = false;
    this.project = new Project(0,"","",[]);
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

  // saveContentBlock(id: number): void {

 
  // }

  // deleteContenBlock(id: number): void {
    
  // }

  toggleEditState(): void {
    this.editState = !this.editState;
  }
}
</script>