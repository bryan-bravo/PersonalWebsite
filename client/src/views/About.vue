<template>
    <div id="home-page" class="main-component">
        <div id="home-page-photo" >
            <img src="../assets/me.jpg">
        </div>
        <div id="home-page-bio" >
            Hi I'm Bryan. I am a software developer in the greater Los Angeles area.
            More importantly I love tech, automotive technologies, trees, and animals specifically birds and fish.
        </div>
    </div>
</template>

<style scoped>
  #home-page {
      height: 100vh;
      width: 89.9vw;
      margin: 0 5vw;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      /* transform: translateY( 30%); */
  }
  #home-page-bio {
      width: 50%;
      margin-right: 0;
  }
  #home-page-photo {
      display: inline-block;
      width: 40%;
      border-radius: 50%;
  }
  #home-page-photo > img {
      width: 100%;
  }
</style>