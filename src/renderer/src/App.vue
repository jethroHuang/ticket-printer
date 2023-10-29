<script setup>
const ipcRenderer = electron.ipcRenderer;

function printTest() {
  ipcRenderer.send('print', "hello world");
}
</script>

<template>
  <div class="w-full h-screen flex justify-center items-center">
    <button @click="printTest" class="btn text-3xl">打印测试3</button>
  </div>
</template>

<style lang="less">
</style>
