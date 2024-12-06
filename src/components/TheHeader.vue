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
                <div class="social-media-img-container"><img class="mail" width="30" src="/img/pictogramme/email.svg">
                    <p class="hidden-element">alexandre.meux@etu.u-pec.fr</p>
                </div>
                <div class="social-media-img-container"><img class="linkedIn" width="35"
                        src="/img/pictogramme/linkedIn.png">
                    <p class="hidden-element">www.linkedin.com/in/alexandre-meux-2ba28a29b</p>
                </div>
                <div class="social-media-img-container"><img class="phone" width="30" src="/img/pictogramme/phone.png">
                    <p class="hidden-element">07 50 57 84 84</p>
                </div>
            </div>


            <TheParameters />

        </div>



        <div :class="{ actif: isActive, inactif: !isActive }" class="navbar-responsive">
            <div class="navbar-responsive-container">



                <p class="navbar-responsive-title gray-bck">Menu</p>


                <RouterLink to="/"><img class="logo" width="200" src="/img/am.png" alt="Logo"></RouterLink>


                <span @click="isActive = !isActive" class="close-btn">✖</span>



                <div class="navbar-responsive-list-container">
                    <ul class="navbar-responsive-list">
                        <li>
                            <img class="pictogramme-header" src="/img/pictogramme/header/home.svg"><RouterLink class="header-links" to="/">Accueil</RouterLink>
                        </li>
                        <li>
                            <img class="pictogramme-header" src="/img/pictogramme/header/aPropos.svg"><RouterLink class="header-links" to="/aPropos">À propos de moi</RouterLink>
                        </li>
                        <li>
                          <img src="/img/pictogramme/header/stars.svg" class="pictogramme-header"> <RouterLink to="/competences" class="header-links">Compétences</RouterLink>
                        </li>
                        <li>
                           <img src="/img/pictogramme/header/portfolio.png" class="pictogramme-header"><RouterLink to="/portfolio" class="header-links">Portfolio</RouterLink>
                        </li>
                        <li>
                            <img src="/img/pictogramme/header/contact.svg" class="pictogramme-header"><RouterLink to="/contact" class="header-links">Contact</RouterLink>
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
            isActive: false
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

.navbar-responsive-container li .pictogramme-header{
    width:18px;
    filter: invert(0.85);
    margin:0 1rem;
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
    padding: 120px 18rem 6rem 5rem;
    background: var(--footer-header_bck);
    position: relative;
    height: -webkit-fill-available;
}

.navbar-responsive-list-container {
    display: flex;
    justify-content: center;
}

.close-btn {
    cursor: pointer;
    font-size: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    border: var(--double-white);
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
    border-radius: var(--circle-radius);
}

.close-btn:hover {
    background: var(--gray);
}

.navbar-responsive-title {
    position: absolute;
    top: 2rem;
    left: 4rem;
    background: var(--gray);
    padding: 4px;
    margin-bottom: 1.15rem;
    transition: 0.1s ease-out;
    cursor: pointer;
    border-radius: 6px;
    font-weight: 800;
    font-size: 1.5rem;
}

.navbar-responsive-container .logo {
    position: absolute;
    bottom: 5rem;
    left: 5%;
}

.social-media-img-container {
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
}

.hidden-element {
    display: none;
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
    background: rgba(0, 0, 0, 0.75);
    transition: 0.1s ease-out;
}

.inactif {
    left: -200vw;
}
</style>