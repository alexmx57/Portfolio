<template>
 
  <transition name="page-transition">
    <div v-if="project" class="project-details"> 
      <RouterLink class="backward-link" :to="`/portfolio/${category}`">
        <img class="backward-arrow" alt="Flèche de navigation" src="/img/pictogramme/arrow-left.png">
      </RouterLink> 
      <div class="name-description">
        <h1>{{ project.nom }}</h1>
        <p>{{ project.description }}</p>
      </div>

      <div class="grid-section">
        <video class="visual" controls width="630" height="360" v-if="project.video"><source :src="project.video" type="video/mp4"></video>
        <img v-else class="visual" :src="project.background" alt="project background" />
        
        <div v-if="project.brief" id="brief" class="sub-section">
          <img class="section-image" src="/img/pictogramme/brief.png" alt="stars">
          <h4>BRIEF</h4>
          <p>{{ project.brief }}</p>
        </div>

        <div v-if="project.idees" id="ideas" class="sub-section">
          <img class="section-image" src="/img/pictogramme/idees.png" alt="stars">
          <h4>IDÉES</h4>
          <p>{{ project.idees }}</p>
        </div>

        <div v-if="project.livrable" id="livrable" class="sub-section">
          <img class="section-image" src="/img/pictogramme/livrable.png" alt="stars">
          <h4>LIVRABLE</h4>
          <p>{{ project.livrable }}</p>
        </div>

        <div v-if="project.skills" id="skills" class="sub-section">
          <img class="section-image" src="/img/pictogramme/header/stars.svg" alt="stars">
          <h4>COMPÉTENCES ASSOCIÉES</h4>
          <div class="skill-collection">
            <img class="skill-image" :alt="skill" v-for="skill in project.skills" :key="skill" :src="'/img/pictogramme/competences/' + skill">
          </div>
        </div>

        <div v-if="project.contexte" id="contexte" class="sub-section">
          <img class="section-image" src="/img/pictogramme/contexte.svg" alt="stars">
          <h4>CONTEXTE</h4>
          <p>{{ project.contexte }}</p>
        </div>
      </div>

      <a class="web-link" v-if="project.lien" target="_blank" :href="project.lien"><button >Voir le site</button></a>

      <div class="navigation">
        <RouterLink v-if="prevProject" :to="`/portfolio/tous/${normalizeName(prevProject.nom)}`">
          <button>← Précédent : {{ prevProject.nom }}</button>
        </RouterLink>
        <RouterLink v-if="nextProject" :to="`/portfolio/tous/${normalizeName(nextProject.nom)}`">
          <button>Suivant : {{ nextProject.nom }} →</button>
        </RouterLink>
      </div>
    </div>

    <div v-else>
      <h1 class="unfound">AUCUN PROJET TROUVÉ</h1>
    </div>
  </transition>
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


      const allProjects = [
      {
          nom: 'Quantum',
          description: "Affiche campagne publicitaire contre l'étalement urbain",
          background: '/img/projet/LOGOQUANTUMBLANC.png',
          skills: ['photoshop.png'],
          date: "Juin 2024",
          brief:"Créer de A à Z une marque de bière fictive avec charte graphique, site web, vidéos promotionnelles, compte Instagram, etc.",
          livrable:" De multiple livrables étaient à rendre pour ce projet, comme le site web de vente de bière, l'affiche de promotion de la marque, la charte graphique, le benchmark ainsi que des vidéos publicitaires",
          contexte:"Gros projet de SAE du semestre 1 réalise par groupe de 6.",
          idees:"Nos idées pour notre projet de SAE étaient d'avoir un thème assez imaginatif avec des changements de dimensions, et la promotion d'une infinité de saveur."
        },
        {
          nom: 'Eh Connard !',
          description: "Affiche campagne publicitaire contre l'étalement urbain",
          background: '/img/projet/logoEhConnard.png',
          skills: ['photoshop.png'],
          date: "Juin 2024",
          brief:"Créer une affiche pour une campagne publicitaire contre l'étalement urbain",
          livrable:" Affiche imprimée",
          contexte:"Projet réalisé en cours de graphisme",
          idees:"Créer une affiche qui interpelle le spectateur"
        },
      {
          nom: 'Mbappé',
          description: 'Affiche sur Kylian Mbappé',
          background: '/img/projet/kylian.jpg',
          skills: ['photoshop.png'],
          date: "Octobre 2024"
        },
        {
          nom: 'Bande Dessinnée',
          description: "Bande-dessinée intéractive",
          background: '/img/projet/digitaldetox.png',
          skills: ['animate.png'],
          date: "Novembre 2024",
          brief:"Créer une bande-dessinée intéractive avec Animate",
          livrable:" Rendu du scénario de la bande-dessinnée, et du dossier de l'animation",
          contexte:"Projet réalisé en cours de Création et design interactif par groupe de 4",
          idees:"Créer une affiche qui interpelle le spectateur"
        },
        {
          nom: 'Gyökeres',
          description: "Affiche sur Viktor Gyökeres",
          background: '/img/projet/gyokeres.jpg',
          skills: ['photoshop.png'],
          date: "Novembre 2024"
        },
        {
          nom: 'Site Quantum',
          description: "Site web de vente de bière",
          background: '/img/projet/quantum.png',
          date: "Juin 2024",
          lien: "https://quantum.2024.mmibut1.org/",
          skills: ['php.png', 'css.svg', 'js.svg', 'filezilla.png', 'vscode.png'],
          brief:"Créer un site web pour notre marque de bière fictive Quantum,  en PHP, CSS, JS ainsi qu'en utilisant une base de données",
          livrable:" Rendu du dossier du site web + soutenance pour présenter le site.",
          contexte:"Projet réalisé en lien avec la SAE principale du semestre 1, réalisé en groupe de 6",
          idees:"Créer une affiche qui interpelle le spectateur",
        },
        {
          nom: 'Vitinha',
          description: 'Affiche sur Vitinha',
          background: '/img/projet/vitinha.jpg',
          skills: ['photoshop.png'],
          date: "Novembre 2024"
        },
        {
          nom: 'Marseille.fr',
          description: 'Maquette du site web de Marseille sur axure',
          background: '/img/projet/marseille.png',
          date: "Mars 2024",
          skills: ['axure.png'],
          brief:"Créer une affiche pour une campagne publicitaire contre l'étalement urbain",
          livrable:" Affiche imprimée",
          contexte:"Projet réalisé en cours de graphisme",
          idees:"Créer une affiche qui interpelle le spectateur",
        },
        {
          nom: 'Shanks',
          description: 'Affiche sur Shanks de One Piece',
          background: '/img/projet/shanks.jpg',
          skills: ['photoshop.png'],
          date: "Mars 2024"
        },
        {
          nom: 'New World Symphony',
          description: 'Vidéo sur l’univers de Bob...',
          background: '/img/projet/clip.png',
          date: 'Juin 2024',
          skills: ["premierepro.png", "canva.png"],
          brief:"Créer un clip audiovisuel filmé avec le téléphone.",
          livrable:" Rendu d'un dossier de production et du clip audiovisuel.",
          contexte:"Projet de fin de semestre réalisé de manière individuelle.",
          idees:"Créer une affiche qui interpelle le spectateur",
          video: '/video/clip.mp4'
        },
        {
          nom: 'Vitinha 2.0',
          description: 'Affiche sur Vitinha',
          background: '/img/projet/vitinha2.jpg',
          skills: ['photoshop.png'],
          date: "Novembre 2024"
        },
        {
          nom: 'João Neves',
          description: 'Affiche sur João Neves',
          background: '/img/projet/joaoNeves.jpg',
          skills: ['photoshop.png'],
          date: "Août 2024"
        },
        {
          nom: "Scène d'épouvante",
          description: 'Vidéo épouvante réalisée avec la caméra 3D sur After Effects',
          background: '/img/projet/epouvante.png',
          date: 'Novembre 2024',
          skills: ["aftereffects.png", "photoshop.png"],
          brief:"Créer une scène d'épouvante en utilisant la caméra 3D sur After Effects.",
          livrable:" La vidéo d'épouvante",
          contexte:"Projet réalisé en cours d'audiovisuel de manière individuelle.",
          idees:"Créer une affiche qui interpelle le spectateur",
          video: '/video/epouvante.mp4'
        },
        {
          nom: 'Limites planétaires',
          description: 'Affiche sur les limites planétaires',
          background: '/img/projet/limitesPlanetaires.jpg',
          skills: ['illustrator.png'],
          date: "Avril 2024",
          brief:"Créer une affiche traitant d'une des limites planétaires",
          livrable:" Rendu de l'affiche ainsi que d'un dossier de production",
          contexte:"Projet réalisé en cours de graphisme en individuel.",
          idees:"Créer une affiche qui interpelle le spectateur"
        },
        {
          nom: 'Shanks Website',
          description: 'Site web consacré au personnage de Shanks dans One Piece',
          background: '/img/projet/shanksSite.png',
          date: "Avril 2024",
          skills: ['html.svg', 'css.svg', 'js.svg', 'vscode.png']
        },
        {
          nom: 'JME',
          description: 'Affiche pour promouvoir la journée mondiale de l\'eau',
          background: '/img/projet/JME.jpg',
          skills: ['photoshop.png'],
          date: "Novembre 2023",
          brief:"Créer une affiche faisant la promotion de la journée mondiale de l'eau du 22 mars 2024",
          livrable:" Rendu de l'affiche au format .psd",
          contexte:"Projet réalisé en cours de graphisme en individuel.",
          idees:"Créer une affiche qui interpelle le spectateur"
        },
        {
          nom: 'AccessiWeb',
          description: "Maquette axure visant à expliquer tous les rouages de l'accessibilité sur le web",
          background: '/img/projet/accessiWeb.png',
          date: "Avril 2024",
          skills: ['axure.png'],
          brief:"Créer une maquette d'application mobile axure pour expliquer les rouages de l'accessibilité sur le web",
          livrable:" Rendu de la maquette au format .rp",
          contexte:"Projet réalisé en cours d'ergonomie et accessibilité en individuel.",
          idees:"Créer une affiche qui interpelle le spectateur"
        },
        {
          nom: 'Auto-Portrait',
          description: 'Auto-Portrait',
          background: '/img/projet/autoPortrait.jpg',
          skills: ['illustrator.png'],
          date: "Novembre 2023",
          brief:"Créer une affiche faisant la promotion de la journée mondiale de l'eau du 22 mars 2024",
          livrable:" Rendu de l'affiche au format .psd",
          contexte:"Projet réalisé en cours de graphisme en individuel.",
          idees:"Créer une affiche qui interpelle le spectateur"
        },
        {
          nom: 'ErgoWeb',
          description: "Maquette axure traitant de l'ergonomie web",
          background: '/img/projet/ergoWeb.png',
          date: "Décembre 2023",
          skills: ['axure.png'],
          brief:"Créer une maquette d'application mobile axure pour expliquer les rouages de l'accessibilité sur le web",
          livrable:" Rendu de la maquette au format .rp",
          contexte:"Projet réalisé en cours d'ergonomie et accessibilité en individuel.",
          idees:"Créer une affiche qui interpelle le spectateur"
        },
        {
          nom: 'Cartel',
          description: 'Affiche inspirée des cartels de la drogue sud-américains',
          background: '/img/projet/cartel.jpg',
          skills: ['photoshop.png'],
          date: "Octobre 2024"
        },
        {
          nom: 'Cerf de Virginie',
          description: 'Animal totem ',
          background: '/img/projet/cerfDeVirginie.jpg',
          skills: ['illustrator.png'],
          date: "Novembre 2023",
          brief:"Créer une affiche pour une campagne publicitaire contre l'étalement urbain",
          livrable:" Affiche imprimée",
          contexte:"Projet réalisé en cours de graphisme",
          idees:"Créer une affiche qui interpelle le spectateur"
        },
        {
          nom: 'Films du moment',
          description: 'Page web présentant les films du moment',
          background: '/img/projet/filmDuMoment.png',
          date: "Mars 2024",
          skills: ['html.svg', 'css.svg', 'vscode.png'],
          brief:"Créer une affiche pour une campagne publicitaire contre l'étalement urbain",
          livrable:" Affiche imprimée",
          contexte:"Projet réalisé en cours de graphisme",
          idees:"Créer une affiche qui interpelle le spectateur"
        },
        {
          nom: 'Digital Detox',
          description: "Vidéo sur la detox digital réalisée en cours d'Anglais.",
          background: '/img/projet/digitaldetox.png',
          date: "Avril 2024 ",
          skills: ["premierepro.png"],
          brief:"Créer une vidéo pour une campagne de sensibilisation face au danger des écrans et des réseaux sociaux",
          livrable:" Rendu de la vidéo au monté au format mp4.",
          contexte:"Projet réalisé en cours d'Anglais par groupe de 2",
          idees:"Créer une affiche qui interpelle le spectateur",
          video: '/video/digital-detox.mp4'
        },
        {
          nom: 'Les Arènes',
          description: 'Vidéo sur les Arènes',
          background: '/img/projet/lesArenes.png',
          date: 'Novembre 2024',
          skills: ["premierepro.png"],
          brief:"Monter une vidéo faisant la promotion des Arènes de Corbeil-Essonnes à partir des rushs fournis par l'enseignant, la vidéo doit durer 45 secondes à 1 minute.",
          livrable:" Rendu de la vidéo au format .mp4",
          contexte:"Projet réalisé en d'écriture et multimédia en individuel.",
          idees:"Créer une affiche qui interpelle le spectateur",
          video:"/video/arenes.mp4"
        },
        {
          nom: 'Festival',
          description: 'Affiche pour une campagne de festival pour la jeunesse européenne',
          background: '/img/projet/festival.jpg',
          skills: ['photoshop.png'],
          date: "Juin 2024",
          brief:"Créer une affiche pour une campagne publicitaire d'un festival.",
          livrable:"Rendu de l'affiche",
          contexte:"Projet réalisé en cours de graphisme en individuel.",
          idees:"Créer une affiche qui interpelle le spectateur"
        },
        {
          nom: 'Barcola',
          description: 'Affiche sur Bradley Barcola',
          background: '/img/projet/barcola.jpg',
          skills: ['photoshop.png'],
          date: "Août 2024"
        },
        {
          nom: 'Player',
          description: 'Vidéo sur un player audio',
          background: '/img/projet/player.png',
          date: "Octobre 2024",
          skills: ["/aftereffects.png", "illustrator.png"],
          brief:"Créer une vidéo grâce à After Effects qui doit simuler avec le fond d'un écran de démarrage d'ordinateur un player",
          livrable:" Rendu de la vidéo au format .mp4",
          contexte:"Projet réalisé en cours de graphisme",
          idees:"Créer une affiche qui interpelle le spectateur"
        },
        {
          nom: 'Lame secrète',
          description: 'Téléphone lame secrète',
          background: '/img/projet/lameSecrete.jpg',
          skills: ['photoshop.png'],
          date: "Décembre 2023",
          brief:"Créer une affiche pour une campagne publicitaire contre l'étalement urbain",
          livrable:" Affiche imprimée",
          contexte:"Projet réalisé en cours de graphisme",
          idees:"Créer une affiche qui interpelle le spectateur"
        },
        {
          nom: 'Site Eh Connard!',
          description: 'Site web féministe',
          background: '/img/projet/ehConnard.png',
          date: "Janvier 2024",
          skills: ['php.png', 'css.svg', 'vscode.png'],
          brief:"Créer un site web féministe en utilisant les langages CSS et PHP. On devait utiliser le PHP pour créer des templates de notre HTML.",
          livrable:" Le dossier du site web",
          contexte:"Projet réalisé durant la SAE du semestre 1 consacré à la création du site.",
          idees:"Créer une affiche qui interpelle le spectateur",
          lien:"https://mmibut1.org/2024/S1/groupe_e/quiz.php"
        },
        {
          nom: 'Campagne publicitaire',
          description: "Affiche campagne publicitaire contre l'étalement urbain",
          background: '/img/projet/campagnePublicitaire.jpg',
          skills: ['photoshop.png'],
          date: "Décembre 2024",
          brief:"Créer une affiche pour une campagne publicitaire contre l'étalement urbain",
          livrable:" Rendu de l'affiche",
          contexte:"Projet réalisé en cours de graphisme en individuel.",
          idees:"Créer une affiche qui interpelle le spectateur"
        },
        {
          nom: 'Générique',
           description: 'Générique de fin de comédie romantique', 
           background: '/img/projet/generique.png',
           date:"Janvier 2025",
           skills:["/aftereffects.png"],
           brief:"Créer une affiche pour une campagne publicitaire contre l'étalement urbain",
           livrable:" Rendu de l'affiche",
          contexte:"Projet réalisé en cours de graphisme en individuel.",
          idees:"Créer une affiche qui interpelle le spectateur",
          video:"/video/generique.mp4"
          },
      ];

      const currentIndex = allProjects.findIndex(
        (proj) => this.normalizeName(proj.nom) === this.normalizeName(name)
      );
      this.project = allProjects[currentIndex] || null;

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
.backward-link{
  width: 100%;
}

.web-link{
  margin:4vw;
}

.web-link button{
  padding:2rem 4rem;
  border-radius: 40px;
}

.backward-arrow{
  filter: invert(0.9);
  width:4rem;
  border-radius: var(--circle-radius);
  padding:8px;
  transition: 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  margin-left: 1vw;
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
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:10px;
}

.name-description h1{
  color:var(--yellow-white) !important;
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
  border-radius: 10px;
  box-shadow:var(--box-shadow-1);
}

/* #section-5{
  grid-row: 3;
  grid-column: 2;
  align-self: baseline;
  width: 70%;
  margin: auto;
} */

.sub-section:last-of-type{
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
  width:3.75rem;
}

@media (max-width:800px){

}

</style>