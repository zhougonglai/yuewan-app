<template lang="pug">
#sign.page
  header.page__hd.fixed
    .left-content
      i.iconfont.icon-icon-test2
    .right-content
      svg.icon(@click="changeTheme" v-if="!theme.auto")
        use(:xlink:href="theme.icon[theme.light]")
  main.page__bd.weui-form
    nuxt
</template>
<script>
export default {
  name: 'Sign',
  head() {
    return {
      bodyAttrs: !this.theme.auto && {
        'data-weui-theme': this.theme.light ? 'light' : 'dark'
      }
    }
  },
  data() {
    return {
      theme: {
        auto: true,
        light: 1,
        icon: ['#icon-dark', '#icon-sun']
      }
    }
  },
  methods: {
    changeTheme() {
      this.theme.light = this.theme.light ? 0 : 1
    }
  }
}
</script>
