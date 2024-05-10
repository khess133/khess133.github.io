<template>
    <div class="home-wrapper">
        <h1 class="header-text" v-if="active == 0">Kalindi Hess Portfolio</h1>
        <div class="book-wrapper" v-if="active == 0">
            <a class="book-link" @click.prevent="selectedBook = 1" href="">Just Mercy</a>
            <a class="book-link" @click.prevent="selectedBook = 2" href="">Six of Crows</a>
            <PopUp :active="selectedBook == 1" :cb="bookCallback">
                <img class="cover" id="just-mercy" src="@/assets/JustMercy.jpg" />
                <p class="synopsis">
                    After graduating from Harvard, Bryan Stevenson heads to Alabama to defend those wrongly condemned or those not afforded proper representation. One of his first cases is that of Walter McMillian, who is sentenced to die in 1987 for the murder of an 18-year-old girl, despite evidence proving his innocence. In the years that follow, Stevenson encounters racism and legal and political maneuverings as he tirelessly fights for McMillian's life.
                </p>
            </PopUp>
            <PopUp :active="selectedBook == 2" :cb="bookCallback">
                <img class="cover" src="@/assets/SoC.jpg" />
                <p class="synopsis">
                    Six of Crows follows the adventures of six teenage criminals hired to undertake a dangerous heist, while searching for love and redemption along the way. The leader of the group is Kaz Brekker, the cunning, ruthless leader of the Dregs, one of many street gangs in the port city of Ketterdam.
                </p>
            </PopUp>
        </div>
    </div>
</template>

<script>
import PopUp from './PopUp.vue'

export default {
    name: "HomeView",
    props: ['active'],
    components: {PopUp},
    data() {
        return {
            selectedBook: 0
        }
    },
    methods: {
       bookCallback() {
           this.selectedBook = 0 
       } 
    }
}
</script>

<style>
.cover {
    height: 100%;
}

.synopsis {
    margin-left: 2rem;
    font-size: 1.5rem;
    color: #585858;
}

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
    background-color: #b7d3df;
    padding: 10px;
}

.book-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.book-link {
    font-size: 50px;
    color: white;
    background-color: #b7d3df;
    padding: 10px;
}

.book-link:hover {
    color: lightskyblue;
}
</style>