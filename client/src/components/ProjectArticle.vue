<template>
<p>Project Article </p>
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
  private projectId!: string;
  private project: Project | undefined;

  constructor() {
    super();
    this.httpService = this.$store.state.httpService;
    this.editState = false;
    this.Project = undefined;
  } 
  // created(): void {
  //   let this.projectId = this.$router.params.projectId;
  // }
  // mounted(): void {

    // populate the 
    // this.httpService.method()
    // .then( (res: any) => {

    // }).catch( (err: any) => {
    //   console.log(err)
    // });

  // }

  // saveContentBlock(id: number): void {

 
  // }

  // deleteContenBlock(id: number): void {
    
  // }

  toggleEditState(): void {
    this.editState = !this.editState;
  }
}
</script>