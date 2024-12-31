<template>
    <div class="page">


<div class="banner">
    <div class="banner-content">

        <form>
            <h1>COMPÉTENCES</h1>
            <p>Durant mes deux premières années d'études j'ai eu l'occasion d'apprendre de nombreuses nouvelles
                compétences variées et chargées, retrouvez les ci-dessous.</p>
            <label id="search-bar"><input class="mobile__recherche__btn" type="image"
                    src="https://www.u-pec.fr/images/loupe2.svg" alt="" aria-label="Lancer la recherche"><input
                     type="text" v-model="searchQuery"
                    placeholder="Rechercher une compétence ou un domaine" />
            </label>
        </form>
</div>
</div>



        <transition mode="out-in" name="fade">
            <div v-if="filteredCategories.length === 0" class="no-results">
                <h2>Aucun résultat trouvé pour "{{ searchQuery }}".</h2>
            </div>
        </transition>






        <transition-group mode="in-out" name="fade" tag="div" class="categories">
            <div v-for="category in filteredCategories" :key="category.domain" class="category">
                <h3 class="domain-title">{{ category.domain }}</h3>
                <div class="skill-collection">
                    <div :id="'skill-' + skill.id" v-for="skill in category.skills" :key="skill.id" class="skill">
                        <div class="top-part">
                            <div>
                                <h4 class="skill-title">{{ skill.title }}</h4><span class="span">{{ skill.place }}</span>
                            </div>
                            <img width="35" :src="'/img/pictogramme/competences/' + skill.image">
                        </div>
                        <div class="bottom-part">
                            <p>{{ skill.description }}</p>
                           
                           
                             <div>
                                <button>Projet associé</button><span class="span">Level {{ skill.level }}<div class="level-indicator"><span v-for="n in 10" :key="n" class="circle" :class="{ active: n <= skill.level }"></span>
                             </div></span>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </transition-group>





    </div>




</template>













<script>

export default {
    name: "Competencies",
    data() {
        return {
            searchQuery: "",
            categories: [
    {
        domain: "Langages informatique",
        skills: [
            { 
                id: 1, 
                title: "PHP", 
                place: 'IUT Sénart-Fontainebleau', 
                image: 'php.png', 
                description: "Langage utilisé pour le développement backend.", 
                level: "5" 
            },
            { 
                id: 2, 
                title: "JavaScript", 
                place: 'IUT Sénart-Fontainebleau', 
                image: 'js.svg', 
                description: "Langage central pour le développement web interactif et dynamique.", 
                level: "6" 
            },
            { 
                id: 3, 
                title: "CSS", 
                place: 'IUT Sénart-Fontainebleau', 
                image: 'css.svg', 
                description: "Utilisé pour le design et la mise en page des sites web.", 
                level: "8" 
            },
            { 
                id: 4, 
                title: "HTML", 
                place: 'IUT Sénart-Fontainebleau', 
                image: 'HTML.svg', 
                description: "Langage de base pour structurer les pages web.", 
                level: "7" 
            }
        ]
    },
    {
        domain: "Graphisme",
        skills: [
            { 
                id: 5, 
                title: "Photoshop", 
                place: 'Projet personnel', 
                image: 'photoshop.png', 
                description: "Logiciel pour la retouche et la création d’images.", 
                level: "3" 
            },
            { 
                id: 6, 
                title: "Illustrator", 
                place: 'Projet personnel', 
                image: 'illustrator.png', 
                description: "Outil de création graphique vectorielle.", 
                level: "4" 
            }
        ]
    },
    {
        domain: "Audiovisuel",
        skills: [
            { 
                id: 7, 
                title: "After Effects", 
                place: 'Projet personnel', 
                image: 'aftereffects.png', 
                description: "Logiciel pour créer des animations et des effets spéciaux.", 
                level: "4" 
            },
            { 
                id: 8, 
                title: "Premiere Pro", 
                place: 'Projet personnel', 
                image: 'premierepro.png', 
                description: "Montage vidéo pour des projets variés.", 
                level: "6" 
            },
            { 
                id: 9, 
                title: "Audition", 
                place: 'Projet personnel', 
                image: 'audition.png', 
                description: "Retouche et montage audio professionnel.", 
                level: "6" 
            },
            { 
                id: 10, 
                title: "Audacity", 
                place: 'Projet personnel', 
                image: 'audacity.png', 
                description: "Edition audio simple et efficace.", 
                level: "6" 
            }
        ]
    },
    {
        domain: "3D",
        skills: [
            { 
                id: 11, 
                title: "Maya Autodesk", 
                place: 'Projet personnel', 
                image: 'maya.webp', 
                description: "Création et modélisation 3D pour des projets personnels.", 
                level: "3" 
            }
        ]
    },
    {
        domain: "Framework",
        skills: [
            { 
                id: 12, 
                title: "Vue.js", 
                place: 'Projet personnel', 
                image: 'vuejs.ico', 
                description: "Framework JavaScript pour créer des interfaces utilisateur dynamiques.", 
                level: "3" 
            }
        ]
    },
    {
        domain: "CMS",
        skills: [
            { 
                id: 13, 
                title: "WordPress", 
                place: 'Projet personnel', 
                image: 'wordpress.png', 
                description: "Plateforme pour la création de sites web et de blogs.", 
                level: "6" 
            }
        ]
    },
    {
        domain: "Prototypage",
        skills: [
            { 
                id: 14, 
                title: "Axure RP", 
                place: 'Projet personnel', 
                image: 'axure.png', 
                description: "Conception de prototypes interactifs.", 
                level: "5" 
            },
            { 
                id: 15, 
                title: "Figma", 
                place: 'Projet personnel', 
                image: 'figma.png', 
                description: "Création de maquettes et de designs collaboratifs.", 
                level: "2" 
            }
        ]
    },
    {
        domain: "Mise en page / Présentation",
        skills: [
            { 
                id: 16, 
                title: "Canva", 
                place: 'Projet personnel', 
                image: 'canva.png', 
                description: "Conception graphique accessible pour des visuels.", 
                level: "5" 
            },
            { 
                id: 17, 
                title: "Word", 
                place: 'Projet personnel', 
                image: 'word.png', 
                description: "Logiciel pour la création de documents texte.", 
                level: "2" 
            },
            { 
                id: 18, 
                title: "PowerPoint", 
                place: 'Projet personnel', 
                image: 'powerpoint.png', 
                description: "Création de présentations dynamiques.", 
                level: "2" 
            },
            { 
                id: 19, 
                title: "InDesign", 
                place: 'Projet personnel', 
                image: 'indesign.png', 
                description: "Mise en page avancée pour publications imprimées ou numériques.", 
                level: "2" 
            }
        ]
    },
    {
        domain: "Animation",
        skills: [
            { 
                id: 20, 
                title: "Animate", 
                place: 'Projet personnel', 
                image: 'animate.png', 
                description: "Création d'animations interactives et graphiques.", 
                level: "5" 
            }
        ]
    },
    {
        domain: "Déploiement de services",
        skills: [
            { 
                id: 21, 
                title: "Docker", 
                place: 'Projet personnel', 
                image: 'docker.png', 
                description: "Conteneurisation d’applications pour le déploiement rapide.", 
                level: "5" 
            },
            { 
                id: 22, 
                title: "Wamp", 
                place: 'Projet personnel', 
                image: 'wamp.png', 
                description: "Serveur local pour le développement web.", 
                level: "5" 
            },
            { 
                id: 23, 
                title: "Filezilla", 
                place: 'Projet personnel', 
                image: 'filezilla.png', 
                description: "Client FTP pour transférer des fichiers vers des serveurs distants.", 
                level: "5" 
            }
        ]
    }
]
        };
    },
    computed: {
        filteredCategories() {
            const searchQuery = this.searchQuery.toLowerCase();

            return this.categories
                .map(category => {
                    const matchesDomain = category.domain.toLowerCase().includes(searchQuery);
                    const filteredSkills = category.skills.filter(skill =>
                        skill.title.toLowerCase().includes(searchQuery)
                    );
                    
                    return matchesDomain
                        ? { ...category, skills: category.skills }
                        : { ...category, skills: filteredSkills };
                        
                })
                .filter(category => category.skills.length > 0);
        }
    }
}


