<template>
  <div class="this">
    <size-text class="msg">你已经看到了这个组件了</size-text>
  </div>
</template>

<style scoped>
.this {
  position: relative;
  display: block;
  height: 100%;
  width: 100%;
}

.this > .msg {
  transform: translate(-50%, -50%);
  position: absolute;
  font-size: 1vw;
  display: block;
  left: 50%;
  top: 50%;
}
</style>