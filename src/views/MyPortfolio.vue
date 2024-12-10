<template>



    <div class="banner">
        <div class="banner-content">
            <h1>Bienvenue sur mon PORTFOLIO</h1>
            <p>Découvrez mes projets et compétences.</p>
            <button>En savoir plus</button>
        </div>
    </div>



    <div>




        <nav class="secondary-nav">





            <router-link @click="audiovisuel = true; graphisme = false; devWeb = false; uiux = false"
                class="router-link" active-class="active-link" to="/portfolio/audiovisuel">
                <div class="card-container">
                    <img src="/img/pictogramme/audiovisuel.png">
                    <h4>Audiovisuel</h4>
                    <transition><button v-if="audiovisuel">Découvrir</button></transition>
                </div>
                <p id="level">Level</p>
            </router-link>






            <router-link @click="graphisme = true; audiovisuel = false; devWeb = false; uiux = false"
                class="router-link" active-class="active-link" to="/portfolio/graphisme">
                <div class="card-container">
                    <img src="/img/pictogramme/graphisme.png">
                    <h4>Graphisme</h4>
                    <transition><button v-if="graphisme">Découvrir</button></transition>
                </div>
                <p id="level">Level</p>
            </router-link>






            <router-link @click="devWeb = true; graphisme = false; audiovisuel = false; uiux = false"
                class="router-link" active-class="active-link" to="/portfolio/developpement-web">
                <div class="card-container">
                    <img src="/img/pictogramme/devWeb.webp">
                    <h4>Développement Web</h4>
                    <transition><button v-if="devWeb">Découvrir</button></transition>
                </div>
                <p id="level">Level</p>
            </router-link>






            <router-link @click="uiux = true; graphisme = false; devWeb = false; audiovisuel = false"
                class="router-link" active-class="active-link" to="/portfolio/UI-UX">
                <div class="card-container">
                    <img src="/img/pictogramme/ux-design.svg">
                    <h4>UI/UX</h4>
                    <transition>
                        <button v-if="uiux">Découvrir</button>
                    </transition>
                </div>
                <p id="level">Level</p>
            </router-link>




        </nav>






        <div class="content">
            <router-view></router-view>
        </div>




    </div>
</template>







<style scoped>

#level{
    font-size: 1.1rem;
    font-weight: 200;
    color: rgb(127, 127, 127);
    align-self: end;
    position: absolute;
    right: 20px;
    bottom: 15px;
}

.v-enter-active,
.v-leave-active {
    transition: all 0.25s cubic-bezier(0.23, 1, 0.320, 1);
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}



.router-link {
    background: none;
    border: 1px solid var(--gray);
    border-radius: 20px;
    padding: 3rem;
    text-align: center;
    min-width: 200px;
    transition: 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    transform: translateY(30px);

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
    flex-wrap: wrap;
    margin-bottom: 250px;
}

.card-container h4 {
    margin-top: 10px;
    margin-bottom: 20px;
}

.card-container img {
    max-width: 75px;
    filter: invert(1);
}







.banner {
    width: 100%;
    /* Prend toute la largeur de l'écran */
    min-height: 60rem;
    /* Prend au moins 50% de la hauteur de l'écran */
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(/public/img/banniere.png);
    background-size: cover;
    /* Image couvre toute la bannière */
    background-position: center;
    /* Centrage de l'image */
    background-repeat: no-repeat;
    /* Évite la répétition de l'image */
    display: flex;
    /* Active Flexbox */
    justify-content: center;
    /* Centre le contenu horizontalement */
    align-items: center;
    /* Centre le contenu verticalement */
    text-align: center;
    /* Centre le texte */
    padding: 2rem;
    /* Ajoute de l'espace autour du contenu */
    color: white;
    /* Texte blanc par défaut */
    box-shadow: -5px 3px 15px black;
}

/* Contenu de la bannière */
.banner-content {
    max-width: 800px;
    /* Largeur maximale du contenu */
    margin: 0 auto;
    /* Centre le contenu en cas de texte long */
}

.banner-content p {
    margin-top: 35px;
    margin-bottom: 55px;
}


</style>








<script>

export default {
    name: "MyPortfolio",
    data() {
        return {
            audiovisuel: false,
            graphisme: false,
            devWeb: false,
            uiux: false
        }
    }
}


</script>
