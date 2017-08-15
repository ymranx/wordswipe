<template>
  <div class="app-screen">  
    <section class="app-title"> Wordswipe</section>
    <section class="app-header"> </section>
    <ul class="app-grid">
      <li v-for="letter in letters" class="grid-letter"> {{letter}}</li>
    </ul>
    <ul class="app-words">
      <li v-for="word in words" class="grid-word"> {{word}}</li>
    </ul>
  </div>
</template>

<script type="text/javascript" src="../js/app.js"></script>
<style lang="less" src="../styles/app.less"></style>