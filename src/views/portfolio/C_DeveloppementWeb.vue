<template>
  <div>
    <TheTrombinoscope :projects="webDevelopmentProjects" baseRoute="/portfolio/developpement-web"/>
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
          nom: 'Digital Detox',
          description: "Vidéo réalisé en cours d'Anglais pour aider les gens...",
          background: '/img/projet/digitaldetox.png',
        },
        { id: 2, 
          nom: 'Bob',
           description: 'Vidéo sur l’univers de Bob...', 
           background: '/img/projet/vitinha2.png' 
          },
          { id: 3, 
          nom: 'Xob',
           description: 'Vidéo sur l’univers de Bob...', 
           background: '/img/projet/vitinha2.png' 
          },
          { id: 4, 
          nom: 'Cob',
           description: 'Vidéo sur l’univers de Bob...', 
           background: '/img/projet/vitinha2.png' 
          },
      ],
    };
  },
};



</script>