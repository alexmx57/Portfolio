<template>
  <div>
    <TheTrombinoscope Title="Graphisme" TheTrombinoscope
      :projects="graphicProjects"
      baseRoute="/portfolio/graphisme"
    />
  </div>
</template>






<script>


import TheTrombinoscope from '@/components/TheTrombinoscope.vue';




export default {
  components:{
    TheTrombinoscope
  },
  data() {
    return {
      graphicProjects: [
      {
          id: 1,
          nom: 'Gyökeres',
          description: "Affiche sur Viktor Gyökeres",
          background: '/img/projet/gyökeres.png',
          skills:['photoshop.png'],
          date:"Novembre 2024"
        },
        { id: 2, 
          nom: 'Barcola',
           description: 'Affiche sur Bradley Barcola', 
           background: '/img/projet/barcola.png' ,
           skills:['photoshop.png'],
           date:"Août 2024"
          },
          { id: 3, 
          nom: 'Vitinha',
           description: 'Affiche sur Vitinha', 
           background: '/img/projet/vitinha.png',
           skills:['photoshop.png']
          },
          { id: 4, 
          nom: 'Vitinha 2.0',
           description: 'Affiiche sur Vitinha', 
           background: '/img/projet/vitinha2.png',
           skills:['photoshop.png'],
           date:"Novembre 2024"
          },
          { id: 5, 
          nom: 'João Neves',
           description: 'Affiche sur João Neves', 
           background: '/img/projet/joaoNeves.png',
           skills:['photoshop.png'],
           date:"Août 2024"
          },
          { id: 6, 
          nom: 'Shanks',
           description: 'Affiche sur Shanks de One Piece', 
           background: '/img/projet/shanks.png',
           skills:['photoshop.png'] ,
           date:"Mars 2024"
          },
          { id: 7, 
          nom: 'Mbappé',
           description: 'Affiche sur Kylian Mbappé', 
           background: '/img/projet/kylian.png',
           skills:['photoshop.png'],
           date:"Octobre 2024"
          },
          { id: 8, 
          nom: 'Cartel',
           description: 'Affiche inspirée des cartels de la drogue sud-américains', 
           background: '/img/projet/cartel.png',
           skills:['photoshop.png'],
           date:"Octobre 2024" 
          },
          { id: 9, 
          nom: 'JME',
           description: 'Affiche pour promouvoir la journée mondiale de l"eau', 
           background: '/img/projet/JME.png',
           skills:['photoshop.png'],
           date:"Novembre 2023"
          },
          { id: 10, 
          nom: 'Limites planétaires',
           description: 'Affiche sur les limites planétaires', 
           background: '/img/projet/limitesPlanetaires.png',
           date:"Avril 2024"
          },
          { id: 11, 
          nom: 'Festival',
           description: 'Affiche pour une campagne de festival pour la jeunesse européenne', 
           background: '/img/projet/festival.png',
           skills:['photoshop.png'],
           date:"Juin 2024"
          },
          { id: 12, 
          nom: 'Cerf de Virginie',
           description: 'Animal totem ', 
           background: '/img/projet/cerfDeVirginie.jpg',
           skills:['illustrator.png'],
           date:"Novembre 2023"
          },
          { id: 13, 
          nom: 'Auto-Portrait',
           description: 'Auto-Portrait', 
           background: '/img/projet/autoPortrait.png',
           skills:['illustrator.png'],
           date:"Novembre 2023"
          },
          { id: 14, 
          nom: 'Lame secrète',
           description: 'Téléphone lame secrète', 
           background: '/img/projet/lameSecrete.jpg',
           skills:['photoshop.png'],
           date:"Décembre 2023"
          },
          { id: 15,
          nom: 'Campagne publicitaire',
           description: "Affiche campagne publicitaire contre l'étalement urbain",
           background: '/img/projet/campagnePublicitaire.png',
           skills:['photoshop.png'],
           date:"Décembre 2024"
          },
      ],
    };
  },
};


</script>




<style scoped>

</style>