<template>
  <div class="character-loader">
    <div class="img"></div>
    <h1></h1>
  </div>
</template>
<style lang="scss" scoped>
  @import "@/styles/_variables.scss";



  .character-loader{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .img, h1{
      background: #eee;
      background: linear-gradient(110deg, #516285 8%, #596c93 18%, #516285 33%);
      background-size: 200% 100%;
      animation: 1.5s shine linear infinite;
    }
    .img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
    }

    h1 {
      height: 15px;
      width: 100px;
      margin: 10px;
    }
  }

@keyframes shine {
  to {
    background-position-x: -200%;
  }
}
</style>