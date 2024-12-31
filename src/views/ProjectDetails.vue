<template>




  <div v-if="project" class="project-details">


    <div class="name-description">
    <h3>{{ project?.nom }}</h3>
    <p>{{ project?.description }}</p>
    </div>






<div class="grid-section">



    <img class="visual" :src="project?.background" alt="project background" />
    <div id="section-1" class="sub-section">
      <h4>TITLE</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
         consectetur! Aspernatur temporibus iusto cum delectus! Rem mollitia et optio minus.</p>
        </div>



    <div id="section-2" class="sub-section">
      <h4>TITLE</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, consectetur! 
        Aspernatur temporibus iusto cum delectus! Rem mollitia et optio minus.</p>
      </div>




    <div id="section-3" class="sub-section">
      <h4>TITLE</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, consectetur! 
        Aspernatur temporibus iusto cum delectus! Rem mollitia et optio minus.</p>
      </div>




    <div id="section-4" class="sub-section">
      <img class="section-image" src="/img/pictogramme/header/stars.svg" alt="">
      <h4>COMPÉTENCES ASSOCIÉES</h4>
      <div class="skill-collection">
        <img class="skill-image" :alt="skill" v-for="skill in project?.skills" :key="skill" :src="'/img/pictogramme/competences/'+skill">
      </div>
        </div>




    <div id="section-5" class="sub-section">
      <h4>TITLE</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, consectetur! Aspernatur temporibus
         iusto cum delectus! Rem mollitia et optio minus.</p>
        </div>




</div>










<div class="navigation">
      <RouterLink
        v-if="prevProject"
        :to="`/portfolio/tous}/${normalizeName(prevProject.nom)}`"
      >
        <button>← Précédent : {{ prevProject.nom }}</button>
      </RouterLink>
      <RouterLink
        v-if="nextProject"
        :to="`/portfolio/tous/${normalizeName(nextProject.nom)}`"
      >
        <button>Suivant : {{ nextProject.nom }} →</button>
      </RouterLink>
    </div>





    


  </div>










  <h1 class="unfound" v-else>AUCUN PROJET TROUVÉ</h1>
  <RouterLink :to="`/portfolio/${category}`"><img class="backward-arrow" alt="Flèche de navigation" src="/img/pictogramme/arrow-left.png"></RouterLink>
</template>







