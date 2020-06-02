<template>
  <div id="app">
    <!-- this nav will be the bar on top--> 
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | -->
      <router-link to="/">About</router-link> |
      <router-link to="/resume">Resume</router-link> |
      <a href='https://github.com/bryan-bravo'>Github </a> |
      <router-link to="/projects">Projects & Adventures</router-link>
    </div>
    <router-view/>
  </div>
</template>
 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
