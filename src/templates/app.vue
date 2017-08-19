<template>
  <div class="viewport">
    <div class="app-screen" v-show="gameOn">
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
        <button class="ghost-btn " v-on:click="onNewGame"> New </button>
        <button class="ghost-btn " v-on:click="onPassClick"> Pass </button>
      </section>
    </div>
    <div class="init-screen" v-show="!gameOn">
      <section class="game-logo"> </section>
      <section class="msg-disp">{{gameMsg}} </section>
      <section class="player-sel">
        <div class="label"> Players </div>
        <span v-for="sel in [2,3,4,5]" class="sel-btn" 
              :data-count="sel"
              :class="{active: selPlayer == sel}"
              v-on:click="onPlayerSelect(sel, $event)"> 
          {{sel}}
        </span>
      </section>
      <section class="game-buttons">
        <button class="ghost-btn start-btn" v-on:click="onGameStart"> Start </button>
      </section>
    </div>
  </div>
</template>

<script type="text/javascript" src="../js/app.js"></script>
<style lang="less" src="../styles/app.less"></style>