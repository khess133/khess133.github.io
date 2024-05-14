<template>
    <div class="creative-wrapper">
        <h1 class="artifactheader"> Artifact </h1>
        <img class="artifact-img" src="@/assets/artifact.jpg" />
        <p class="text artifact">
            This artifact is a representation of the book Just Mercy by Bryan Stevenson. The book highlights the unjust legal system (represented by the unbalanced scale), and the fight of the stone catchers fighting against the courts, trying to find justice. The gavel on the weighted-down side of the scale represents the courts, and the hand holding the stone represents the stone catchers, who aren’t treated fairly in the corrupted court system.
        </p>
        <div class="vines-wrapper">
            <img class="vines" src="@/assets/vines.jpg" />
            <img class="vines" src="@/assets/vines.jpg" />
        </div>
    </div>
</template>

<script>
export default {
    name:"ArtifactView"
}
</script>

<style>
.artifactheader {
    color: #585858;
}

.artifact {
    text-align: center;
}

.artifact-img {
    width: 70%;
    margin-top: 60px;
}
</style>