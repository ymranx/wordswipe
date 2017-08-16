<template>
  <ul class="app-grid list">
    <svg id='appIllustrations' version="1.1" xmlns="http://www.w3.org/2000/svg">
    </svg>
    <li v-for="(letter, idx) in letters" class="grid-letter"> {{letter}}</li>
  </ul>
</template>

<script type="text/javascript" src="../js/grid.js"></script>
<style lang="less" src="../styles/grid.less"></style>