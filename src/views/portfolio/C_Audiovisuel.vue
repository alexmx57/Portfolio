<template>
  <div>
    <div class="trombinoscope">




      <div v-for="project in audiovisualProjects" :key="project.id" class="project"
        @mouseleave="visibleProjectId = null" @mouseover="visibleProjectId = project.id">
        <h4 class="project-name">{{ project.nom }}</h4>
        <transition name="text-appear">
          <p v-if="visibleProjectId === project.id" class="project-description">{{ project.description }}</p>
        </transition>
        <button>Voir</button>
      </div>





    </div>
  </div>
</template>







<script>


export default {
  data() {
    return {
      audiovisualProjects: [
        { id: 1, nom: 'Alice', description: 'alice.jpg' },
        { id: 2, nom: 'Bob', description: 'bob.jpg' },
        { id: 3, nom: 'Charlie', description: 'charlie.jpg' },
      ],
      visibleProjectId: null, 
    };
  },
};


</script>




<style scoped>
.text-appear-enter-active,
.text-appear-leave-active {
  transition: all 0.35s cubic-bezier(0.23, 1, 0.320, 1);
}

.text-appear-enter-from,
.text-appear-leave-to {
  opacity: 0;
  transform: translateX(100vh);
}




.trombinoscope {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  color: black !important;
}

/* Style pour chaque projet */
.project {
  background: #fff;
  /* Fond blanc */
  border: 1px solid #ddd;
  /* Bordure légère */
  padding: 16px;
  /* Marges internes */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* Légère ombre */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  /* Animation au survol */
  display: flex;
  flex-direction: column;
  flex-basis: 300px;
  min-height: 300px;
}

.project:hover {
  transform: scale(1.05);
  /* Agrandissement au survol */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  /* Ombre plus prononcée */
}

.project button:active {
  transform: scale(0.95);
  /* Réduction légère lors du clic */
}
</style>