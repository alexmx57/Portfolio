<template>

    <h1 v-on:mousemove="increment()">VIDEO</h1>
    <p>{{ v }}</p>
    <p v-for="entry in entries" :key="entry">{{ entry.name + ' ' + entry.id }}</p>
    <input v-model="i">
    <p>{{ i }}</p>
    <h1 v-show="visible">VRAI</h1>
    <button @click="changeMessage">{{ msg }}</button>
    <button @click="isVisible = !isVisible">Afficher/Cacher le Message</button>
    <h3 v-if="isVisible">Ceci est visible</h3>
</template>


<script>



export default {
    components: {

    },
    data() {
        return {
            v: 1,
            entries: [{ name: "bottle", id: 1 }, { name: "plate", id: 2 }],
            i: "",
            visible: false,
            msg: "Cliquez-moi",
            isVisible: false
        }
    },
    methods: {
        increment() {
            this.v++
        },
        changeMessage() {
            this.msg = "Vous avez cliqué sur le bouton"
        }
    }
};



</script>