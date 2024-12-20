<template>
  <div class="trombinoscope-container">
    <h3>{{ Title }}</h3>

<div class="projectCounter"><span class="span">Tous les projets ({{ numberOfProject }})</span></div>


<div class="select-container">
    <select id="sort">
      <option value="true">Trier par ordre alphabétique (Oui)</option>
      <option value="false">Trier par ordre alphabétique (Non)</option>
    </select>

    <select id="sort-date">
      <option value="true">Trier par date (Oui)</option>
      <option value="false">Trier par date (Non)</option>
    </select>

    <select id="sort-order">
      <option value="true">Ordre chronologique (Oui)</option>
      <option value="false">Ordre chronologique (Non)</option>
    </select>
</div>    
    
    
    
    
    
    
    
    <TransitionGroup name="list" tag="div" class="trombinoscope">
      <div
        v-for="project in sortedProjects"
        :key="project.id"
        :style="{ backgroundImage: `url(${project.background})` }"
        class="project"
        @mouseleave="visibleProjectId = null"
        @mouseover="setHover(project.id)"
        :class="{ 'project-hover': visibleProjectId === project.id }"
      >
        <Transition mode="out-in" name="banner-appear">
          <div v-if="visibleProjectId !== project.id" class="project-banner">
            <h3 class="project-name">{{ project.nom }}</h3>
          </div>
        </Transition>
        <Transition mode="out-in" name="text-appear">
          <p v-if="visibleProjectId === project.id" class="project-description">{{ project.description }}</p>
        </Transition>
        <RouterLink :to="`${baseRoute}/${project.nom.toLowerCase()}`">
          <button class="projectButton">Voir les détails</button>
        </RouterLink>
      </div>
    </TransitionGroup>
  </div>
</template>

















<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
    Title:{
type:String,
required:true
    },
    baseRoute: {
      type: String,
      default: '/portfolio/audiovisuel',
    },
  },
  data() {
    return {
      numberOfProject:this.projects.length,
      visibleProjectId: null,
      sortByAlphabet: false,
    };
  },
  computed: {
    sortedProjects() {
      if (this.sortByAlphabet) {
        return [...this.projects].sort((a, b) => a.nom.localeCompare(b.nom));
      }
      return this.projects;
    },
  },
  mounted() {
    // Ajouter les événements de survol
    this.addHoverEffect();
  },
  methods: {
    toggleSort() {
      this.sortByAlphabet = !this.sortByAlphabet;
    },
    setHover(projectId) {
      this.visibleProjectId = projectId;
    },
    addHoverEffect() {
      const projectElements = document.querySelectorAll('.project');
      projectElements.forEach((project) => {
        project.addEventListener('mouseover', () => {
          project.style.position = 'relative';

          if (!project.querySelector('.overlay')) {
            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            overlay.style.position = 'absolute';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.background = 'linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6 ))';
            overlay.style.pointerEvents = 'none';
            overlay.style.transition = 'opacity 0.3s ease-in-out';
            overlay.style.opacity = '1';
            project.appendChild(overlay);
          }
        });

        project.addEventListener('mouseleave', () => {
          const overlay = project.querySelector('.overlay');
          if (overlay) {
            project.removeChild(overlay);
          }
        });
      });
    },
  },
};
</script>
  
























  <style scoped>
 .text-appear-enter-active,
.text-appear-leave-active {
  transition: all 0.35s cubic-bezier(0.23, 1, 0.320, 1);
}

.text-appear-enter-from,
.text-appear-leave-to {
  opacity: 0;
  transform: translateX(10vh);
}






.banner-appear-enter-active,
.banner-appear-leave-active {
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}

.banner-appear-enter-from,
.banner-appear-leave-to {
  opacity: 0;
  transform: translateY(-50px) scale(0.95);
}


/* 
.list-enter-active,
.list-leave-active {
    transition: all 0.25s cubic-bezier(0.77, 0, 0.175, 1);
}

.list-enter,
.list-leave-to {
    opacity: 0;
    transform: scale(0.1) translateY(-20px);
} */


.project-description,.projectButton{
  z-index:10000;
}

select{
  margin:4rem 1rem;
}

.trombinoscope {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  color: black !important;
}


.project {
    transition:0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    flex-basis: 40rem;
    min-height: 40rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position:relative;
    display:grid;
    border:var(--light-gray-border);
    overflow: hidden;
}




.project .project-description{
  color:var(--white);
  font-weight:700;
  padding:16rem 4rem;
  text-align: center;
  position: absolute;
}




.project:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px 1px var(--yellow-white);
}



.project .project-name{
  font-size: 2rem;
  transition: 0.2s ease-in;
}

.project .project-banner{
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
  height: fit-content;
  padding:1.25vw 1vw;
}

.project:hover .project-name{
  text-decoration: underline;
  font-weight: var(--font-weight-black);
}

.project .projectButton{
  position:absolute;
  bottom:3rem;
  right:3rem;
}





  </style>
  