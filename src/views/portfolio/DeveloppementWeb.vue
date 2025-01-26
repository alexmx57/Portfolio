<template>
    <Trombinoscope
     banner="/img/banniereDevWeb.png" 
     Title="Développement web" 
     :projects="webDevelopmentProjects" 
     baseRoute="/portfolio/developpement-web"/>
</template>






<script>


import Trombinoscope from '@/components/Trombinoscope.vue';

export default {
  components: {
    Trombinoscope,
  },
  data() {
    return {
      webDevelopmentProjects: [
      {
          id: 1,
          nom: 'Site Quantum',
          description: "Site web de vente de bière",
          background: '/img/projet/quantum.png',
          date:"Juin 2024",
          skills:['php.png','css.svg','js.svg','filezilla.png','vscode.png']
        },
        { id: 2, 
          nom: 'Site Eh Connard!',
           description: 'Site web féministe', 
           background: '/img/projet/ehConnard.png',
           date:"Janvier 2024",
           skills:['php.png','css.svg','vscode.png']
          },
          { id: 3, 
          nom: 'Shanks Website',
           description: 'Site web consacré au personnage de Shanks dans One Piece', 
           background: '/img/projet/shanksSite.png',
           date:"Avril 2024",
           skills:['html.svg','css.svg','js.svg','vscode.png']
          },
          { id: 4, 
          nom: 'Films du moment',
           description: 'Page web présentant les films du moment', 
           background: '/img/projet/filmDuMoment.png',
           date:"Mars 2024",
           skills:['html.svg','css.svg','vscode.png']
          },
      ],
    };
  },
};



</script>