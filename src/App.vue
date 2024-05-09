<template>
  <div class="nav-bar">
    <div class="nav-item" @click="currentPage = 0">home</div>
    <div class="nav-item" @click="currentPage = 1">creative writing</div>
    <div class="nav-item">formal writing</div>
    <div class="nav-item">artifact</div>
    <div class="nav-item">poem</div>
  </div>
  <HomeView></HomeView>
  <CreativeWritingView class="page" v-if="currentPage == 1"></CreativeWritingView>
</template>

<script>
import HomeView from './components/HomeView.vue'
import CreativeWritingView from './components/CreativeWritingView.vue'

export default {
  name: 'App',
  components: {HomeView, CreativeWritingView},
  data() {
    return {
      currentPage: 0
    }
  }
}
</script>

<style>
.nav-bar {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: white;
  z-index: 2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 3px solid #b7d3df;
  border-bottom: 3px solid #b7d3df;

}

.nav-item {
  border-left: 3px solid #b7d3df;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
}

.nav-item:hover {
  background-color: rgba(0, 0, 0, .1);
}

.page {
  width: 80%;
  margin-left: 10%;
}
</style>
