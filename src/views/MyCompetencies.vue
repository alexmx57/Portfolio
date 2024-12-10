<template>
    <div class="page">



        <form>
            <h2>COMPÉTENCES</h2>
            <p>Durant mes deux premières années d'études j'ai eu l'occasion d'apprendre de nombreuses nouvelles
                compétences variées et chargées, retrouvez les ci-dessous.</p>
            <label for="search-bar"> <input id="search-bar" type="text" v-model="searchQuery"
                    placeholder="Rechercher une compétence ou un domaine" /></label>

        </form>


        <transition mode="out-in" name="fade">
            <div v-if="filteredCategories.length === 0" class="no-results">
                <h2>Aucun résultat trouvé pour "{{ searchQuery }}".</h2>
            </div>
        </transition>


        <transition-group mode="out-in" name="fade" tag="div" class="categories">
            <div v-for="category in filteredCategories" :key="category.domain" class="category">
                <h3 class="domain-title">{{ category.domain }}</h3>
                <div class="skill-collection">
                    <div v-for="skill in category.skills" :key="skill.id" class="skill">
                        <div class="top-part">
                            <div>
                                <h4 class="skill-title">{{ skill.title }}</h4><span id="lieu">{{ skill.place }}</span>
                            </div>
                            <img width="55" :src="'/img/pictogramme/competences/' + skill.image">
                        </div>
                        <div class="bottom-part">
                            <p>{{ skill.description }}</p>
                            <div>
                                <button>Voir</button><span id="level">Level {{ skill.level }}</span>
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
    name: "MyCompetencies",
    data() {
        return {
            searchQuery: "",
            categories: [
                {
                    domain: "Langages de programmation",
                    skills: [
                        { id: 1, title: "PHP", place: 'IUT Sénart-Fontainebleau', image: 'php.png', description: "Compétences utilisé à l'iut sénart fontainebleau", level: "5" },
                        { id: 2, title: "JavaScript", place: 'IUT Sénart-Fontainebleau', image: 'js.png', description: "Compétences en développement web", level: "4" }
                    ]
                },
                {
                    domain: "Graphisme",
                    skills: [
                        { id: 3, title: "Photoshop", place: 'Projet personnel', image: 'photoshop.png', description: "Création et retouche d'images", level: "3" },
                        { id: 4, title: "Illustrator", place: 'Projet personnel', image: 'illustrator.png', description: "Création vectorielle", level: "4" }
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
                        skill.title.toLowerCase().includes(searchQuery) ||
                        skill.description.toLowerCase().includes(searchQuery)
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
.page {
    min-height: 125vh;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.25s cubic-bezier(0.77, 0, 0.175, 1);
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

.fade-move {
    transition: all 0.25s cubic-bezier(0.77, 0, 0.175, 1);
}

#search-bar {
    padding: 10px;
    font-size: 1.5rem;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-sizing: border-box;
    color: black;
}

.no-results {
    text-align: center;
    margin: 20rem 0;
}

.domain-title {
    margin: 12px 0;
}

.categories {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    margin: 10rem 0;
}

.skill-collection {
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    justify-content: flex-start;
}

.top-part {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 15px;
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
    color: gray;
}

.skill p {
    color: rgb(213, 213, 213);
    font-size: 1.33rem;
}

.skill {
    border: var(--light-gray-border);
    padding: 20px;
    border-radius: 12px;
    width: 30rem;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
    cursor: pointer;
}

.skill:hover {
    background: var(--footer-header_bck);
}

.bottom-part div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}
</style>