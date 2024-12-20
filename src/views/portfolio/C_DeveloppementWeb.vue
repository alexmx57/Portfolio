<template>
  <div>
    <TheTrombinoscope Title="Développement web" :projects="webDevelopmentProjects" baseRoute="/portfolio/developpement-web"/>
  </div>
</template>






<script>


import TheTrombinoscope from '@/components/TheTrombinoscope.vue';

export default {
  components: {
    TheTrombinoscope,
  },
  data() {
    return {
      webDevelopmentProjects: [
      {
          id: 1,
          nom: 'Quantum',
          description: "Site web de vente de bière",
          background: '/img/projet/quantum.png',
        },
        { id: 2, 
          nom: 'Eh Connard !',
           description: 'Site web féministe', 
           background: '/img/projet/ehConnard.png' 
          },
          { id: 3, 
          nom: 'Shanks',
           description: 'Site web consacré au personnage de Shanks dans One Piece', 
           background: '/img/projet/shanksSite.png' 
          },
          { id: 4, 
          nom: 'Films du moment',
           description: 'Page web présentant les films du moment', 
           background: '/img/projet/filmDuMoment.png' 
          },
      ],
    };
  },
};



</script>