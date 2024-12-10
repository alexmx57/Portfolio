<template>

    <header id="header">




        <div class="logo-navbar centered">
            <div @click="changeActivity" class="menu"
                style="width: 32px; height: 100%; display: block; fill: currentcolor;">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false"
                    style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
                    <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
                </svg>
            </div>
            <RouterLink to="/"><img class="logo" width="45" src="/img/am.png" alt="Logo"></RouterLink>
        </div>




        <h3 class="name">Alexandre MEUX</h3>



        <div class="right-header centered">


            <div class="social-media-header centered">


                <div class="social-media-img-container">
                    <transition name="fade-slide">
                        <p v-if="activeEmail" class="hidden-element">alexandre.meux@etu.u-pec.fr</p>
                    </transition><img @mouseout="activeEmail = false" @mouseover="activeEmail = true" class="mail"
                        width="30" src="/img/pictogramme/email.svg">

                </div>




                <div class="social-media-img-container">
                    <transition name="fade-slide">
                        <p v-if="activeLinkedIn" class="hidden-element">www.linkedin.com/in/alexandre-meux-2ba28a29b</p>
                    </transition><img @mouseout="activeLinkedIn = false" @mouseover="activeLinkedIn = true"
                        class="linkedIn" width="35" src="/img/pictogramme/linkedIn.png">

                </div>





                <div class="social-media-img-container">
                    <transition name="fade-slide">
                        <p v-if="activePhone" class="hidden-element">07 50 57 84 84</p>
                    </transition><img @mouseout="activePhone = false" @mouseover="activePhone = true" class="phone"
                        width="30" src="/img/pictogramme/phone.png">

                </div>
            </div>



            <TheParameters />

        </div>



        <div :class="{ actif: isActive, inactif: !isActive }" class="navbar-responsive">
            <div class="navbar-responsive-container">


                <div class="logo_menu">
                    <p class="navbar-responsive-title gray-bck">Menu</p>
                    <RouterLink to="/"><img class="logo" width="55" src="/img/am.png" alt="Logo"></RouterLink>
                    <span @click="isActive = !isActive" class="close-btn">✖</span>
                </div>






                <div class="navbar-responsive-list-container">
                    <ul class="navbar-responsive-list">
                        <li>
                            <img class="pictogramme-header" src="/img/pictogramme/header/home.svg">
                            <RouterLink class="header-links" to="/">Accueil</RouterLink>
                        </li>
                        <li>
                            <img class="pictogramme-header" src="/img/pictogramme/header/aPropos.svg">
                            <RouterLink class="header-links" to="/aPropos">À propos de moi</RouterLink>
                        </li>
                        <li>
                            <img src="/img/pictogramme/header/stars.svg" class="pictogramme-header">
                            <RouterLink to="/competences" class="header-links">Compétences</RouterLink>
                        </li>
                        <li>
                            <img src="/img/pictogramme/header/portfolio.png" class="pictogramme-header">
                            <RouterLink to="/portfolio" class="header-links">Portfolio</RouterLink>
                        </li>
                        <li>
                            <img src="/img/pictogramme/header/contact.svg" class="pictogramme-header">
                            <RouterLink to="/contact" class="header-links">Contact</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>



    </header>

</template>





































<script>
import TheParameters from './TheParameters.vue';


export default {
    name: 'TheHeader',
    components: {
        TheParameters
    },
    data() {
        return {
            isActive: false,
            activeEmail: false,
            activeLinkedIn: false,
            activePhone: false
        }
    },
    watch: {
        isActive(newValue) {
            if (newValue) {
                document.querySelector('#main').style.overflow = 'hidden';
            } else {
                document.querySelector('#main').style.overflow = 'revert-layer';
            }
        },
    },
    methods: {
        changeActivity() {
            this.isActive = !this.isActive
        }
    }
}




</script>


























<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.3s ease;
}

.fade-slide-enter {
    opacity: 0;
    transform: translateY(10px);
    /* Décalage initial */
}

.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(10px);
    /* Décalage final */
}

header {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 5;
    transition: all 0.75s ease;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    align-items: center;
    background: var(--footer-header_bck);
    backdrop-filter: var(--bck-blur);
    border-bottom: var(--light-gray-border);
}



.navbar-responsive-container .header-links::after {
    content: "";
    display: block;
    height: 0.2rem;
    margin: 3px 0;
    background: var(--yellow-white);
    transform: scale(0);
    transition: all 0.75s ease;
    transform-origin: left;
    animation: fade-in 0.6s;
    border-radius: 2px;
}

.navbar-responsive-container ul {
    min-width: 130px;
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }

    90% {
        opacity: 0.6;
    }

    100% {
        opacity: 1;
    }
}

.navbar-responsive-container a:hover:after {
    transform: scale(1);
}

.header-links {
    white-space: nowrap;
    font-size: 15px;
    font-family: 'Roboto Flex';
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-links:hover {
    color: var(--yellow-white);
    font-weight: 900;
}

.navbar-responsive-container li {
    margin: 2.5rem 0;
    width: max-content;
    display: flex;
    align-items: center;
}

.navbar-responsive-container li .pictogramme-header {
    width: 18px;
    filter: invert(0.85);
    margin: 0 1rem;
}

.social-media-header {
    background: var(--white);
    padding: 0.25rem 1.25rem;
    justify-self: flex-end;
    margin-right: 0.5rem;
    border: var(--double-gray);
    gap: .8rem;
    border-radius: 10px;
}

.right-header {
    justify-self: flex-end;
    margin-right: 1rem;
}

.name {
    transition: 0.15s cubic-bezier(0.075, 0.82, 0.165, 1);
    justify-self: center;
    font-family: 'Advent Pro';
    text-transform: uppercase;
    font-weight: 300;
    color: var(--yellow-white);
}

.name:hover {
    cursor: pointer;
    font-weight: 900;
}

.logo-navbar {
    justify-self: flex-start;
    margin-left: 1rem;
}

.menu {
    padding: 0.25rem;
    cursor: pointer;
    border-radius: 10px;
    transition: 0.1s ease;
    border: 1px solid rgb(136, 134, 134);
}


.navbar-responsive {
    transition: 0.45s ease;
    position: fixed;
    left: -200vw;
    top: 0;
}

.navbar-responsive-container {
    width: max-content;
    padding: 20px;
    background: var(--footer-header_bck);
    position: relative;
    height: -webkit-fill-available;
}

.navbar-responsive-list-container {
    display: flex;
    justify-content: flex-start;
    margin-top: 7rem;
    margin-left: 2rem;
}

.logo_menu {
    display: flex;
    justify-content: center;
    align-items: center;
    gap:2rem;
}

.close-btn {
    cursor: pointer;
    font-size: 15px;
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    margin-left: 10rem;
}

.close-btn:hover {
    background: #ffffff14;
}

.navbar-responsive-title {
    background: var(--gray);
    padding: 4px;
    margin-bottom: 1.15rem;
    transition: 0.1s ease-out;
    cursor: pointer;
    border-radius: 6px;
    font-weight: 800;
    font-size: 1.5rem;
}

.social-media-img-container {
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
}

.hidden-element {
    transition: 0.55s;
    color: var(--black);
    font-size: 1.25rem;
    white-space: nowrap;
}

.actif {
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
    transition: 0.1s ease-out;
}

.inactif {
    left: -200vw;
}
</style>