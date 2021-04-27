const // 创建对象
    all = import.meta.globEager('./*.vue'), // 获取目录下全部组件
    mod = Object.keys(all).map($ => {
        const $i = all[$].default // 抽取组件
        $i.install = function (Vue) { Vue.component($i.name, $i) } // 提供安装方法
        return $i
    }), // 组件处理
    api = {
        // 判断是否为竖屏
        phone: window.screen.height > window.screen.width,

        // 时间戳转换
        unix: $ => {
            const // 创建对象
                R = E => `${E < 10 ? 0 : ""}${E}`, // 补零
                date = new Date(Number($)),
                Y = date.getFullYear(), // 年
                M = R(date.getMonth() + 1), // 月
                D = R(date.getDate()), // 日
                h = R(date.getHours()), // 时
                m = R(date.getMinutes()), // 分
                s = R(date.getSeconds()) // 秒
            return `${Y}年${M}月${D}日 ${h}:${m}:${s}`;
        }
    }

// 统一注册操作
export function install(Vue) {
    if (install.installed) { return }
    mod.forEach($ => Vue.component($.name, $))
    Vue.config.globalProperties.$sapi = api // 再挂载到原型链
}

// // 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) { install(window.Vue) }

// 导出
export default { install, ...mod }