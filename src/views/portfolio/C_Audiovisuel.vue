<template>
    <TheTrombinoscope Title="Audiovisuel" TheTrombinoscope
      :projects="audiovisualProjects"
      baseRoute="/portfolio/audiovisuel"
    />
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
          date:"Avril 2024 ",
          skills:["premierepro.png"]
        },
        { id: 2, 
          nom: "Scène d'épouvante",
           description: 'Vidéo épouvante réalisé avec la caméra 3D sur after effects', 
           background: '/img/projet/epouvante.png' ,
           date:'Novembre 2024',
           skills:["aftereffects.png","photoshop.png"]
          },
          { id: 3, 
          nom: 'New World Symphony',
           description: 'Vidéo sur l’univers de Bob...', 
           background: '/img/projet/clip.png',
           date:'Juin 2024',
           skills:["premierepro.png","canva.png"]
          },
          { id: 4, 
          nom: 'Les Arènes',
           description: 'Vidéo sur l’univers de Bob...', 
           background: '/img/projet/lesArenes.png',
           date:'Novembre 2024',
           skills:["premierepro.png"]
          },
          { id: 5, 
          nom: 'Player',
           description: 'Vidéo sur l’univers de Bob...', 
           background: '/img/projet/player.png',
           date:"Octobre 2024",
           skills:["/aftereffects.png","illustrator.png"]
          },
          
      ],
    };
  },
};


</script>




<style scoped>

</style>