<template>
  <div>
    <!-- Bannière -->
    <div class="banner">
      <div class="banner-content">
        <h1>Bienvenue sur mon PORTFOLIO</h1>
        <p>
          Découvrez mes meilleurs projets auquels j'ai pu participé, que ce soit
          en BUT MMI ou dans le cadre d'un projet personnel et compétences.
        </p>
        <button>En savoir plus</button>
      </div>
    </div>

 
    <div class="nav-container">
      <div class="navigation">
        <div class="links-container" ref="linksContainer">
          <router-link
  v-for="(route, index) in routes"
  :key="index"
  active-class="active"
  class="link"
  :class="{ active: $route.path === route.path }"
  :to="route.path"
  @click="handleClick($event, route.path)"
>
  <img :src="getPictogram(route.name)" :alt="`${route.name} icon`" class="pictogram" />
  <p>{{ route.name }}</p>
</router-link>
  <div class="animated-border" ref="animatedBorder"></div>
</div>
      </div>
    </div>

    <transition
      mode="out-in"
      :name="transitionDirection === 'forward' ? 'slide-left' : 'slide-right'"
    >
      <RouterView />
    </transition>
  
</div>
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
  transition: all 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
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
  padding: 0.5rem 0.1rem;
  text-decoration: none;
  color: inherit;
  display: flex;
  width: -webkit-fill-available;
  align-items: center;
  justify-content: center;
  transition: color 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), background 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
  font-family: var(--font-title);
  letter-spacing: -0.5px;
  font-size: 1.5rem;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
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

.pictogram{
  max-width: 2rem;
  filter:invert(0.9);
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;
}

.link.active .pictogram {
  opacity: 1;
}

.banner-content {
    max-width: 800px;
    margin: 0 auto;
}

.banner-content p {
  text-align: center;
    max-width: 430px;
    margin: 15px auto 35px auto;
}



@media screen and (max-width: 800px) {
  .navigation .link  p{
    font-size:1rem ;
  }
}

@media screen and (max-width: 505px) {
  .link{
    flex-direction: column;
  }
}

@media screen and (max-width: 400px) {
  .navigation .link p{
    font-size: 0.75rem;
  }
}





</style>






<script>
export default {
  name: "Portfolio",
  data() {
    return {
      routes: [
        { name: "Tous", path: "/portfolio/tous" },
        { name: "Audiovisuel", path: "/portfolio/audiovisuel" },
        { name: "Graphisme", path: "/portfolio/graphisme" },
        { name: "Développement web", path: "/portfolio/developpement-web" },
        { name: "UI-UX", path: "/portfolio/UI-UX" },
      ],
      transitionDirection: "forward",
    };
  },
  watch: {
    $route(to, from) {
      const routesOrder = this.routes.map((route) => route.path);
      const toIndex = routesOrder.indexOf(to.path);
      const fromIndex = routesOrder.indexOf(from.path);

      this.transitionDirection = toIndex > fromIndex ? "forward" : "backward";
    },
  },
  methods: {
    handleClick(event, path) {
    this.moveBorder(event);
    this.$router.push(path);
  },
  moveBorder(event) {
    const target = event.currentTarget;
    const border = this.$refs.animatedBorder;
    const { offsetLeft, offsetWidth } = target;
    border.style.left = `${offsetLeft}px`;
    border.style.width = `${offsetWidth}px`;
  },
  getPictogram(routeName) {
    const icons = {
      Tous: "/img/pictogramme/tous.png",
      Audiovisuel: "/img/pictogramme/audiovisuel.png",
      Graphisme: "/img/pictogramme/graphisme.png",
      "Développement web": "/img/pictogramme/devWeb.webp",
      "UI-UX": "/img/pictogramme/ux-design.svg",
    };
    return icons[routeName] || "/path/to/default-icon.png"; 
  },
    updateBorderOnMount() {
      const activeRoute = this.$route.path;
      const linksContainer = this.$refs.linksContainer;
      if (linksContainer) {
        const links = linksContainer.querySelectorAll(".link");
        links.forEach((link) => {
          if (link.getAttribute("href") === activeRoute) {
            const event = { currentTarget: link };
            this.moveBorder(event);
          }
        });
      }
    },
  },
  mounted() {
    this.updateBorderOnMount();
  },
};
</script>
