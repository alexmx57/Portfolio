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











        
       
  <transition mode="out-in" :name="transitionDirection === 'forward' ? 'slide-left' : 'slide-right'">
    <RouterView/>
  </transition>








</template>







<style scoped>

/* .router-enter-active,
.router-leave-active {
  transition: 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.router-enter-from,
.router-leave-to {
  opacity: 0;
  transform: translateY(50px) scale(0.8);
} */

.slide-left-enter-active,
.slide-right-enter-active,
.slide-left-leave-active,
.slide-right-leave-active {
  transition: all 0.75s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.slide-left-enter-from,
.slide-right-leave-to {
  transform: translateX(100%)  rotateX(30deg) rotateY(10deg);
  opacity: 0;
}

.slide-left-leave-to,
.slide-right-enter-from {
  transform: translateX(-100%) rotateX(30deg) rotateY(10deg);
  opacity: 0;
}

.slide-left-enter-to,
.slide-right-enter-to,
.slide-left-leave-from,
.slide-right-leave-from {
  transform: translateX(0);
  opacity: 1;
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

.link:hover p {
  opacity: 1;
  color:var(--yellow-white);

}

.link:hover{
  background: var(--gray-hover);
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
    min-height: 50rem;
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
    margin-top: 15px;
    margin-bottom: 35px;
    padding:0 15rem;
}


</style>








<script>

export default {
    name: "Portfolio",
    data() {
        return {
            activeLink: null,
            transitionDirection: 'forward',
            previousRouteIndex: null,
        }
    },
    watch: {
        $route(to, from) {
            const routesOrder = [
                '/portfolio/tous',
                '/portfolio/audiovisuel',
                '/portfolio/graphisme',
                '/portfolio/developpement-web',
                '/portfolio/UI-UX',
            ];
            const toIndex = routesOrder.indexOf(to.path);
            const fromIndex = routesOrder.indexOf(from.path);

            this.transitionDirection = toIndex > fromIndex ? 'forward' : 'backward';
            this.previousRouteIndex = toIndex;
        },
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
    }
}


</script>
