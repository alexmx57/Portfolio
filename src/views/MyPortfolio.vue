<template>



    <div class="banner">
        <div class="banner-content">
            <h1>Bienvenue sur mon PORTFOLIO</h1>
            <p>Découvrez mes meilleurs projets auquels j'ai pu participé, que ce soit en BUT MMI ou dans le cadre d'un projet personnel et compétences.</p>
            <button>En savoir plus</button>
        </div>
    </div>














<div class="nav-container">
<div class="navigation">





   


  <div class="links-container" ref="linksContainer">
      <router-link active-class="active"
        class="link"
        :to="'/portfolio/tous'"
        @click="moveBorder($event)"
      >
        <p>Tous</p>
      </router-link>
      <router-link active-class="active"
        class="link"
        :to="'/portfolio/audiovisuel'"
        @click="moveBorder($event)"
      >
        <p>Audiovisuel</p>
      </router-link>
      <router-link active-class="active"
        class="link"
        :to="'/portfolio/graphisme'"
        @click="moveBorder($event)"
      >
        <p>Graphisme</p>
      </router-link>
      <router-link active-class="active"
        class="link"
        :to="'/portfolio/developpement-web'"
        @click="moveBorder($event)"
      >
        <p>Développement web</p>
      </router-link>
      <router-link active-class="active"
        class="link"
        :to="'/portfolio/UI-UX'"
        @click="moveBorder($event)"
      >
        <p>UI-UX</p>
      </router-link>
      <!-- Bordure animée -->
      <div class="animated-border" ref="animatedBorder"></div>
    </div>





</div>
</div>











        
       
  <transition name="router">
  <RouterView/>
  </transition>








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




.link {
  position: relative;
    padding: 0.5rem;
    text-decoration: none;
    color: inherit;
    display: flex;
    width: -webkit-fill-available;
    align-items: center;
    justify-content: center;
}

.animated-border {
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 0;
  background-color: var(--yellow-white);
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Transition fluide */
  pointer-events: none;
}

.active p{
  opacity: 1 !important;
  color:var(--yellow-white);
 
}

.link p {
  font-family: 'Roboto Flex';
  letter-spacing: -0.5px;
  font-weight: var(--font-weight-bold);
  transition: 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  margin:1vw; 
  text-wrap: nowrap; 
  opacity: 0.7;
}

.link p:hover {
  opacity: 1;
  color:var(--yellow-white);

}

.link:hover{
  background: rgb(90,106,121,0.1);
}

.nav-container{
    display: flex;
    justify-content: center;
    margin-top: 4rem;
}

.navigation .links-container{
  width: 100%;
    display: flex;
    position: relative;
}

.search-container{
    display: flex;
    align-items: center;
    gap:1vw;
}

.navigation{
    margin:auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    gap:2vw;
    overflow: hidden;
    border-bottom: var(--light-gray-border);
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
            uiux: false,
            activeLink: null,
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
        this.updateBorderOnMount();
    },
    methods: {
        moveBorder(event) {
      // Récupérer l'élément survolé
      const target = event.currentTarget;
      const border = this.$refs.animatedBorder;

      // Obtenir la position et la largeur de l'élément
      const { offsetLeft, offsetWidth } = target;

      // Appliquer la position et la largeur à la bordure
      border.style.left = `${offsetLeft}px`;
      border.style.width = `${offsetWidth}px`;
    },
    updateBorderOnMount() {
        // Trouver le lien correspondant au chemin actuel
        const activeRoute = this.$route.path;
        const linksContainer = this.$refs.linksContainer;
        if (linksContainer) {
            const links = linksContainer.querySelectorAll('.link');
            links.forEach((link) => {
                if (link.getAttribute('href') === activeRoute) {
                    const event = { currentTarget: link }; // Simuler un événement
                    this.moveBorder(event); // Déplacer la bordure
                }
            });
        }
    },
    normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  },

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
