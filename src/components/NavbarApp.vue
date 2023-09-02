<template>
  <nav>
    <router-link to="/"><img src="../assets/logo.png" alt="Logo"></router-link>
    <router-link to="/favorites">Favorites</router-link>
  </nav>
</template>
<style lang="scss" scoped>
  @import "@/styles/_variables.scss";
  nav {
    position: sticky;
    z-index: 1;
    top: 0;
    width: 100%;
    height: 70px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: $bg-navbar;
    -webkit-backdrop-filter: blur(5px);
    -moz-backdrop-filter: blur(5px);
    -ms-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    backface-visibility: hidden;
    transform: translateZ(0px);
    transition: 0.3s;
    a{
      font-weight: bold;
      color: $font-color;
      text-decoration: none;
      font-size: 1.3rem;
      img{
        height: 40px;
      }
    }
  }
</style>