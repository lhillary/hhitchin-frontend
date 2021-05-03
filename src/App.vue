<template>
  <div id="app" class="light">
    <lh-navigation></lh-navigation>
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script>
  import LhNavigation from './components/Navigation';

  export default {
    components: {
      LhNavigation
    }
  }
</script>

<style lang="scss">

@import "./assets/sass/globals.scss";
@import './assets/sass/mixins.scss';
@import "./assets/sass/MyFontsWebfontsKit.css";

</style>
