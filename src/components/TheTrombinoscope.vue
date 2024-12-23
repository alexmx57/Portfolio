<template>




<div class="nav-container">
<div class="navigation">





   


  <div class="links-container"> 
    
    
    <router-link class="link" to="/portfolio/tous">
   <p>Tous</p>
</router-link>




    <router-link class="link" to="/portfolio/audiovisuel">
   <p>Audiovisuel</p>
</router-link>


  


<router-link class="link" to="/portfolio/graphisme">
   <p>Graphisme</p>
</router-link>




<router-link class="link" to="/portfolio/developpement-web">
    <p>Développement web</p>
</router-link>




<router-link class="link" to="/portfolio/ui-ux">
  <p>UI-UX</p>
</router-link>
</div>




<div class="search-container">
    <label for="project-search"></label>
    <input 
        type="text" 
        placeholder="Rechercher un projet" 
        id="project-search" 
        v-model="searchQuery" 
    />
</div>



</div>
</div>










  <div class="trombinoscope-container">




    <div class="section-details">
    <h3>{{ Title }}</h3>

<div class="projectCounter"><span class="span">Tous les projets ({{ numberOfProject }})</span></div>





<div class="select-container">


  <select id="sort" v-model="sortOption">
  <option value="none" selected>Pas de tri par ordre alphabétique</option>
  <option value="a-z">Trier par ordre alphabétique (A-Z)</option>
  <option value="z-a">Trier par ordre alphabétique (Z-A)</option>
</select>

<select id="sort-date" v-model="sortDateOption">
  <option value="none" selected>Pas de tri par date</option>
  <option value="3-months">Derniers 3 mois</option>
  <option value="6-months">Derniers 6 mois</option>
  <option value="1-year">Dernière année</option>
  <option value="2-years">Derniers 2 ans</option>
</select>

<select id="sort-order" v-model="sortOrderOption">
  <option value="none" selected>Pas de tri par ordre chronologique</option>
  <option value="chronological">Trier par ordre chronologique</option>
  <option value="reverse-chronological">Trier par ordre antichronologique</option>
</select>


</div>
</div>    
    
    
    <Transition mode="out-in" name="banner-appear">
<h2 v-if="sortedProjects.length === 0" class="no-projects-message">
      Aucun projet trouvé correspondant aux critères.
    </h2>
    </Transition>

    
    <TransitionGroup mode="out-in" name="list" tag="div" class="trombinoscope">
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
            <div class="right-banner">
            <span class="date span">{{project.date}}</span>
            <div class="skills"><img loading="lazy" v-for="skill in project.skills"  :src="'/img/pictogramme/competences/'+skill" :key="skill" :alt="`Skill: ${skill}`" class="skill-image" /></div>
          </div>
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
    numberOfProject: this.projects.length,
    visibleProjectId: null,
    sortByAlphabet: false,
    sortOption: 'none',
    sortDateOption: 'none',
    sortOrderOption: 'none',
    searchQuery: '',
  };
},
computed: {
  sortedProjects() {
    let sorted = [...this.projects];

    // Filtrer par recherche
    if (this.searchQuery) {
      const query = this.normalizeString(this.searchQuery.toLowerCase());
      sorted = sorted.filter(project =>
        this.normalizeString(project.nom.toLowerCase()).includes(query) ||
        this.normalizeString(project.description.toLowerCase()).includes(query)
      );
    }

    // Trier par ordre alphabétique basé sur le titre (nom)
    if (this.sortOption === 'a-z') {
      sorted.sort((a, b) => a.nom.localeCompare(b.nom));
    } else if (this.sortOption === 'z-a') {
      sorted.sort((a, b) => b.nom.localeCompare(a.nom));
    }

    // Filtrer par date
    const now = new Date();
    if (this.sortDateOption === '3-months') {
      sorted = sorted.filter(project => 
        (now - new Date(project.date)) / (1000 * 60 * 60 * 24) <= 90
      );
    } else if (this.sortDateOption === '6-months') {
      sorted = sorted.filter(project => 
        (now - new Date(project.date)) / (1000 * 60 * 60 * 24) <= 180
      );
    } else if (this.sortDateOption === '1-year') {
      sorted = sorted.filter(project => 
        (now - new Date(project.date)) / (1000 * 60 * 60 * 24) <= 365
      );
    } else if (this.sortDateOption === '2-years') {
      sorted = sorted.filter(project => 
        (now - new Date(project.date)) / (1000 * 60 * 60 * 24) <= 730
      );
    }

    // Trier par ordre chronologique
    if (this.sortOrderOption === 'chronological') {
      sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (this.sortOrderOption === 'reverse-chronological') {
      sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    return sorted;
  },
},
  mounted() {
    this.addHoverEffect();
  },
  methods: {
    normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  },
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
            overlay.style.background = 'linear-gradient(180deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75 ))';
            overlay.style.pointerEvents = 'none';
            overlay.style.transition = 'opacity 0.85s ease-in-out';
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
  transition: all 0.75s cubic-bezier(0.23, 1, 0.320, 1);
}

.text-appear-enter-from,
.text-appear-leave-to {
  opacity: 0;
  transform: translateX(50vh);
}














.banner-appear-enter-active,
.banner-appear-leave-active {
  transition: all 1s cubic-bezier(0.23, 1, 0.320, 1);
}

.banner-appear-enter-from,
.banner-appear-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}





.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.25) translateY(20px);
}

.list-move {
  transition: transform 0.75s cubic-bezier(0.785, 0.135, 0.15, 0.86);
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

.trombinoscope-container{
  display: flex;
  flex-direction: column;
}

h2{
  text-align: center;
  margin:15rem 0;
}

.skills{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap:0.75rem;
  margin-top: 4px;
}

.skill-image{
  width:25px;
}

.select-container{
  display: flex;
  flex-wrap: wrap;
  gap:3rem;
}

.right-banner{
  padding:10px;
  text-align: right;
}

.select-container{
  margin:2rem 0;
}

.section-details{
  margin: 2rem 8vw;
}

.project-description,.projectButton{
  z-index:100;
}

.trombinoscope {
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  width: 100%;
  justify-content: center;
  padding:0 0.4rem
}


.project {
    transition:0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    min-width: 40rem;
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
  font-weight:var(--font-weight-bold);
  text-align: center;
  padding:16rem 4rem;
  position: absolute;
  text-transform: uppercase;
  font-family: Advent Pro !important;
}




.project:hover {
  z-index: 1000;
  transform: scale(1.1);
}



.project .project-name{
  font-size: 2rem;
  transition: 0.2s ease-in;
  padding:1.5rem;
}

.project .project-banner{
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(6px);
  height: fit-content;
  display: flex;
  justify-content: space-between;
  border-bottom: var(--light-gray-border);
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
  