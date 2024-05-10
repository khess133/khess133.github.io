<template>
    <div class="creative-wrapper">
        <h1 class="creativewritingheader"> Creative Writing </h1>
        <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo, velit eu vestibulum luctus, risus nunc viverra erat, sed placerat felis quam ut sem. Phasellus sit amet ante ultrices, ultrices tellus fermentum, posuere felis. Curabitur eget nulla et leo rutrum accumsan. Ut felis lacus, lacinia quis libero a, iaculis ultrices mauris. Vivamus luctus justo ac consequat faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer hendrerit vehicula arcu a molestie. Sed a eros a magna luctus condimentum. Maecenas ante sapien, maximus vel augue non, interdum euismod est. Quisque lobortis gravida erat id semper.

            Integer vel tellus tristique dolor malesuada scelerisque. Mauris iaculis ex tellus, quis luctus quam ultrices id. Aliquam nec nunc mollis, pulvinar elit sit amet, tempor sem. Integer vitae dolor id orci faucibus vulputate et non quam. Integer vulputate dignissim nisl in viverra. In sed neque ac justo mollis dictum. Etiam a justo et nibh rutrum placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed non felis vitae neque egestas egestas. Duis eros dui, laoreet sit amet dolor ut, ornare mollis sem. Nunc ut luctus mauris. Donec eu lacus sem.
            
            Aenean quis viverra ex. Cras nec lacus velit. Sed quis justo tortor. Mauris vestibulum vulputate augue ut dictum. Maecenas nec venenatis nisi. Curabitur ut mauris ut turpis tempor consectetur in et ipsum. Vivamus nec scelerisque augue.
            
            Nullam ac nibh laoreet, sodales neque placerat, placerat nisl. Sed placerat tempus nisl vel pharetra. Etiam scelerisque vehicula tortor, at dictum orci consectetur id. Phasellus eleifend, sapien venenatis ultrices imperdiet, ante orci vehicula dui, ac eleifend nisl urna ut ligula. Mauris dignissim diam gravida nisi rutrum, eu suscipit lorem condimentum. Praesent tincidunt justo vehicula neque lacinia, at vulputate massa condimentum. Sed sed orci felis. Sed id dignissim nulla, vitae sollicitudin lorem. Duis rhoncus tellus id mattis luctus. Curabitur dignissim tortor eget risus interdum sodales. Vivamus auctor quam vel tempus vehicula. Vivamus malesuada maximus ligula, nec eleifend velit. Nunc neque lorem, imperdiet tempor aliquam quis, fringilla eget nisi. Phasellus sodales imperdiet faucibus. Aliquam justo nibh, tempus eget sapien eu, aliquet congue nulla.
            
            Curabitur et felis gravida, semper diam sit amet, rhoncus nulla. Nullam efficitur lorem non tellus laoreet, vel aliquam erat venenatis. Fusce turpis urna, efficitur quis facilisis quis, convallis in justo. Donec tincidunt sem mi, id consectetur nisl consequat vel. Phasellus vitae venenatis risus. Cras auctor leo quis felis imperdiet, ut laoreet massa porta. Integer mattis dui ac nibh mattis vehicula. Ut non lorem aliquam purus tempor ullamcorper sed non nisl.            
        </p>
        <div class="vines-wrapper">
            <img class="vines" src="@/assets/vines.jpg" />
            <img class="vines" src="@/assets/vines.jpg" />
        </div>
    </div>
</template>

<script>
export default {
    name: "CreativeWritingView"
}
</script>

<style>
.creative-wrapper {
    width: 100%;
    max-height: calc(100% - 60px);
    position: fixed;
    top: 60px;
    left: 0px;
    background-color: white;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
}

.vines-wrapper {
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: space-between;
}

.vines {
    transform-origin: 50% 50%;
    transform: rotate(90deg) scale(.5 10);
    opacity: .8;
}

.vines:nth-child(1) {
    margin-left: -190px;
}

.vines:nth-child(2) {
    margin-right: -190px;
    transform: scaleX(-1);
}

.text {
    font-size: 30px;
    margin: 70px;
    color: #585858;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}

.creativewritingheader {
    color: #585858;
}

.creative-wrapper h1 {
    margin-top: 60px;
    margin-bottom: -30px;
}
</style>