<template>
  <div class="ProjectDashboard">
    Projects

    <!-- projects -->
    <button @click='toggleEditState()'>Toggle Edit State</button>
    <br/>
    <div v-if='editState'>
      <input v-model ='newProjectName' type = 'text'/>
      <button @click='saveProject(0)'>New Project</button>
    </div>
    <!-- will be project components -->
      <div 
      v-for='project in projects' v-bind:key = 'project.id'
      class = 'project-thumbnail'> 
        <h3 v-if='!editState'> {{project.title}} </h3>
        <div v-if='editState'>
          <input v-model='project.title' type='input'>
          <button @click='saveProject(project.id)'>Update Project</button>
          <button @click='deleteProject(project.id)'>Delete Project</button>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HttpService from '../services/HttpService';
import Project from '../models/Project';

@Component
export default class ProjectDashboard extends Vue {

  private httpService: HttpService;
  private projects: Project[];
  private newProjectName: string;
  private editState: boolean;

  constructor() {
    super();
    this.httpService = this.$store.state.httpService;
    this.projects = [];
    this.newProjectName = '';
    this.editState = false;
  } 
  
  mounted(): void {

    //this is how to init shit
    this.httpService.getProjects()
    .then( (res: any) => {
      this.projects = res.data;
    }).catch( (err: any) => {
      console.log(err)
    });

  }

  saveProject(id: number): void {

    let project;
    let index = this.projects.length;

    // populate project to send in request
    if (id == 0) {
      project = new Project(undefined, this.newProjectName, '',[] );
    } else {
        project = this.projects.find(proj => proj.id == id);
        index = this.projects.findIndex(proj => proj.id == id);
    }

    // edit an existing project, just the title.
    this.httpService.saveProject(project)
    .then( (res: any) => {
      // put result into project field
      this.newProjectName = '';
      if( id == 0 )
        this.projects.push(res.data)
      else
        this.projects[index] = res.data;
    })
    .catch( (err: any) => {
      console.log(err)
    });
  }

  deleteProject(id: number): void {

    const confirmation: boolean = window.confirm('Delete Project?')
    if(confirmation) {
      this.httpService.deleteProject(id)
      .then( (res: any) => {
        if (res.data == true) {
          const index: number = this.projects.findIndex(proj => proj.id == id);
          this.projects.splice(index, 1);
        } else {
          // make alert that project failed to delete
          console.log("backend error ");
        }
        
      }).catch( (err: any) => {
        console.log(err)
      });
    }

    
  }

  toggleEditState(): void {
    this.editState = !this.editState;
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
