<template>



    <div class="banner">
        <div class="banner-content">
            <h1>Bienvenue sur mon PORTFOLIO</h1>
            <p>Découvrez mes meilleurs projets auquels j'ai pu participé, que ce soit en BUT MMI ou dans le cadre d'un projet personnel et compétences.</p>
            <button>En savoir plus</button>
        </div>
    </div>



    <div class="nav">




        <transition-group tag="nav" class="secondary-nav">









            <router-link @click="updateActivityState('audiovisuel')" class="router-link" active-class="active-link" to="/portfolio/audiovisuel">
    <div class="card-container">
        <img src="/img/pictogramme/audiovisuel.png">
        <h4>Audiovisuel</h4>
        <transition><button v-if="audiovisuel">Découvrir</button></transition>
    </div>
    <span  class="span">Level</span>
</router-link>





<router-link @click="updateActivityState('graphisme')" class="router-link" active-class="active-link" to="/portfolio/graphisme">
    <div class="card-container">
        <img src="/img/pictogramme/graphisme.png">
        <h4>Graphisme</h4>
        <transition><button v-if="graphisme">Découvrir</button></transition>
    </div>
    <span  class="span">Level</span>
</router-link>




<router-link @click="updateActivityState('devWeb')" class="router-link" active-class="active-link" to="/portfolio/developpement-web">
    <div class="card-container">
        <img src="/img/pictogramme/devWeb.webp">
        <h4>Développement Web</h4>
        <transition><button v-if="devWeb">Découvrir</button></transition>
    </div>
    <span class="span">Level</span>
</router-link>




<router-link @click="updateActivityState('uiux')" class="router-link" active-class="active-link" to="/portfolio/UI-UX">
    <div class="card-container">
        <img src="/img/pictogramme/ux-design.svg">
        <h4>UI/UX</h4>
        <transition><button v-if="uiux">Découvrir</button></transition>
    </div>
    <span  class="span">Level</span>
</router-link>




        </transition-group>























        
         <Transition name="router">
            <RouterView></RouterView>
        </Transition>







    </div>
</template>







<style scoped>

.router-enter-active,
.router-leave-active {
  transition: 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.router-enter-from,
.router-leave-to {
  opacity: 0;
  transform: translateY(50px) scale(0.8);
}

.nav-container{
    display: flex;
    justify-content: center;
}

.navigation .links-container{
    display: flex;
    gap:4vw;
    
}

.search-container{
    display: flex;
    align-items: center;
    gap:1vw;
}

.navigation{
    margin:auto;
    background: var(--footer-header_bck);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    padding:1vw;
    border-radius: 4px;
    gap:2vw;
}

.router-link span{
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
    min-width: 20rem;
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
    margin-bottom: 100px;
}

.card-container h4 {
    margin-top: 10px;
    margin-bottom: 20px;
}

.card-container img {
    max-width: 7.5rem;
    filter: invert(1);
}







.banner {
    width: 100%;
    min-height: 60rem;
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(/public/img/banniere.png);
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
