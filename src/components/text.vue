<template>
  <span
    class="this-text"
    style="
      box-sizing: border-box;
      white-space: nowrap;
      overflow: visible;
      background: none;
      border: none;
      padding: 0;
    "
  >
    <span v-if="!type"><slot /></span>
    <code v-if="type"><slot /></code>
  </span>
</template>

<script>
export default {
  name: "size-text", // 组件名称

  // 接收参数
  props: { code: Boolean },

  // 页面对象
  data: () => ({
    type: false,
  }),

  // 生命周期函数：挂载前调用
  created() {
    this.type = this.code == true;
  },
};
</script>

<style scoped>
.this-text {
  /* 主容器 */
  display: inline-block;
  position: relative;
  font-size: 1rem;
  color: inherit;
}

.this-text > code,
.this-text > span {
  font-weight: inherit;
  white-space: nowrap;
  transition: inherit;
  text-align: center;
  position: relative;
  font-size: 100em;
  line-height: 1;
  display: block;
  color: inherit;
  zoom: 0.01;
}
</style>