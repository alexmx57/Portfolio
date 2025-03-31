<template>







  <div class="trombinoscope-container">




    <div class="section-details">



<div class="info-grid_layout">
  <div class="title-counter">
    <h3>{{ Title }}</h3>
    <div class="projectCounter">
    <span class="span">Tous les projets ({{ numberOfProject }}) | Projets conservés ({{ filteredProjectsCount }})</span>
   </div>
  </div>
  <div class="grid-layout">
  <img
    v-for="(icon, index) in icons"
    :key="index"
    :class="{'active': activeIndex === index, 'inactive': activeIndex !== index}"
    @click="changeGrid(index)"
    :id="`icon-${index}`"
    class="grid-icon"
    :src="icon.src"
    :alt="icon.alt"
  />
 </div>
</div>





<div class="filter-container">


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

<button @click="resetFilters">Réintialiser</button>



</div>






<div class="search-container">
  <label for="project-search">
    <input
      type="text"
      placeholder="Rechercher un projet"
      id="project-search"
      v-model="searchQuery"
    >
    <Transition mode="out-in" name="cross">
      <div v-if="searchQuery">
    <span
      
      class="clear-icon"
      @click="clearSearch"
    >
      ✖
    </span>
  </div>
  </Transition>
  </label>
</div>







</div>
</div>    
    
    






<Transition mode="out-in" name="banner-appear">
  <div>
    <h2 v-if="sortedProjects.length === 0" class="no-projects-message">
      Aucun projet trouvé correspondant aux critères.
    </h2>
  </div>
</Transition>
    




 <!-- <span class="date span">{{project.date}}</span>
            <div class="skills"><img loading="lazy" v-for="skill in project.skills"  :src="'/img/pictogramme/competences/'+skill" :key="`skill-${skill}`" :alt="`Skill: ${skill}`" class="skill-image" /></div> -->


    <TransitionGroup :style="{gridTemplateColumns:grid}" mode="out-in" name="list" tag="div" class="trombinoscope">
      <router-link
        v-for="(project, index) in sortedProjects"
        :to="`${baseRoute}/${project.nom.toLowerCase().replace(/ /g, '-')}`" 
        :key="project.id"
        :style="{ backgroundImage: `url(${project.background})`, width: activeIndex === 0 ? '50vw' : activeIndex === 1 ? '40vw' : activeIndex === 2 ? '31vw' : '23vw',
        height: activeIndex === 0 ? '50vw' : activeIndex === 1 ? '40vw' : activeIndex === 2 ? '31vw' : '23vw' }"
        class="project"
      >
      <Transition mode="out-in" name="banner-appear">
  <div class="project-banner">
    <h3 class="project-name">{{ project.nom }}</h3>
    <div class="right-banner">
      <h1 class="project-number">{{ index + 1 }}</h1>
    </div>
  </div> 
</Transition>
      </router-link>
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
    },
    banner:{
      type:String
    }
  },
  data() {
  return {
    icons: [
        { src: "/img/pictogramme/grid1.png", alt: "grid-icon-1", grid: "repeat(1, auto)" },
        { src: "/img/pictogramme/grid2.png", alt: "grid-icon-2", grid: "repeat(2, auto)" },
        { src: "/img/pictogramme/grid3.png", alt: "grid-icon-3", grid: "repeat(3, auto)" },
        { src: "/img/pictogramme/grid4.png", alt: "grid-icon-4", grid: "repeat(4, auto)" },
      ],
    grid: "repeat(3, auto)",
    activeIndex: 2, 
    numberOfProject: this.projects.length,
    visibleProjectId: null,
    sortByAlphabet: false,
    sortOption: 'none',
    sortDateOption: 'none',
    sortOrderOption: 'none',
    searchQuery: '',
  };
},
created(){
  // Récupérer les valeurs depuis le localStorage au chargement de la page
  const savedIndex = localStorage.getItem("activeIndex");
    const savedGrid = localStorage.getItem("grid");

    if (savedIndex !== null) {
      this.activeIndex = parseInt(savedIndex, 10); // Convertir en entier
    }
    if (savedGrid) {
      this.grid = savedGrid;
    }
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
  filteredProjectsCount() {
    return this.sortedProjects.length;
  },
},
  mounted() {
    this.loadFiltersFromStorage();
  },
  methods: {
  resizeProject(){

  },
    changeGrid(index) {
      this.activeIndex = index;
      this.grid = this.icons[index].grid;

      // Sauvegarder dans le localStorage
      localStorage.setItem("activeIndex", index);
      localStorage.setItem("grid", this.grid);
    },
    clearSearch() {
    this.searchQuery = '';
  },
    normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  },
    toggleSort() {
      this.sortByAlphabet = !this.sortByAlphabet;
    },
    resetFilters() {
    this.sortOption = 'none';
    this.sortDateOption = 'none';
    this.sortOrderOption = 'none';
    this.searchQuery = '';
    this.saveFiltersToStorage();
  },
  saveFiltersToStorage() {
      const filters = {
        sortOption: this.sortOption,
        sortDateOption: this.sortDateOption,
        sortOrderOption: this.sortOrderOption,
        searchQuery: this.searchQuery,
      };
      localStorage.setItem('projectFilters', JSON.stringify(filters));
    },
    loadFiltersFromStorage() {
      const filters = JSON.parse(localStorage.getItem('projectFilters'));
      if (filters) {
        this.sortOption = filters.sortOption || 'none';
        this.sortDateOption = filters.sortDateOption || 'none';
        this.sortOrderOption = filters.sortOrderOption || 'none';
        this.searchQuery = filters.searchQuery || '';
      }
    },
    
  },
  watch: {
    sortOption() {
      this.saveFiltersToStorage();
    },
    sortDateOption() {
      this.saveFiltersToStorage();
    },
    sortOrderOption() {
      this.saveFiltersToStorage();
    },
    searchQuery() {
      this.saveFiltersToStorage();
    },
  },
  
};
</script>
  
























  <style scoped>

