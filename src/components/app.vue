<template>
  <router-view />
</template>

<script>
export default {
  name: "size-app", // 组件名称

  // 接收参数
  props: {
    bg: null, // 背景图片
  },

  // 动态监听
  watch: {
    bg() {
      this.SetBackground();
    },
  },

  // 生命周期函数：挂载前调用
  created() {
    const // 创建对象
      html = document.documentElement.style,
      body = document.body.style,
      page = document.getElementById("app").style;

    html.height = body.height = "100%"; // 注入高度
    html.width = body.width = "100%"; // 注入宽度
    html.margin = body.margin = "0vw"; // 注入外边距
    html.padding = body.padding = "0vw"; // 注入内边距
    html.display = body.display = "block"; // 注入显示类型
    html.position = body.position = "relative"; // 注入定位模式

    page.height = page.width = "100%"; // 注入宽高
    page.display = "block"; // 注入显示类型
    page.position = "relative"; // 注入定位模式
    page.fontSize = "0vw";

    this.SetBackground(); // 调用背景设置
  },

  // 页面方法
  methods: {
    // 设置背景
    SetBackground() {
      if (this.bg) {
        const page = document.getElementById("app").style; // 获取对象
        page.background = `center/cover no-repeat url('${this.bg}')`; // 注入背景图片
      }
    },
  },
};
</script>