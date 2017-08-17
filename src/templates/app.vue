<template>
  <div class="app-screen">
    <section class="app-title"></section>
    <section class="app-header">
      <players ref="appPlayers"> </players>
      <score ref="appScore"> </score>
    </section>
    <grid ref="appGrid" v-on:word-match="onWordMatch"> </grid>
    <ul class="app-words list">
      <li v-for="word in words" class="grid-word" :class="{'word-done': word.done}">
        {{word.word}}
      </li>
    </ul>
  
    <section class="btn-list">
      <button class="ghost-btn "> New </button>
      <button class="ghost-btn "> Pass </button>
    </section>
  </div>
</template>

<script type="text/javascript" src="../js/app.js"></script>
<style lang="less" src="../styles/app.less"></style>