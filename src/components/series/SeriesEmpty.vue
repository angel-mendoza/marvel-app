<template>
  <li>
    <article>
      <h3><slot></slot></h3>
    </article>
  </li>
</template>

<style scoped lang="scss">
  @import "@/styles/_variables.scss";
  article{
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $bg-article;
    border-radius: $border-radius-card;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1),
      inset 0 1px 1px rgba(255, 255, 255, 0.1);
    h3{
      margin: 0;
    }
  }
</style>