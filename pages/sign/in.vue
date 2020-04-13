<template lang="pug">
section#in
  .weui-form__text-area.text-start
    .logo-ctx
      img.logo(src="~/assets/logo.png" srcset="~/assets/logo@2x.png 2x" alt="logo")
      img.logo__label(src="~/assets/label.png" srcset="~/assets/label@2x.png 2x" alt="label")
    .weui-form__title.mt-3 Hi~欢迎来到NN约玩
  //- .page__title.mt-3 Hi~欢迎来到NN约玩
  .weui-form__control-area
    .weui-cells
      .weui-cell.weui-cell_active.weui-cell_access.weui-cell_select.weui-cell_select-before
        .weui-cell__hd(@click="pickCountryCode")
          label.weui-label +86
        .weui-cell__bd
          input.weui-input(type="number" pattern="[0-9]*" placeholder="请输入号码" v-model="sign.phone")
</template>
<script>
export default {
  name: 'SignIn',
  layout: 'sign',
  head() {
    return {
      title: '登录',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  },
  data() {
    return {
      sign: {
        phone: 12345
      }
    }
  },
  methods: {
    pickCountryCode() {
      this.$weui.picker(
        [
          {
            label: '+80',
            value: 80
          },
          {
            label: '+81',
            value: 81
          },
          {
            label: '+82',
            value: 82
          },
          {
            label: '+83',
            value: 83
          },
          {
            label: '+84',
            value: 84
          },
          {
            label: '+85',
            value: 85
          },
          {
            label: '+86',
            value: 86
          }
        ],
        {
          title: '手机区号'
        }
      )
    }
  }
}
</script>
<style lang="scss" scoped>
.logo-ctx {
  display: flex;
  align-items: center;
  .logo {
    width: 50px;
    height: 65px;
  }
  .logo__label {
    margin-left: 10px;
  }
}
</style>
