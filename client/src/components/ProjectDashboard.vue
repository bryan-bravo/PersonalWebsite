<template>
  <div class="ProjectDashboard">
  Gangster Project Dashboard
  <button @click = "testHttpService()">Test HttpService</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HttpService from '../services/HttpService';

@Component
export default class ProjectDashboard extends Vue {
  private httpService: HttpService;

  constructor() {
    super();
    this.httpService = this.$store.state.httpService;
  } 

  testHttpService(): void {
    this.httpService.getProjects()
    .then( (res: any) => {
      console.log(res.data)
    }).catch( (err: any) => {
      console.log(err)
    });


  }
  //TODO: get this bitch to  commnicate with backend, may need proxy
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

</style>
