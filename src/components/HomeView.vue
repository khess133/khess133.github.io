<template>
    <div class="home-wrapper">
        <h1 class="header-text">Kalindi Hess Portfolio</h1>
    </div>
</template>

<script>
export default {
    name: "HomeView"
}
</script>

<style>
.home-wrapper {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(@/assets/background3.jpg);
    background-size: 80% 80%;
}

.header-text {
    color: white;
    font-size: 72px;
    font-family: 'Courier New', Courier, monospace;
    background-color: #b7d3df;
    padding: 10px;
}
</style>