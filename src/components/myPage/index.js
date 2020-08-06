import myPage from './myPage.vue';
import Vue from "vue";

export default {
  install (Vue) {
    Vue.component('my-page', myPage)
  }
}