</script>











<style scoped>

.banner {
    width: 100%;
    min-height: 50rem;
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(/public/img/banniere2.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
    color: white;
    box-shadow: -5px 3px 15px black;
}


.banner-content {
    max-width: 800px;
    margin: 0 auto;
}

.level-indicator {
    display: flex;
    gap: 5px;
    align-items: center;
    margin-right: 10px;
}

.circle {
    width: 0.55rem;
    height: 0.55rem;
    border-radius: 50%;
    background-color: #dedede; /* Couleur pour les ronds inactifs */
    transition: all 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

.circle.active {
    background-color: rgb(0, 255, 17); /* Couleur pour les ronds actifs */
}

.circle.active:hover{
    background: rgb(255, 0, 0);
}


form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
}

form p {
    padding: 0 16rem;
}


.page {
    min-height: 125vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.4) translateY(20px);
}

.fade-move {
  transition: transform 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

#search-bar {
    padding: 0.8rem;
    margin-bottom: 20px;
    border-radius: 7px 7px 0 0;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    background: var(--yellow-white);
    border: 1px solid var(--gray);
    display: flex;
    align-items: center;
    justify-content: center;
}

#search-bar input[type="text"]{
    background: none;
    border: 0;
    outline: none;
    min-width:45rem;
}

#search-bar input[type="image"]{
    width:2.5rem;
    filter: invert(1);
}

.no-results {
    text-align: center;
    margin: 20rem 0;
}

.domain-title {
    margin: 12px 0;
    padding-left: 15px;
}

.categories {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
    margin: 5rem;
    flex-wrap: wrap
}

.category{
    display: flex;
    flex-direction: column;
    width: 100%;
}

.skill-collection {
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
}

.top-part {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 15px;
    flex-wrap: wrap;
}

.skill-title {
    margin-bottom: 5px;
    transition: 0.2s cubic-bezier(0.23, 1, 0.320, 1);
}

.skill:hover .skill-title {
    text-decoration: underline;
    font-weight: 900;
}

.skill span {
    color: var(--gray);
}

.skill p {
    color: rgb(213, 213, 213);
    font-size: 1.33rem;
}

.skill {
    border: var(--light-gray-border);
    padding: 2rem;
    border-radius: 12px;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
    cursor: pointer;
    width: 30rem;
}

.skill:hover {
    background: var(--footer-header_bck);
}

.bottom-part div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    flex-wrap: wrap;
    gap:4px;
}

@media(max-width:412px){
    .skill-collection{
        justify-content: center;
    }
    .category{
        align-items: center;
    }
    .domain-title{
        padding-left: 0;
    }
}
</style>