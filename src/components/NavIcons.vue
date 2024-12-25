<template>

<!-- <div class="secondary-nav">









    <router-link @click="updateActivityState('audiovisuel')" class="router-link" active-class="active-link" to="/portfolio/audiovisuel">
<div class="card-container">
<img src="/img/pictogramme/audiovisuel.png">
<h4>Audiovisuel</h4>
<transition><button v-if="audiovisuel">Découvrir</button></transition>
</div>
<span  class="span">Level</span>
</router-link>





<router-link @click="updateActivityState('graphisme')" class="router-link" active-class="active-link" to="/portfolio/graphisme">
<div class="card-container">
<img src="/img/pictogramme/graphisme.png">
<h4>Graphisme</h4>
<transition><button v-if="graphisme">Découvrir</button></transition>
</div>
<span  class="span">Level</span>
</router-link>




<router-link @click="updateActivityState('devWeb')" class="router-link" active-class="active-link" to="/portfolio/developpement-web">
<div class="card-container">
<img src="/img/pictogramme/devWeb.webp">
<h4>Développement Web</h4>
<transition><button v-if="devWeb">Découvrir</button></transition>
</div>
<span class="span">Level</span>
</router-link>




<router-link @click="updateActivityState('uiux')" class="router-link" active-class="active-link" to="/portfolio/UI-UX">
<div class="card-container">
<img src="/img/pictogramme/ux-design.svg">
<h4>UI/UX</h4>
<transition><button v-if="uiux">Découvrir</button></transition>
</div>
<span  class="span">Level</span>
</router-link>
 -->


<div>
</div>
</template>




<style scoped>

.router-link {
    background: none;
    border: 1px solid var(--gray);
    border-radius: 20px;
    padding: 3rem;
    text-align: center;
    min-width: 20rem;
    transition: 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    transform: translateY(30px);
    background: var(--light-blue);
}

.active-link {
    background-color: var(--footer-header_bck);
    border-radius: 20px;
    box-shadow: inset 0px 0px 2px 5px var(--yellow-white), 0px 0px 2px 4px var(--gray);
    border: 2px solid var(--gray);
    transform: none;
    position: relative;
}

.active-link h4 {
    font-weight: 900;
    text-decoration: underline;
}

.secondary-nav {
    display: flex;
    gap: 45px;
    justify-content: center;
    position: relative;
    bottom: 90px;
}

.card-container h4 {
    margin-top: 10px;
    margin-bottom: 20px;
}

.card-container img {
    max-width: 7.5rem;
    filter: invert(1);
}
</style>