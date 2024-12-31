<template>
   <div class="grid" id="portfolio-grid">
    <div class="block flex-column" id="intro-section">
        <div class="block1 flex-column" id="header-block">
            <h1 class="title" id="main-title">Mon Portfolio</h1>
            <h2 id="name">Alexandre Meux</h2>
            <h3><i class="gray" id="job-title">Un développeur web</i> et bien d'autres</h3>
        </div>
        <div class="block2 flex-column" id="bio-section">
            <p id="bio-text">Je m'appelle Alexandre Meux, je suis étudiant en BUT MMI
                et je suis passionné par l'univers du multimédia et d'Internet. Mes domaines de prédilection sont le
                développement web et le graphisme.
                Je suis actuellement à la recherche d'une alternance pour ma deuxième année de BUT.
            </p>
            <div class="social-media flex" id="social-media-links">
                <div class="social-media-item" id="linkedin">
                    <a class="centered" href="https://www.linkedin.com/in/alexandre-meux-2ba28a29b" target="_blank">
                        <img class="linkedIn" width="40" src="/img/pictogramme/linkedIn.png" alt="LinkedIn">
                    </a>
                </div>
                <div class="social-media-item" id="email">
                    <a class="centered" href="mailto:alexandre.meux@etu.u-pec.fr" target="_blank">
                        <img class="mail" width="40" src="/img/pictogramme/email.svg" alt="Email">
                        <p>alexandre.meux@etu.u-pec.fr</p>
                    </a>
                </div>
                <div class="social-media-item" id="phone">
                    <a class="centered" href="tel:+33750578484" target="_blank">
                        <img class="phone" width="40" src="/img/pictogramme/phone.png" alt="Phone">
                        <p>07 50 57 84 84</p>
                    </a>
                </div>
            </div>
            <RouterLink class="cta-btn" :to="links[rand]" id="view-more-link">
                <button class="centered" id="view-more-btn">Voir Plus
                    <img class="plus" alt="plus image" src="/img/pictogramme/plus.svg">
                </button>
            </RouterLink>
        </div>
    </div>
    <div class="card" id="profile-card">
        <div class="card-inner centered" id="card-inner">
            <div class="card-front" id="card-front">
                <img class="scroll-fade front" src="/img/hero-img.png" width="300" alt="photo Alexandre MEUX" id="profile-image">
            </div>
            <div class="card-back" id="card-back">
                <h3 id="date">11 septembre 2023</h3>
            </div>
        </div>
    </div>
</div>



    <!--<div class="popUp">
    <div class="content">
        <h1>Pop-Up</h1>
        <p>Vous avez déclenché le pop-up</p>
        <button onclick="closePopUp()">Fermer</button>
        <span onclick="closePopUp()" class="close">&#10006;</span>
    </div>
</div>
-->


</template>














<script>





export default {
    name: 'HomePage',
    data() {
        return {
            rand: null,
            links: [
                '/portfolio/graphisme',
                '/portfolio/audiovisuel',
                '/portfolio/developpement-web',
                '/portfolio/ui-ux',
                '/portfolio/tous',
                '/competences',
                '/a-propos',
                '/contact'
            ]
        }
    },
    created() {
        this.rand = Math.floor(Math.random() * this.links.length);
    }
};





</script>
















<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
}

.block {
    gap: 4rem;
    padding: 12% 4%;
}

.social-media div a {
    background: var(--white);
    opacity: 0.7;
    transition: all 0.25s ease-in;
    border-radius: var(--circle-radius);
    border: var(--double-gray);
    white-space: nowrap;
}

.social-media div a:hover {
    z-index: 10;
    transform: scale(1.1);
    opacity: 1;
}

.block1,
.block2 {
    gap: 2.5rem;
    align-items: flex-start;
}

.social-media {
    gap: 2rem;
    flex-wrap: wrap;
}

.social-media p {
    color: black;
    padding: 0.2rem 0.8rem;
    text-transform: lowercase;
}












.card img {
    width: 40rem;
    border: 6px ridge var(--gray);
}

.card {
    perspective: 1000px;
    transition: all 0.15s ease;
    background: var(--yellow-white);
    height: -webkit-fill-available;
    padding: 10rem 0;
    display: grid;
    place-items: center;
    border-left: var(--light-gray-border);
    min-height: 75vh;
}

.card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    cursor: pointer;
}

.card:hover .card-inner .card-front{
    transform: scale(1.125) rotateX(32deg) rotateY(22deg);
    box-shadow: 1px 1px 15px 6px black;
}

.card-front,
.card-back {
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s cubic-bezier(0.18, 1.41, 0.32, 1.27);
}

.card-back {
    transform: rotateY(180deg);
    background: var(--bck);
    border: var(--double-white);
    min-height: 350px;
    min-width: 350px;
}


p {
    text-align: justify;
}











@media (max-width:935px) {
    .grid {
        display: flex;
        flex-direction: column-reverse;
    }

    .card {
        border-left: 0;
        border-bottom: var(--light-gray-border);
    }
}
















/* POP-UP */

.popUp {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    background-color: rgba(0, 0, 0, 0.519);
    z-index: 1000000;
    display: none;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    background: rgb(0, 0, 0);
    border: var(--double-white);
    padding: 2%;
    border-radius: 10px;
}

.close {
    position: absolute;
    cursor: pointer;
    top: 10px;
    right: 20px;
    font-size: 2.4rem;
    border-radius: 100px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.close:hover {
    background: var(--bck);
    border: 1px solid white;
}
</style>