<template>
  <div class="container-error">
    <div class="article-error">
      <h3>
        <slot></slot>
      </h3>
    </div>
  </div>
</template>
<style scoped lang="scss">
  @import "@/styles/_variables.scss";
  .container-error{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    .article-error{
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 100%;
      background-color: $bg-article;
      border-radius: $border-radius-card;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1),
        inset 0 1px 1px rgba(255, 255, 255, 0.1);
      h3{
        margin: 0;
      }
    }
  }

  @media (max-width: 767px) {
    .container-error{
      .article-error {
        width: 100%;
      }
    }
  }
</style>