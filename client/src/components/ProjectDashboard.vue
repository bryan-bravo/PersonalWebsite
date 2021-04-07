<template>
  <div class="ProjectDashboard">
    Projects

    <!-- projects functions top -->
    <button @click='toggleEditState()'>Toggle Edit State</button>
    <br/>
    <div v-if='editState'>
      <input v-model ='newProjectName' type = 'text'/>
      <button @click='saveProject(0)'>New Project</button>
    </div>
    <!-- will be project components -->
    <!-- these need to be tiles bring in tile.io-->
    <!-- pull in the pictures -->
    <div id='projects-container'>
      <!-- need to be able to edit pictures for project -->
        <div 
        v-for='project in projects' v-bind:key = 'project.id'
        class = 'project-thumbnail'> 

          <router-link :to = "{ name: 'ProjectArticle', params: { projectId: project.id }}">
            <h3 v-if='!editState'> {{project.title}} </h3>
            
          </router-link>
          <div v-if='editState'>
            <input v-model='project.title' type='input'>
            <button @click='saveProject(project.id)'>Update Project Name</button>
            <button @click='deleteProject(project.id)'>Delete Project</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HttpService from '../services/HttpService';
import Project from '../models/Project';
import VueMasonry from 'vue-masonry-css'

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
            this.$store.commit('message', "Something went wrong.")
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
      
      this.$store.commit('message', "Project saved successfully.")

    })
    .catch( (err: any) => {
      this.$store.commit('message', "Project save failed.")
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
            this.$store.commit('message', "Project deleted successfully.")

        } else {
          // make alert that project failed to delete
            this.$store.commit('message', "Project delete failed.")
        }
        
      }).catch( (err: any) => {
            this.$store.commit('message', "Project delete failed.")
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

#projects-container {
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
