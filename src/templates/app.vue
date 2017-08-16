<template>
  <div class="app-screen">
    <section class="app-title"> Wordswipe</section>
    <section class="app-header"> </section>
    <grid :words="words"> </grid>
    <ul class="app-words list">
      <li v-for="word in words" class="grid-word"> {{word}}</li>
    </ul>
  
    <section class="btn-list">
      <button class="ghost-btn "> New </button>
      <button class="ghost-btn "> Pass </button>
    </section>
  </div>
</template>

<script type="text/javascript" src="../js/app.js"></script>
<style lang="less" src="../styles/app.less"></style>