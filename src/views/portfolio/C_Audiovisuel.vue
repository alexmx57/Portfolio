<template>
  <div>
    <TheTrombinoscope TheTrombinoscope
      :projects="audiovisualProjects"
      baseRoute="/portfolio/audiovisuel"
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
      audiovisualProjects: [
        {
          id: 1,
          nom: 'Digital Detox',
          description: "Vidéo réalisé en cours d'Anglais pour aider les gens...",
          background: '/img/projet/digitaldetox.png',
        },
        { id: 2, 
          nom: 'Bob',
           description: 'Vidéo sur l’univers de Bob...', 
           background: '/img/projet/vitinha2.png' },
      ],
      visibleProjectId: null, 
    };
  },
};


</script>




<style scoped>

</style>