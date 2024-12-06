<template>
    <footer>
        <div class="footer">
            <div class="outer-footer">




                <div class="navigation left-footer">
                    <p class="navigation-title gray-bck">Plan du site</p>
                    <ul>
                        <li>
                            <RouterLink class="footer-links" to="/aPropos">À propos</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="footer-links" to="/competences">Compétences</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="footer-links" to="/portfolio">Portfolio</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="footer-links" to="/contact">Contact</RouterLink>
                        </li>
                    </ul>


                    <a class="cv-download centered footer-cta" href="public/file/CV_Alexandre-MEUX.pdf"
                        download="CV_Alexandre-MEUX.pdf">
                        <button class="centered">
                            <div>Télécharger Mon CV</div><img class="plus" alt="plus image"
                                src="/img/pictogramme/download.svg">
                        </button>
                    </a>
                </div>




                <div class="middle-footer">
                    <div class="logo-sentence flex-column-center">
                        <RouterLink href="/">
                            <img class="logo" width="125" src="/img/am.png" alt="Logo">
                        </RouterLink>
                        <p class="gray">Restons connectés pour ne rien manquer</p>
                    </div>
                </div>





                <div class="navigation right-footer">
                    <p class="navigation-title gray-bck">Contact</p>
                    <ul>
                        <li><a class="footer-links"><u>Téléphone:</u>07 50 57 84 84</a></li>
                        <li><a class="footer-links"><u>E-mail:</u>alexandre.meux@etu.u-pec.fr</a></li>
                        <li><a class="footer-links">LinkedIn</a></li>
                        <li><a class="footer-links">Contact</a></li>
                    </ul>
                    <div class="send-mail flex footer-cta">
                        <input type="text" placeholder="M'envoyer un mail">
                        <div class="send-cta">
                            <img width="30" src="/img/pictogramme/correct.png">
                        </div>
                    </div>
                </div>



                <div class="bottom-footer">
                    <hr>
                    <p class="right-reserved">©Alexandre MEUX – Tous droits réservés | 2024</p>
                </div>



            </div>
        </div>
    </footer>
</template>










<script>

export default {
    name: 'TheFooter'
}


</script>












<style scoped>
.footer {
    border-top: var(--light-gray-border);
    background: var(--footer-header_bck);
    backdrop-filter: var(--bck-blur);
    padding: 0.5rem;
}

.outer-footer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 4fr 1fr;
    justify-items: center;
    align-items: center;
}

.footer-links {
    white-space: nowrap;
    font-family: "Roboto Flex";
    font-size: 1.5rem;
    margin: 0.5rem 0;
    cursor: pointer;
}

.bottom-footer {
    grid-row: 2;
    grid-column: 1/4;
    align-self: stretch;
    justify-self: stretch;

}

.middle-footer {
    order: -1;
}

.logo-sentence {
    gap: 2rem;
}

.navigation {
    margin: 2rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.navigation li {
    margin: 0.5rem 0;
}

.right-reserved {
    margin: 20px 0;
    text-align: center !important;
}

.footer-links:hover {
    font-weight: var(--font-weight-extrabold);
    color: var(--yellow-white)
}

.logo-sentence p {
    text-align: center !important;
    text-transform: uppercase;
    color: var(--yellow-white);
    font-weight: 100;
    transition: 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.logo-sentence p:hover {
    cursor: pointer;
    font-weight: 600;
}


.footer-cta {
    margin-top: 2rem;
}

.send-cta {
    display: grid;
    place-items: center;
    background: var(--black);
    margin: 0 15px;
    width: 5rem;
    height: 5rem;
    border: var(--light-white-border);
    border-radius: var(--circle-radius);
    transition: 0.15s;
}

.send-cta img {
    filter: brightness(100);
}

.send-cta:hover {
    background: var(--gray);
}

.href {
    transition: 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

.navigation-title {
    background: var(--gray);
    padding: 4px;
    margin-bottom: 1.15rem;
    transition: transform 0.2s cubic-bezier(0.47, 0, 0.745, 0.715);
    cursor: pointer;
    border-radius: 6px;
    font-weight: 800;
    font-size: 1.425rem;
}

.navigation-title:hover {
    transform: scale(1.1);
    font-weight: 900;
}







/*MEDIA QUERIES*/

@media (max-width:900px) {
    footer .logo {
        width: 80px;
    }
}


@media (max-width:650px) {
    .outer-footer {
        display: flex;
        justify-items: center;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: 4rem;
        padding: 2rem 0;
    }
}


@media (max-width:600px) {
    footer .logo {
        width: 70px;
    }
}

@media (max-width:400px) {
    footer .logo {
        width: 60px;
    }

    .navigation {
        padding-left: 3vw;
    }
}
</style>