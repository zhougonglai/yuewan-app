<template lang="pug">
#root.page
  .weui-tab
    .weui-tab__panel
      nuxt
    .weui-tabbar
      .weui-tabbar__item(
        v-for="tab in tabs"
        :key="tab.uuid"
        @click="tabChange(tab)"
        :class="{'weui-bar__item_on': active === tab.name}")
        i.iconfont.weui-tabbar__icon(:class="active === tab.name ? tab.fillIcon : tab.icon")
        p.weui-tabbar__label(v-text="tab.label")

</template>
<script>
const uiid = () =>
  Math.random()
    .toString(16)
    .slice(-10)

export default {
  name: 'Default',
  data() {
    return {
      active: 'home',
      tabs: [
        {
          uiid: uiid(),
          name: 'home',
          label: '主页',
          icon: 'icon-home',
          fillIcon: 'icon-home-fill'
        },
        {
          uiid: uiid(),
          name: 'cars',
          label: '购物车',
          icon: 'icon-cart-Empty',
          fillIcon: 'icon-cart-Empty-fill'
        },
        {
          uiid: uiid(),
          name: 'my',
          label: '用户',
          icon: 'icon-account',
          fillIcon: 'icon-account-fill'
        }
      ]
    }
  },
  methods: {
    tabChange({ name }) {
      this.active = name
    }
  }
}
</script>
<style lang="scss" scoped>
#root {
  display: flex;
  flex-direction: column;
  .weui-tabbar {
    padding-bottom: calc(10px + constant(safe-area-inset-bottom));
    padding-bottom: calc(10px + env(safe-area-inset-bottom));
  }
}
</style>
