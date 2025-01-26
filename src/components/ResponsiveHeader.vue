<template>
    <div class="responsive-header">
      <div class="responsive-header-container">
        <div class="links-container" ref="linksContainer">
          <RouterLink
            v-for="(route, index) in routes"
            :key="index"
            active-class="active-link"
            class="link"
            :class="{ active: $route.path === route.path }"
            :to="route.path"
            @click="handleClick($event, route.path)"
          >
            <img class="pictogramme" :src="route.icon" :alt="`${route.name} icon`" />
            <p>{{ route.name }}</p>
          </RouterLink>
          <div class="animated-border" ref="animatedBorder"></div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .responsive-header-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    position: fixed;
    bottom: 0;
    background: var(--footer-header_bck);
    backdrop-filter: blur(8px);
    z-index: 10000000000000000000000000000;
  }
  
  .links-container {
    display: flex;
    position: relative;
    width: 100%;
    padding: 4px 0;
  }
  
  .link {
    position: relative;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    opacity: 0.5;
    width: 100%;
    padding: 0.5rem 0;
    transition: color 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
  
  .animated-border {
  position: absolute;
  top: 0; /* Place la bordure en haut au lieu du bas */
  height: 2px;
  width: 0;
  background-color: var(--yellow-white);
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  pointer-events: none;
  z-index: 10; /* S'assure que la bordure est au-dessus des autres éléments */
}
  
  .link.active {
    opacity: 1;
  }
  
  .link.active p {
    color: var(--yellow-white);
  }
  
  .link p {
    font-size: 1rem;
    font-weight: var(--font-weight-black);
    transition: opacity 0.3s ease-in-out;
  }
  
  .pictogramme {
    width: 2.25rem;
    height: 2.25rem;
    filter: invert(0.9);
  }
  
  .link:hover p {
    opacity: 1;
    color: var(--yellow-white);
  }
  </style>
  
  <script>
  export default {
    data() {
      return {
        routes: [
          { name: "À propos", path: "/a-propos", icon: "/img/pictogramme/header/aPropos.svg" },
          { name: "Compétences", path: "/competences", icon: "/img/pictogramme/header/stars.svg" },
          { name: "Accueil", path: "/", icon: "/img/pictogramme/header/home.svg" },
          { name: "Portfolio", path: "/portfolio/tous", icon: "/img/pictogramme/header/portfolio.png" },
          { name: "Contact", path: "/contact", icon: "/img/pictogramme/header/contact.svg" },
        ],
      };
    },
    watch: {
  '$route.path': {
    immediate: true, // Exécuter immédiatement au montage
    handler() {
      this.updateBorderOnMount();
    }
  }
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
  updateBorderOnMount() {
  this.$nextTick(() => {
    const activeRoute = this.$route.path;
    const linksContainer = this.$refs.linksContainer;
    if (linksContainer) {
      const links = linksContainer.querySelectorAll(".link");
      links.forEach((link) => {
        if (link.getAttribute("href") === activeRoute || link.pathname === activeRoute) {
          this.moveBorder({ currentTarget: link });
        }
      });
    }
  });
}
},
    mounted() {
      this.updateBorderOnMount();
    },
  };
  </script>
  