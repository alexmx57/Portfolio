<template>



    <div class="banner">
        <div class="banner-content">
            <h1>Bienvenue sur mon PORTFOLIO</h1>
            <p>Découvrez mes projets et compétences.</p>
            <button>En savoir plus</button>
        </div>
    </div>



    <div class="nav">




        <nav class="secondary-nav">









            <router-link @click="updateActivityState('audiovisuel')" class="router-link" active-class="active-link" to="/portfolio/audiovisuel">
    <div class="card-container">
        <img src="/img/pictogramme/audiovisuel.png">
        <h4>Audiovisuel</h4>
        <transition><button v-if="audiovisuel">Découvrir</button></transition>
    </div>
    <p id="level">Level</p>
</router-link>





<router-link @click="updateActivityState('graphisme')" class="router-link" active-class="active-link" to="/portfolio/graphisme">
    <div class="card-container">
        <img src="/img/pictogramme/graphisme.png">
        <h4>Graphisme</h4>
        <transition><button v-if="graphisme">Découvrir</button></transition>
    </div>
    <p id="level">Level</p>
</router-link>




<router-link @click="updateActivityState('devWeb')" class="router-link" active-class="active-link" to="/portfolio/developpement-web">
    <div class="card-container">
        <img src="/img/pictogramme/devWeb.webp">
        <h4>Développement Web</h4>
        <transition><button v-if="devWeb">Découvrir</button></transition>
    </div>
    <p id="level">Level</p>
</router-link>




<router-link @click="updateActivityState('uiux')" class="router-link" active-class="active-link" to="/portfolio/UI-UX">
    <div class="card-container">
        <img src="/img/pictogramme/ux-design.svg">
        <h4>UI/UX</h4>
        <transition><button v-if="uiux">Découvrir</button></transition>
    </div>
    <p id="level">Level</p>
</router-link>




        </nav>






        <div class="content">
            <router-view></router-view>
        </div>




    </div>
</template>







<style scoped>

#level{
    font-size: 1.1rem;
    font-weight: 200;
    color: rgb(127, 127, 127);
    align-self: end;
    position: absolute;
    right: 20px;
    bottom: 15px;
}

.v-enter-active,
.v-leave-active {
    transition: all 0.25s cubic-bezier(0.23, 1, 0.320, 1);
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}

.nav{
    position: relative;
    bottom: 90px;
}


.router-link {
    background: none;
    border: 1px solid var(--gray);
    border-radius: 20px;
    padding: 3rem;
    text-align: center;
    min-width: 200px;
    transition: 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    transform: translateY(30px);
    background: var(--light-blue);
}

.active-link {
    background-color: var(--footer-header_bck);
    border-radius: 20px;
    box-shadow: inset 0px 0px 2px 5px var(--yellow-white), 0px 0px 2px 4px var(--gray);
    border: 2px solid var(--gray);
    transform: none;
    position: relative;
}

.active-link h4 {
    font-weight: 900;
    text-decoration: underline;
}

.secondary-nav {
    display: flex;
    gap: 45px;
    justify-content: center;
    margin-bottom: 250px;
}

.card-container h4 {
    margin-top: 10px;
    margin-bottom: 20px;
}

.card-container img {
    max-width: 75px;
    filter: invert(1);
}







.banner {
    width: 100%;
    min-height: 60rem;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(/public/img/banniere.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
    color: white;
    box-shadow: -5px 3px 15px black;
}


.banner-content {
    max-width: 800px;
    margin: 0 auto;
}

.banner-content p {
    margin-top: 35px;
    margin-bottom: 55px;
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
    },
    mounted() {
        const storedState = JSON.parse(localStorage.getItem('activityState'));
        if (storedState) {
            this.audiovisuel = storedState.audiovisuel;
            this.graphisme = storedState.graphisme;
            this.devWeb = storedState.devWeb;
            this.uiux = storedState.uiux;
        }
    },
    methods: {
        updateActivityState(activity) {
            this.audiovisuel = false;
            this.graphisme = false;
            this.devWeb = false;
            this.uiux = false;
            
            this[activity] = true;

            localStorage.setItem('activityState', JSON.stringify({
                audiovisuel: this.audiovisuel,
                graphisme: this.graphisme,
                devWeb: this.devWeb,
                uiux: this.uiux
            }));
        }
    }
}


</script>
