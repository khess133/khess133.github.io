<template>
<div class="nav-bar">
    <div :class="{'nav-item': true, 'selected': currentPage == 0}" @click="currentPage = 0">Home</div>
    <div :class="{'nav-item': true, 'selected': currentPage == 1}" @click="currentPage = 1">Creative Writing</div>
    <div :class="{'nav-item': true, 'selected': currentPage == 2}" @click="currentPage = 2">Formal Writing</div>
    <div :class="{'nav-item': true, 'selected': currentPage == 3}" @click="currentPage = 3">Artifact</div>
    <div :class="{'nav-item': true, 'selected': currentPage == 4}" @click="currentPage = 4">Poem</div>
</div>
  <HomeView :active="currentPage"></HomeView>
  <CreativeWritingView class="page" v-if="currentPage == 1"></CreativeWritingView>
  <FormalWritingView class="page" v-if="currentPage == 2"></FormalWritingView>
  <ArtifactView class="page" v-if="currentPage == 3"></ArtifactView>
  <PoemView class="page" v-if="currentPage == 4"></PoemView>
</template>

<script>
import HomeView from './components/HomeView.vue'
import CreativeWritingView from './components/CreativeWritingView.vue'
import FormalWritingView from './components/FormalWritingView.vue'
import ArtifactView from './components/ArtifactView.vue'
import PoemView from './components/PoemView.vue'

export default {
  name: 'App',
  components: {HomeView, CreativeWritingView, FormalWritingView, ArtifactView, PoemView},
  data() {
    return {
      currentPage: 0
    }
  }
}
</script>

<style>
.quicksand {
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}

* {
  font-family: quicksand;
}

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
  color:#585858; 
}

.nav-item:hover, .selected {
  background-color: rgba(0, 0, 0, .1);
}

.page {
  width: 70%;
  margin-left: 15%;
}
</style>
