<template>



    <div class="params">
        <form>
            <div class="dark-mode-svg">
                <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px"
                    class="ScIconSVG-sc-1q25cff-1 jpczqG">
                    <g>
                        <path fill-rule="evenodd"
                            d="M8.614 2.134a8.001 8.001 0 001.388 15.879 8.003 8.003 0 007.884-6.635 6.947 6.947 0 01-2.884.62 7.004 7.004 0 01-6.388-9.864zM6.017 5.529a5.989 5.989 0 00-2.015 4.484c0 3.311 2.69 6 6 6a5.99 5.99 0 004.495-2.028 9.006 9.006 0 01-8.48-8.456z"
                            clip-rule="evenodd"></path>
                    </g>
                </svg>
            </div>
            <p class="dark-mode-text">Mode Nocturne</p>
            <div class="toggle-container">
                <input @click="toggleDarkMode" v-model="isDarkMode" type="checkbox" id="toggle" class="toggle-input">
                <label for="toggle" class="toggle-label"></label>
            </div>
        </form>
    </div>



</template>








<script>

export default {

    name: 'ToggleButton',
    data() {
        return {
            isDarkMode: JSON.parse(localStorage.getItem('dark-mode') || false)
        }
    },
    watch: {
        isDarkMode(newValue) {
            localStorage.setItem('dark-mode', JSON.stringify(newValue));
        }
    },
    methods: {
        toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
        }

    }
}

</script>






<style>
.params {
    background: var(--footer-header_bck);
    position: absolute;
    top: 105%;
    right: 0;
    padding: 10px 20px 30px 40px;
    border-radius: 40px 5px 5px 40px;
    border: var(--light-gray-border);
    transition: 1s ease-in;
}

.params p {
    margin: 0 1rem;
}

.params-container {
    display: flex;
}

form {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}


.dark-mode-svg{
    filter: invert(0.85);
    width: 25px;
}

.dark-mode-text{
    font-weight: 600;
}







/* Conteneur global */
.toggle-container {
    display: inline-block;
    position: relative;
    width: 60px;
    height: 30px;
    text-align: left;
}

/* Bouton input (invisible) */
.toggle-input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* Label (le visuel du bouton) */
.toggle-label {
    position: absolute;
    cursor: pointer;
    background-color: #ff000000;
    border-radius: 30px;
    width: 50px;
    height: 30px;
    transition: background-color 0.3s ease;
    border: 2px solid var(--gray);
    transform: scale(0.8);
}

/* Rond du toggle */
.toggle-label::after {
    content: "";
    position: absolute;
    background-color: var(--gray);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    top: 3px;
    left: 3px;
    transition: transform 0.3s ease;
}

/* Styles activés */
.toggle-input:checked+.toggle-label {
    background-color: none;
}

.toggle-input:checked+.toggle-label::after {
    transform: translateX(20px);
}
</style>