<template>
  <div class="ProjectDashboard">
  Gangster Project Dashboard
  <button @click = "test()">Test HttpService</button>
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

  constructor() {
    super();
    this.httpService = this.$store.state.httpService;
    this.projects = [];
  } 
  
  //this is how to init shit
  mounted(): void {
    
    this.httpService.getProjects()
    .then( (res: any) => {
      this.projects = res.data;
    }).catch( (err: any) => {
      console.log(err)
    });

  }

    test(): void {
      console.log(this.projects);
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

</style>
