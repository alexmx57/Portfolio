<template>
  
    <div class="cv">


        <div class="shape-container"><img class="shape" alt="shape" src="/img/shape.png"></div>

        <div class="cv-details">



            <div class="cv-section">
                <div class="title">
                    <img class="pictogrammes" src="/img/pictogramme/experiences.png">
                    <h3>Expériences</h3>
                </div>
            </div>




            <div class="cv-section">
                <div class="title">
                    <img class="pictogrammes" src="/img/pictogramme/formation.png">
                    <h3>Formations</h3>
                </div>
            </div>




            <div class="cv-section">
                <div class="title">
                    <img class="pictogrammes" src="/img/pictogramme/centresInteret.png">
                    <h3>Centres d'intérêts</h3>
                </div>
            </div>




            <div class="cv-section">
                <div class="title">
                    <img class="pictogrammes" src="/img/pictogramme/divers.png">
                    <h3>Divers</h3>
                </div>
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

.cv {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
    width: 100%;
    margin: 8rem 0;
}

.cv .shape-container .shape {
    max-width: 320px;
}

.cv-details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: flex-start;
    gap: 12rem;
    align-items: center;
}

.pictogrammes {
    max-width: 50px;
    margin: 0 2rem;
}

.title {
    display: flex;
    align-items: flex-end;
}
</style>