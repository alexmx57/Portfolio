<template>




  <div @click="activeParams = !activeParams" class="ScFigure-sc-wkgzod-0 caxXaW tw-svg"><svg width="40" height="40"
      viewBox="0 0 20 20">
      <path d="M10 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
      <path fill-rule="evenodd"
        d="M9 2h2a2.01 2.01 0 0 0 1.235 1.855l.53.22a2.01 2.01 0 0 0 2.185-.439l1.414 1.414a2.01 2.01 0 0 0-.439 2.185l.22.53A2.01 2.01 0 0 0 18 9v2a2.01 2.01 0 0 0-1.855 1.235l-.22.53a2.01 2.01 0 0 0 .44 2.185l-1.415 1.414a2.01 2.01 0 0 0-2.184-.439l-.531.22A2.01 2.01 0 0 0 11 18H9a2.01 2.01 0 0 0-1.235-1.854l-.53-.22a2.009 2.009 0 0 0-2.185.438L3.636 14.95a2.009 2.009 0 0 0 .438-2.184l-.22-.531A2.01 2.01 0 0 0 2 11V9c.809 0 1.545-.487 1.854-1.235l.22-.53a2.009 2.009 0 0 0-.438-2.185L5.05 3.636a2.01 2.01 0 0 0 2.185.438l.53-.22A2.01 2.01 0 0 0 9 2zm-4 8 1.464 3.536L10 15l3.535-1.464L15 10l-1.465-3.536L10 5 6.464 6.464 5 10z"
        clip-rule="evenodd"></path>
    </svg>
  </div>



  <Transition name="fade">
    <ToggleForm v-if="activeParams" />
  </Transition>








</template>








<script>

import ToggleForm from './ToggleForm.vue'

export default {
  name: 'TheParameters',
  components: {
    ToggleForm
  },
  data() {
    return {
      activeParams: false
    }
  }
}


</script>







<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.35s cubic-bezier(0.23, 1, 0.320, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(100vh);
}



div svg {
  fill: var(--white);
  transition: 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

div svg:hover {
  fill: var(--yellow-white);
  transform: scale(1.075);
}
</style>