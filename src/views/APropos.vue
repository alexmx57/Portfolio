<template>
    <div id="cv-container">
      <div class="top-container">
        <img class="profile-picture" src="/img/alexandre.jpg" alt="Photo Alexandre Meux" />
        <div class="intro-btn">
        <p class="introduction">
          Je m'appelle Alexandre Meux, je suis étudiant en 2ème année de BUT MMI et je suis passionné par l'univers du multimédia. Mes domaines de prédilection sont le développement web et le graphisme. Je suis actuellement à la recherche d'une alternance ou d'un stage pour ma deuxième année de BUT dans le domaine du multimédia.
        </p>
        <RouterLink to="/portfolio/tous"><button class="cta-button">Voir mes projets</button></RouterLink>
      </div>
      </div>
  
      <div id="cv-sections">
        <div class="shape-container">
          <img class="shape" alt="shape" src="/img/shape.png" />
        </div>
        
        <div class="cv-details">
       
          <section id="experiences-section" class="cv-section">
            <div class="section-title">
              <img class="pictogrammes" src="/img/pictogramme/experiences.png" />
              <h3>Expériences</h3>
            </div>
            <ul class="list experience-list">
              <li class="item">
                <h4>2024 : Intervention bénévole | Association La Chorba (Paris 4ème)</h4>
                <ul>
                  <li>Service de plats chauds</li>
                  <li>Préparation de la nourriture</li>
                  <li>Séchage des verreries</li>
                </ul>
              </li>
              <!-- <li class="item">
                <h4>2023 : Création d’un site web (Projet universitaire - IUT Sénart-Fontainebleau)</h4>
                <ul>
                  <li>Création des layouts en CSS</li>
                  <li>Intégration du footer en PHP</li>
                </ul>
              </li> -->
              <li class="item">
                <h4>Création d’une affiche sur les limites planétaires (Projet universitaire)</h4>
                <ul>
                  <li>Création de l’affiche</li>
                  <li>Écriture d’un dossier de production</li>
                </ul>
              </li>
              <!-- <li class="item">
                <h4>Création d’une vidéo sur la détox digitale (Projet universitaire)</h4>
                <ul>
                  <li>Écriture du script</li>
                  <li>Tournage de la vidéo</li>
                  <li>Montage de la vidéo</li>
                </ul>
              </li> -->
              <li class="item">
                <h4>2020 : Stage de 3ème | Pharmacie SINE-NDEFEU (Malakoff)</h4>
                <ul>
                  <li>Trier et classer les produits</li>
                  <li>Débaler et stocker les livraisons</li>
                  <li>Rédiger un rapport de stage</li>
                </ul>
              </li>
            </ul>
          </section>
  
        
          <section id="formations-section" class="cv-section">
            <div class="section-title">
              <img class="pictogrammes" src="/img/pictogramme/formation.png" />
              <h3>Formations</h3>
            </div>
            <ul class="list formation-list">
              <li class="item">
                <h4>BUT Métiers du Multimédia et de l'Internet</h4>
                <ul>
                  <li>2023 - En cours</li>
                  <li>IUT Sénart Fontainebleau (UPEC)</li>
                  <li>Parcours création numérique</li>
                </ul>
              </li>
              <li class="item">
                <h4>Baccalauréat</h4>
                <ul>
                  <li>2023</li>
                  <li>Baccalauréat Général</li>
                  <li>Spécialité LLCE et SES</li>
                </ul>
              </li>
            </ul>
          </section>
  
        
          <section id="interests-section" class="cv-section">
            <div class="section-title">
              <img class="pictogrammes" src="/img/pictogramme/centresInteret.png" />
              <h3>Centres d'intérêts</h3>
            </div>
            <ul class="list interest-list">
                <li class="item">
                <h4>Jeux-vidéos</h4>
                <ul>
                  <li>2023 - En cours</li>
                  <li>IUT Sénart Fontainebleau (UPEC)</li>
                  <li>Parcours création numérique</li>
                </ul>
              </li>
              <li class="item">
                <h4>Football</h4>
                <ul>
                  <li>2023 - En cours</li>
                  <li>IUT Sénart Fontainebleau (UPEC)</li>
                  <li>Parcours création numérique</li>
                </ul>
              </li>
              <li class="item">
                <h4>Programmation</h4>
                <ul>
                  <li>2023 - En cours</li>
                  <li>IUT Sénart Fontainebleau (UPEC)</li>
                  <li>Parcours création numérique</li>
                </ul>
              </li>
            </ul>
          </section>
  
         
          <section id="skills-section" class="cv-section">
            <div class="section-title">
              <img class="pictogrammes" src="/img/pictogramme/divers.png" />
              <h3>Soft Skills</h3>
            </div>
            <ul class="skills-list">
                <li class="item">
                <h4>Calme</h4>
                <ul>
                  <li>2023 - En cours</li>
                </ul>
              </li>
              <li class="item">
                <h4>Polyvalence</h4>
                <ul>
                  <li>2023 - En cours</li>
                </ul>
              </li>
              <li class="item">
                <h4>Rigueur</h4>
                <ul>
                  <li>2023 - En cours</li>
                </ul>
              </li>
              <li class="item">
                <h4>Perfectionnisme</h4>
                <ul>
                  <li>2023 - En cours</li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </template>




<script>

export default {
    name: "APropos"
}


</script>





<style scoped>
main {
    margin: 8rem 0;
}

.profile-picture{
    width:35rem;
}

.top-container {
    display: flex;
    align-items: center;
    text-align: justify;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    gap: 6rem;
    padding: 0 6rem;
    margin-bottom: 12rem;
}

.cta-button{
  margin:2rem 0;
}

.top-container .profile-picture {
    border-radius: 50%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.introduction {
    line-height: 1.5;
    max-width: 800px;
}

#cv-container {
    padding: 5rem 2rem;
}

.cv {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
    margin: 4rem 0;
}

.shape-container .shape {
    width: 25vw;
    margin: 0 auto;
    display: block;
}

.cv-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2vw;
}

#cv-sections{
    display: grid;
    justify-content: center;
    gap:5rem;
    grid-template-columns: 1fr 2fr;
}

.cv-section {
    background: var(--hard-blue);
    border-radius: 10px;
    box-shadow:var(--box-shadow-1);
    padding: 2rem;
}

.section-title {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.section-title img.pictogrammes {
    width: 3.5rem;
    height: auto;
}

.list{
    margin-left: 20px;
}

ul li {
  font-size: 1.33rem;
  font-weight: 400;
  margin:0.25rem 0;
}

.item{
    list-style-type:disc;
}

ul li h4 {
    margin: 0.5rem 0;
}

@media (max-width: 1000px) {
    #cv-sections{
      grid-template-columns: 1fr;
    }
    .top-container{
      flex-direction: column;
    }
  }

/* @media (min-width: 768px) {
    .cv {
        grid-template-columns: repeat(2, 1fr);
    }

    #cv-sections{
      grid-template-columns: 1fr;
    }

    .cv-details {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
} */


/* @media (min-width: 768px) {

} */
</style>