<script>
export default {
  data() {
    return {
      project: null,
      prevProject: null,
      nextProject: null,
      category: this.$route.params.category,
    };
  },
  created() {
    this.updateProjectData();
  },
  watch: {
    $route: 'updateProjectData', // Observer les changements de route
  },
  methods: {
    normalizeName(name) {
      return name.toLowerCase().replace(/ /g, '-');
    },
    updateProjectData() {
      const { name } = this.$route.params;

      // Exemple de données, remplacez-le par vos données réelles
      const allProjects = [
      {
          id: 29,
          nom: 'Quantum',
          description: "Affiche campagne publicitaire contre l'étalement urbain",
          background: '/img/projet/LOGOQUANTUMBLANC.png',
          skills: ['photoshop.png'],
          date: "Juin 2024"
        },
        {
          id: 30,
          nom: 'Eh Connard !',
          description: "Affiche campagne publicitaire contre l'étalement urbain",
          background: '/img/projet/logoEhConnard.png',
          skills: ['photoshop.png'],
          date: "Janvier 2024"
        },
      {
          id: 7,
          nom: 'Mbappé',
          description: 'Affiche sur Kylian Mbappé',
          background: '/img/projet/kylian.jpg',
          skills: ['photoshop.png'],
          date: "Octobre 2024"
        },
        {
          id: 16,
          nom: 'Bande-Dessinnée',
          description: "Vidéo réalisée en cours d'Anglais pour aider les gens...",
          background: '/img/projet/digitaldetox.png',
          skills: ['animate.png']
        },
        {
          id: 1,
          nom: 'Gyökeres',
          description: "Affiche sur Viktor Gyökeres",
          background: '/img/projet/gyokeres.jpg',
          skills: ['photoshop.png'],
          date: "Novembre 2024"
        },
        {
          id: 20,
          nom: 'Site Quantum',
          description: "Site web de vente de bière",
          background: '/img/projet/quantum.png',
          date: "Juin 2024",
          skills: ['php.png', 'css.svg', 'js.svg', 'filezilla.png', 'vscode.png']
        },
        {
          id: 3,
          nom: 'Vitinha',
          description: 'Affiche sur Vitinha',
          background: '/img/projet/vitinha.jpg',
          skills: ['photoshop.png'],
          date: "Novembre 2024"
        },
        {
          id: 17,
          nom: 'Marseille.fr',
          description: 'Maquette du site web de Marseille sur axure',
          background: '/img/projet/marseille.png',
          date: "Mars 2024",
          skills: ['axure.png']
        },
        {
          id: 6,
          nom: 'Shanks',
          description: 'Affiche sur Shanks de One Piece',
          background: '/img/projet/shanks.jpg',
          skills: ['photoshop.png'],
          date: "Mars 2024"
        },
        {
          id: 26,
          nom: 'New World Symphony',
          description: 'Vidéo sur l’univers de Bob...',
          background: '/img/projet/clip.png',
          date: 'Juin 2024',
          skills: ["premierepro.png", "canva.png"]
        },
        {
          id: 4,
          nom: 'Vitinha 2.0',
          description: 'Affiche sur Vitinha',
          background: '/img/projet/vitinha2.jpg',
          skills: ['photoshop.png'],
          date: "Novembre 2024"
        },
        {
          id: 5,
          nom: 'João Neves',
          description: 'Affiche sur João Neves',
          background: '/img/projet/joaoNeves.jpg',
          skills: ['photoshop.png'],
          date: "Août 2024"
        },
        {
          id: 25,
          nom: "Scène d'épouvante",
          description: 'Vidéo épouvante réalisée avec la caméra 3D sur After Effects',
          background: '/img/projet/epouvante.png',
          date: 'Novembre 2024',
          skills: ["aftereffects.png", "photoshop.png"]
        },
        {
          id: 10,
          nom: 'Limites planétaires',
          description: 'Affiche sur les limites planétaires',
          background: '/img/projet/limitesPlanetaires.jpg',
          skills: ['illustrator.png'],
          date: "Avril 2024"
        },
        {
          id: 22,
          nom: 'Shanks Website',
          description: 'Site web consacré au personnage de Shanks dans One Piece',
          background: '/img/projet/shanksSite.png',
          date: "Avril 2024",
          skills: ['html.svg', 'css.svg', 'js.svg', 'vscode.png']
        },
        {
          id: 9,
          nom: 'JME',
          description: 'Affiche pour promouvoir la journée mondiale de l\'eau',
          background: '/img/projet/JME.jpg',
          skills: ['photoshop.png'],
          date: "Novembre 2023"
        },
        {
          id: 18,
          nom: 'AccessiWeb',
          description: "Maquette axure visant à expliquer tous les rouages de l'accessibilité sur le web",
          background: '/img/projet/accessiWeb.png',
          date: "Avril 2024",
          skills: ['axure.png']
        },
        {
          id: 13,
          nom: 'Auto-Portrait',
          description: 'Auto-Portrait',
          background: '/img/projet/autoPortrait.jpg',
          skills: ['illustrator.png'],
          date: "Novembre 2023"
        },
        {
          id: 19,
          nom: 'ErgoWeb',
          description: "Maquette axure traitant de l'ergonomie web",
          background: '/img/projet/ergoWeb.png',
          date: "Décembre 2023",
          skills: ['axure.png']
        },
        {
          id: 8,
          nom: 'Cartel',
          description: 'Affiche inspirée des cartels de la drogue sud-américains',
          background: '/img/projet/cartel.jpg',
          skills: ['photoshop.png'],
          date: "Octobre 2024"
        },
        {
          id: 12,
          nom: 'Cerf de Virginie',
          description: 'Animal totem ',
          background: '/img/projet/cerfDeVirginie.jpg',
          skills: ['illustrator.png'],
          date: "Novembre 2023"
        },
        {
          id: 23,
          nom: 'Films du moment',
          description: 'Page web présentant les films du moment',
          background: '/img/projet/filmDuMoment.png',
          date: "Mars 2024",
          skills: ['html.svg', 'css.svg', 'vscode.png']
        },
        {
          id: 24,
          nom: 'Digital Detox',
          description: "Vidéo réalisée en cours d'Anglais pour aider les gens...",
          background: '/img/projet/digitaldetox.png',
          date: "Avril 2024 ",
          skills: ["premierepro.png"]
        },
        {
          id: 27,
          nom: 'Les Arènes',
          description: 'Vidéo sur l’univers de Bob...',
          background: '/img/projet/lesArenes.png',
          date: 'Novembre 2024',
          skills: ["premierepro.png"]
        },
        {
          id: 11,
          nom: 'Festival',
          description: 'Affiche pour une campagne de festival pour la jeunesse européenne',
          background: '/img/projet/festival.jpg',
          skills: ['photoshop.png'],
          date: "Juin 2024"
        },
        {
          id: 2,
          nom: 'Barcola',
          description: 'Affiche sur Bradley Barcola',
          background: '/img/projet/barcola.jpg',
          skills: ['photoshop.png'],
          date: "Août 2024"
        },
        {
          id: 28,
          nom: 'Player',
          description: 'Vidéo sur l’univers de Bob...',
          background: '/img/projet/player.png',
          date: "Octobre 2024",
          skills: ["/aftereffects.png", "illustrator.png"]
        },
        {
          id: 14,
          nom: 'Lame secrète',
          description: 'Téléphone lame secrète',
          background: '/img/projet/lameSecrete.jpg',
          skills: ['photoshop.png'],
          date: "Décembre 2023"
        },
        {
          id: 21,
          nom: 'Site Eh Connard !',
          description: 'Site web féministe',
          background: '/img/projet/ehConnard.png',
          date: "Janvier 2024",
          skills: ['php.png', 'css.svg', 'vscode.png']
        },
        {
          id: 15,
          nom: 'Campagne publicitaire',
          description: "Affiche campagne publicitaire contre l'étalement urbain",
          background: '/img/projet/campagnePublicitaire.jpg',
          skills: ['photoshop.png'],
          date: "Décembre 2024"
        }
      ];

      const currentIndex = allProjects.findIndex(
        (proj) => this.normalizeName(proj.nom) === this.normalizeName(name)
      );
      this.project = allProjects[currentIndex] || null;

      // Déterminer le projet précédent et suivant
      this.prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
      this.nextProject =
        currentIndex < allProjects.length - 1
          ? allProjects[currentIndex + 1]
          : null;
    },
  },
};
</script>




















