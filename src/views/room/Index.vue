<template>
  <div class="user">
     <transition 
      name="fade"
      mode="out-in">
        <router-view />
     </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component({
  name: 'room'
})
export default class extends Vue {}
</script>

<style>
</style>
