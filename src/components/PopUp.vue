<template>
    <div id="popup-wrapper" v-if="active" @click.self="cb()">
        <div id="popup-content">
            <div id="popup-close" @click="cb()">x</div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "PopUp",
    props: ['active', 'cb'],
}
</script>

<style scoped>
#popup-wrapper {
    background-color: rgba(0, 0, 0, .7);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#popup-content {
    display: flex;
    width: 50%;
    height: 60%;
    padding: 2%;
    background-color: white;
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#popup-close {
    cursor: pointer;
    font-size: 40px;
    color: #585858;
    position: absolute;
    top: 2px;
    right: 22px;
}
</style>