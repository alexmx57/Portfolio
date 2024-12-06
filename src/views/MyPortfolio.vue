<template>
    <div>
        <div>
            <h1>Mon Portfolio</h1>




            <nav class="secondary-nav">





                <router-link @click="audiovisuel = !audiovisuel; graphisme = false; devWeb = false; uiux = false"
                    active-class="active-link" to="/portfolio/audiovisuel">
                    <div class="card-container">
                        <img src="/img/pictogramme/audiovisuel.png">
                        <h4>Audiovisuel</h4>
                        <button v-if="audiovisuel">Découvrir</button>
                    </div>
                </router-link>






                <router-link @click="graphisme = !graphisme; audiovisuel = false; devWeb = false; uiux = false"
                    active-class="active-link" to="/portfolio/graphisme">
                    <div class="card-container">
                        <img src="/img/pictogramme/graphisme.png">
                        <h4>Graphisme</h4>
                        <button v-if="graphisme">Découvrir</button>
                    </div>
                </router-link>






                <router-link @click="devWeb = !devWeb; graphisme = false; audiovisuel = false; uiux = false"
                    active-class="active-link" to="/portfolio/developpementWeb">
                    <div class="card-container">
                        <img src="/img/pictogramme/devWeb.webp">
                        <h4>Développement Web</h4>
                        <button v-if="devWeb">Découvrir</button>
                    </div>
                </router-link>






                <router-link @click="uiux = !uiux; graphisme = false; devWeb = false; audiovisuel = false"
                    active-class="active-link" to="/portfolio/uiux">
                    <div class="card-container">
                        <img src="/img/pictogramme/ux-design.svg">
                        <h4>UI/UX</h4>
                        <button v-if="uiux">Découvrir</button>
                    </div>
                </router-link>




            </nav>





            
            <div class="content">


                <router-view></router-view>



            </div>




        </div>


    </div>
</template>




<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.75s cubic-bezier(0.23, 1, 0.320, 1);
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;

}

.active-link {
    font-weight: 900;
    text-decoration: underline;
    background-color: var(--footer-header_bck);
    border-radius: 20px;
    box-shadow: inset 0px 0px 8px 5px var(--yellow-white), 0px 0px 6px 0px white;
    border: 2px solid var(--gray);
}

.secondary-nav {
    display: flex;
    gap: 4rem;
    justify-content: center;
}

.card-container h4 {
    margin-top: 10px;
    margin-bottom: 20px;
}

.card-container {
    background: none;
    border: 1px solid var(--gray);
    border-radius: 20px;
    padding: 3rem;
    text-align: center;
    min-width: 20rem;
    transition: 1s ease-in;
}

.card-container img {
    max-width: 75px;
    filter: invert(1);
}
</style>





<script>

export default {
    name: "MyPortfolio",
    data() {
        return {
            audiovisuel: false,
            graphisme: false,
            devWeb: false,
            uiux: false
        }
    }
}


</script>
