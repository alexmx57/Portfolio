<template>
    <header id="header">

        <!-- Logo and Navbar -->
        <div class="logo-navbar centered">
            <!-- Menu Icon -->
            <div 
                @click="this.isActive = !this.isActive" 
                class="menu" 
                style="width: 32px; height: 100%; display: block; fill: currentcolor;">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    width="24" 
                    focusable="false" 
                    style="pointer-events: none; display: inherit; width: 100%; height: 100%;">
                    <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
                </svg>
            </div>

            <!-- Logo -->
            <RouterLink to="/">
                <img class="logo" width="45" src="/img/am.png" alt="Logo">
            </RouterLink>
        </div>

        <!-- Name -->
        <h3 class="name">Alexandre MEUX</h3>

        <!-- Right Header Section -->
        <div class="right-header centered">

            <!-- Social Media Icons -->
            <div class="social-media-header centered">

                <!-- Email Icon -->
                <div class="social-media-img-container">
                    <img 
                        @mouseout="activeEmail = false" 
                        @mouseover="activeEmail = true" 
                        class="mail" 
                        width="30" 
                        src="/img/pictogramme/email.svg">
                </div>

                <!-- LinkedIn Icon -->
                <div class="social-media-img-container">
                    <img 
                        @mouseout="activeLinkedIn = false" 
                        @mouseover="activeLinkedIn = true" 
                        class="linkedIn" 
                        width="35" 
                        src="/img/pictogramme/linkedIn.png">
                </div>

                <!-- Phone Icon -->
                <div class="social-media-img-container">
                    <img 
                        @mouseout="activePhone = false" 
                        @mouseover="activePhone = true" 
                        class="phone" 
                        width="30" 
                        src="/img/pictogramme/phone.png">
                </div>
            </div>

            <!-- Parameters Component -->
            <Parameters />
        </div>

        <!-- Responsive Navbar -->
        <Transition name="fade-slide" mode="in-out">
            <div v-if="isActive" class="navbar-responsive">
                <div class="navbar-responsive-container">

                    <!-- Logo and Close Button -->
                    <div class="logo_menu">
                        <p class="navbar-responsive-title gray-bck">Menu</p>
                        <RouterLink to="/">
                            <img class="logo" width="55" src="/img/am.png" alt="Logo">
                        </RouterLink>
                        <span @click="isActive = !isActive" class="close-btn">✖</span>
                    </div>

                    <!-- Navbar Links -->
                    <div class="navbar-responsive-list-container">
                        <ul class="navbar-responsive-list">
                            <li>
                                <img class="pictogramme-header" src="/img/pictogramme/header/home.svg">
                                <RouterLink 
                                    active-class="active-header-link" 
                                    class="header-links" 
                                    to="/">
                                    Accueil
                                </RouterLink>
                            </li>
                            <li>
                                <img class="pictogramme-header" src="/img/pictogramme/header/aPropos.svg">
                                <RouterLink 
                                    active-class="active-header-link" 
                                    class="header-links" 
                                    to="/a-propos">
                                    À propos de moi
                                </RouterLink>
                            </li>
                            <li>
                                <img src="/img/pictogramme/header/stars.svg" class="pictogramme-header">
                                <RouterLink 
                                    active-class="active-header-link" 
                                    class="header-links" 
                                    to="/competences">
                                    Compétences
                                </RouterLink>
                            </li>
                            <li>
                                <img src="/img/pictogramme/header/portfolio.png" class="pictogramme-header">
                                <RouterLink 
                                    active-class="active-header-link" 
                                    class="header-links" 
                                    to="/portfolio/tous">
                                    Portfolio
                                </RouterLink>
                            </li>
                            <li>
                                <img src="/img/pictogramme/header/contact.svg" class="pictogramme-header">
                                <RouterLink 
                                    active-class="active-header-link" 
                                    class="header-links" 
                                    to="/contact">
                                    Contact
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Transition>

    </header>
</template>







































<script>
import Parameters from './Parameters.vue';


export default {
    name: 'TheHeader',
    components: {
        Parameters
    },
    data() {
        return {
            isActive: false,
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
}




</script>


























<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all .25s cubic-bezier(0.23, 1, 0.320, 1);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
transform: scale(0.5) translateX(100vw);
  opacity: 0;
}

.active-header-link {
    transition: 0.25s ease-out;
    /* background-color: var(--gray);
    border-radius: 8px;
    padding: 6px; */
    text-decoration: underline;
    color:var(--yellow-white);
    font-weight:800 !important;
}

header {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 10000;
    transition: all 0.75s ease;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    align-items: center;
    background: var(--hard-blue);
    backdrop-filter: var(--bck-blur);
    border-bottom: var(--light-gray-border);
}

.navbar-responsive-container ul {
    min-width: 130px;
}

.navbar-responsive-container a:hover:after {
    transform: scale(1);
}

.header-links {
    white-space: nowrap;
    font-size: 15px;
    font-family: var(--font-text);
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header-links:hover {
    color: var(--yellow-white);
    font-weight: 800;
}

.navbar-responsive-container li {
    margin: 18px 0;
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
    padding: 0.25rem 1.25rem;
    justify-self: flex-end;
    margin-right: 0.5rem;
    gap: .8rem;
    border-radius: 10px;
}

.social-media-header img{
    filter:invert(1)
}

.right-header {
    justify-self: flex-end;
    margin-right: 1rem;
}

.name {
    transition: 0.15s cubic-bezier(0.075, 0.82, 0.165, 1);
    justify-self: center;
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
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
}

.navbar-responsive-container {
    width: 30rem;
    padding: 20px;
    background: var(--hard-blue);
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
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
}

.close-btn {
    cursor: pointer;
    font-size: 15px;
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: 8px;
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

/* .actif {
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
    transition: 0.1s ease-out;
}

.inactif {
    left: -200vw;
} */

@media (max-width:605px){
    .name {
        opacity: 0;
    }
}
</style>