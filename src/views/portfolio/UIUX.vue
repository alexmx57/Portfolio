<template>
    <Trombinoscope Title="UI-UX" TheTrombinoscope
      :projects="ui_ux_Projects"
      baseRoute="/portfolio/UI-UX"
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
      ui_ux_Projects: [
      {
          id: 1,
          nom: 'Bande.Dessinnee',
          description: "Vidéo réalisé en cours d'Anglais pour aider les gens...",
          background: '/img/projet/digitaldetox.png',
          skills:['animate.png',]
        },
        { id: 2, 
          nom: 'Marseille.fr',
           description: 'Maquette du site web de Marseille sur axure', 
           background: '/img/projet/marseille.png',
           date:"Mars 2024",
           skills:['axure.png',]
          },
          { id: 3, 
          nom: 'AccessiWeb',
           description: "Maquette axure visant à expliquer tous les rouages de l'accessibilité sur le web",
           background: '/img/projet/accessiWeb.png',
           date:"Avril 2024",
           skills:['axure.png',]
          },
          { id: 4, 
          nom: 'ErgoWeb',
           description: "Maquette axure traitant de l'ergonomie web", 
           background: '/img/projet/ergoWeb.png' ,
           date:"Décembre 2023",
           skills:['axure.png',]
          },
      ],
    };
  },
};


</script>




<style scoped>

</style>