/* CSS TRANSITION */

.banner-appear-enter-active,
.banner-appear-leave-active {
  transition: all 1s cubic-bezier(0.23, 1, 0.320, 1);
}

.banner-appear-enter-from,
.banner-appear-leave-to {
  opacity: 0;
  transform: translateY(100px);
}

.cross-enter-active,
.cross-leave-active {
  transition: all 0.55s cubic-bezier(0.23, 1, 0.320, 1);
}

.cross-enter-from,
.cross-leave-to {
  opacity: 0;
  transform:translateX(20px) rotate(25deg) !important;
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

/* CSS TRANSITION */


.grid-icon {
  opacity: 0.5;
  transition: opacity 0.3s;
}

.grid-icon.active {
  opacity: 1;
}

.grid-icon.inactive {
  opacity: 0.35;
}

.grid-icon.inactive:hover {
  opacity: 0.7;
}

.grid-icon{
  width:2rem;
  height:2rem;
}

.info-grid_layout{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.favorite-icon{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    font-size:4rem;
}

.banner-section {
    color: #333;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 8px 8px 0 0;
    margin-bottom: 1rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    min-height: 15rem;
    background-repeat: no-repeat;
    background-size: 115%;
    background-position: center;
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
  width:2rem;
  height:2rem;
}

.date{
  text-wrap: nowrap;
}

.select-container{
  display: flex;
  flex-wrap: wrap;
  gap:2rem;
}

.filter-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.right-banner{
  padding:0.5vw;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.select-container{
  margin:1rem 0;
}

.section-details{
  margin: 2.5rem auto;
  width: 97.5%;
  position: relative;
  background: var(--footer-header_bck);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 15px 1px #ffffff0f;
}

.trombinoscope {
    display: grid;
    grid-template-columns: repeat(3,auto);
    width: 100%;
    gap: 1.5vw;
    margin-bottom: 5rem;
    justify-content: center;
}

.project {
    transition:0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    width: 40rem;
    height: 40rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position:relative;
    display:grid;
    overflow: hidden;
    box-shadow: rgba(255, 255, 255, 0.2) 0 0 15px;
}

.project:hover{
  box-shadow: rgba(255, 255, 255, 0.4) 0 0 15px 3px;
}

.project .project-name{
  font-size: 3rem;
  width:60%;
  font-weight: 900;
}

.project .project-banner{
    background: var(--hard-blue);
    padding:.5vw 1vw;
    height: 8vw;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    right: 0;
    box-shadow: -1px -1px 10px 1px rgb(255,255,255,0.3);
    border-top:1px solid rgba(0, 0, 0, 0.5);
}

.project-number{
  font-family: var(--font-number-title-outlined);
}

.project:hover .project-number{
  font-family: var(--font-number-title);
}

.project-banner,.project-name,.project-number{
  transition: 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

.project:hover .project-name{
  color:var(--black);
}

.project:hover .project-banner{
  background: var(--yellow-white);
}

.project .projectButton{
  position:absolute;
  bottom:3rem;
  right:3rem;
}

label{
  background: var(--yellow-white);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px 5px 0 0;
}

.search-container {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1vw;
}

.search-container input {
  padding-right: 2rem; 
}

.clear-icon {
  position: absolute;
    right: 1rem;
    cursor: pointer;
    font-size: 1.6rem;
    transform: translateY(-1.3rem);
    color: #666;
    transition: color 0.3s;
}

.clear-icon:hover {
  color: #000;
}

.grid-layout{
  display: flex;
  gap:2rem;
  justify-content: center;
  align-items: center;
}





















@media (max-width: 800px) {
.project-name{
  font-size: 1.1rem !important;
}
}

@media (max-width:1024px) {
  .trombinoscope{
    gap:1px;
  }
}



</style>








