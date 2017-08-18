<template>
  <section class="app-players">
    <span v-for="(player, idx) in players" :class="{active : (idx == current)}" class="app-player">
      <div>
        <i class="fa fa-male icon" aria-hidden="true"></i>
      </div>
      <span class="text">{{player.name}} </span>
    </span>

  </section>
</template>

<script type="text/javascript" src="../js/players.js"></script>
<style lang="less" src="../styles/players.less"></style>