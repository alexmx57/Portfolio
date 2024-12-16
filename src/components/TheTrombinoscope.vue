<template>
  <div class="trombinoscope-container">
    <button @click="toggleSort">Trier par ordre alphabétique {{ sortByAlphabet ? ': Oui' : ": Non" }}</button>
    <TransitionGroup name="list" tag="div" class="trombinoscope">
      <div
        v-for="project in sortedProjects"
        :key="project.id"
        :style="{ backgroundImage: `linear-gradient(180deg, #00000000, #ffffff00), url(${project.background})` }"
        class="project"
        @mouseleave="visibleProjectId = null"
        @mouseover="visibleProjectId = project.id"
      >
        <h3 class="project-name">{{ project.nom }}</h3>
        <transition name="text-appear">
          <p v-if="visibleProjectId === project.id" class="project-description">{{ project.description }}</p>
        </transition>
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
    baseRoute: {
      type: String,
      default: '/portfolio/audiovisuel',
    },
  },
  data() {
    return {
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
  methods: {
    toggleSort() {
      this.sortByAlphabet = !this.sortByAlphabet;
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
  transform: translateX(100vh);
}

.list-move{
  transition: 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
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
    /* transition: transform .25s cubic-bezier(0.455, 0.03, 0.515, 0.955); */
    flex-basis: 40rem;
    min-height: 40rem;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position:relative;
    display:grid;
    place-items:center;
    border:var(--light-gray-border);
}




.project .project-description{
  color:black;
  font-weight:700;
  margin-top:15rem;
  padding:0 1.5rem;
}




.project:hover {
  transform: scale(1.05);
}



.project .project-name{
  position:absolute;
  top:3rem;
  left:3rem;
  transition: 0.2s ease-in;
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



.project .projectButton:active {
  transform: scale(0.95);
}
  </style>
  