<style scoped>

.backward-arrow{
  filter: invert(0.9);
  width:4rem;
position: absolute;
top:8rem;
left:1rem;
border-radius: var(--circle-radius);
padding:8px;
transition: 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

.navigation {
  display: flex;
  gap:2rem;
  margin-top: 8rem;
}

.backward-arrow:hover{
  background: var(--gray-hover);
}

.unfound{
  text-align: center;
  margin:25rem 0;
}

.name-description{
  margin-bottom: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:10px;
}

.name-description h3{
  font-size: 8rem;
}

.name-description p{
  background: var(--gray);
  padding:6px;
  border-radius: 8px;
  font-weight: var(--font-weight-black);
}

.project-details{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5rem 1rem;
}

.grid-section{
  display: grid;
  grid-template-columns:1fr 2fr 1fr;
  grid-template-rows: repeat(3,auto);
  justify-items: center;
  align-items: center;
  width:90%;
  margin:auto;
  row-gap: 5vw;
  column-gap: 5px;
}

.grid-section .sub-section p,h4{
  text-align: center;
}

.visual{
  grid-row: 1/3;
  grid-column: 2;
  width:35rem;
}

.sub-section{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:1.5rem;
  background: var(--footer-header_bck);
  padding:2rem;
  border-radius: 40px;
  border:var(--light-gray-border)
}

#section-5{
  grid-row: 3;
  grid-column: 2;
  align-self: baseline;
  width: 70%;
  margin: auto;
}

.section-image{
  filter: invert(0.9);
  width:4rem;
}

.skill-collection{
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.skill-collection .skill-image{
  width:6rem;
}
</style>