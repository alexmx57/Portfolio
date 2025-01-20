<template>
    <Trombinoscope 
      Title="Tous"
      :projects="AllProjects"
      baseRoute="/portfolio/tous"
      banner=""
    />
</template>






<script>


import Trombinoscope from '@/components/Trombinoscope.vue';




export default {
  components:{
    Trombinoscope
  },
  data() {
    return {
      AllProjects: [
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
        },
        { id: 6, 
          nom: 'Générique',
           description: 'Générique de fin de comédie romantique', 
           background: '/img/projet/generique.png',
           date:"Janvier 2025",
           skills:["/aftereffects.png"]
          },
      ],
    };
  },
};


</script>




<style scoped>

</style>