<template>
  <div>
    <TheTrombinoscope TheTrombinoscope
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
        },
        { id: 2, 
          nom: 'Barcola',
           description: 'Affiche sur Bradley Barcola', 
           background: '/img/projet/barcola.png' 
          },
          { id: 3, 
          nom: 'Vitinha',
           description: 'Affiche sur Vitinha', 
           background: '/img/projet/vitinha.png' 
          },
          { id: 4, 
          nom: 'Vitinha 2.0',
           description: 'Affiiche sur Vitinha', 
           background: '/img/projet/vitinha2.png' 
          },
          { id: 5, 
          nom: 'João Neves',
           description: 'Affiche sur João Neves', 
           background: '/img/projet/joaoNeves.png' 
          },
          { id: 6, 
          nom: 'Shanks',
           description: 'Affiche sur JShanks de One Piece', 
           background: '/img/projet/shanks.png' 
          },
          { id: 7, 
          nom: 'Mbappé',
           description: 'Affiche sur Kylian Mbappé', 
           background: '/img/projet/kylian.png' 
          },
          { id: 8, 
          nom: 'Cartel',
           description: 'Affiche inspirée des cartels de la drogue sud-américains', 
           background: '/img/projet/cartel.png' 
          },
          { id: 9, 
          nom: 'JME',
           description: 'Affiche pour promouvoir la journée mondiale de l"eau', 
           background: '/img/projet/JME.png' 
          },
          { id: 10, 
          nom: 'Limites planétaires',
           description: 'Affiche sur les limites planétaires', 
           background: '/img/projet/limitesPlanetaires.png' 
          },
          { id: 11, 
          nom: 'Festival de la jeunesse européenne',
           description: 'Affiche pour une campagne de festival pour la jeunesse européenne', 
           background: '/img/projet/festival.png' 
          },
          { id: 11, 
          nom: 'Cerf de Virginie',
           description: 'Animal totem ', 
           background: '/img/projet/cerfDeVirginie.jpg' 
          },
          { id: 12, 
          nom: 'Auto-Portrait',
           description: 'Auto-Portrait', 
           background: '/img/projet/autoPortrait.png' 
          },
          { id: 13, 
          nom: 'Lame secrète',
           description: 'Téléphone lame secrète', 
           background: '/img/projet/lameSecrete.jpg' 
          },
      ],
    };
  },
};


</script>




<style scoped>

</style>