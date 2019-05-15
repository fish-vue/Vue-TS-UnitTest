<template>
  <div class="hello">
    <span class="count">{{ count }}</span>
    <button id="inc" @click="increment">Increment</button>
    <button id="dec" @click="decrease">Decrease</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Click extends Vue {
  private count: number;

  constructor(){
    super();
    this.count = 0;
  }

  public increment(){
    this.count++;
  }
  public decrease(){
    this.count--;
  }

}
</script>
