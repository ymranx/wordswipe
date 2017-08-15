<template>
  <div class="app-screen">
    <section class="app-title"> Wordswipe</section>
    <section class="app-header"> </section>
    <ul class="app-grid list">
      <svg id='appIllustrations' version="1.1" xmlns="http://www.w3.org/2000/svg">
      </svg>
      <li v-for="letter in letters" class="grid-letter"> {{letter}}</li>
    </ul>
  
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