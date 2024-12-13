<template>

  <div @scroll="handleScroll" id="main">




    <TheHeader />


    <RouterView />


    <TheFooter />



    <div @click="scrollTop" :class="{ scroll_arrow_visible: activeArrow }" class="scroll-arrow">↑
    </div>



  </div>



</template>













<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';


export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  },
  data() {
    return {
      activeArrow: false
    }
  },
  methods: {
    handleScroll() {
      const scrollPosition = document.querySelector('#main').scrollTop;
      this.activeArrow = scrollPosition >= 10;
    },
    scrollTop() {
      document.querySelector('#main').scrollTop = 0;
    },
  }
}

</script>









<style>
@import url('https://fonts.googleapis.com/css2?family=Advent+Pro:ital,wght@0,100..900;1,100..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Advent+Pro:ital,wght@0,100..900;1,100..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap');


.fade-enter-active,
.fade-leave-active {
  transition: 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

#main {
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}


input[type="text"] {
  font-family: "Roboto Flex";
  color: var(--white);
  letter-spacing: 1px;
  font-size: 1.7rem;
  padding: 1.2rem 1rem;
  display: flex;
  align-items: center;
}


p {
  font-size: 1.75rem;
}


a {
  color: var(--white);
  transition: 0.2s ease-in;
}

u {
  text-decoration: underline;
  font-weight: var(--font-weight-midbold);
  padding-right: 0.45rem;
  font-family: 'Roboto Flex';
  color: var(--yellow-white);
  letter-spacing: 0;
  font-size: 1.65rem;
}

h4 {
  font-size: 1.5rem;
}

h3 {
  font-size: 2.5rem;
}

h2 {
  font-size: 5rem;
  font-weight: var(--font-weight-bold);
}

h1 {
  font-size: 10rem;
  color: var(--gray);
  font-weight: var(--font-weight-black);
  text-transform: uppercase;
}

h1,
h2 {
  font-family: "Advent Pro";
  color: rgb(90, 106, 121);
  letter-spacing: 1.5px;
}

h3,
h4 {
  font-family: "Roboto Flex";
  color: var(--yellow-white);
  letter-spacing: -0.5px;
  font-weight: 700;
}


button {
  font-family: 'Roboto Flex';
  font-weight: 900;
  border-radius: 10px;
  padding: 8px;
  background: #141428;
  color: rgb(238, 238, 238);
  border: 1px solid rgb(90, 106, 121);
  transition: 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  white-space: nowrap;
  cursor: pointer;
}


button:hover {
  background: rgb(90, 106, 121);
}

.plus {
  filter: invert(1);
  width: 1.75rem;
  margin-left: 0.75rem;
}




:root {
  --bg-color-smooth-dark-grey-1: radial-gradient(circle,
      rgba(53, 51, 54, 1) 0%,
      rgba(0, 0, 0, 1) 100%);
  --bg-color-smooth-dark-grey-2: radial-gradient(circle,
      rgba(0, 0, 0, 1) 50%,
      rgba(45, 52, 54, 1) 100%);

  --bg-color-soursweet: radial-gradient(circle,
      rgba(252, 176, 69, 1) 50%,
      rgba(255, 101, 11, 1) 100%);
  --bg-color-smooth-dark-grey-conic: conic-gradient(from 338deg at 50% 50%,
      #000000 0%,
      #696b74 23%,
      #000000 75%);







  /**   BORDER - RADIUS    **/



  --circle-radius: 100px;
  --radius-4: 4px;
  --radius-8: 8px;
  --radius-12: 12px;
  --radius-16: 16px;
  --radius-20: 20px;






  /**   FONT - WEIGHT    **/


  --font-weight-extrabold: 900;
  --font-weight-black: 800;
  --font-weight-bold: 700;
  --font-weight-midbold: 500;
  --font-weight-light: 300;
  --font-weight-extralight: 100;








  /**   PRIMARY COLORS   **/

--light-blue:#1D1D2C;
  --black: hsl(0, 0%, 0%);
  --gray: rgb(90, 106, 121);
  --white: hsl(0, 0%, 100%);
  --yellow-white: rgb(243 234 187);







  /**   BACKGROUNDS    **/


  --bck: rgb(0, 0, 0);
  --footer-header_bck: #141428;
  --transparent-bck: rgba(0, 0, 0, 0.2);
  --gray-hover: rgba(90, 106, 121, 0.6);







  /**   BORDERS   **/

  /**  DOUBLE BORDERS  **/

  --double-gray: 0.5rem double var(--gray);
  --double-white: 0.5rem double var(--white);
  --double-black: 0.5rem double var(--black);

  /**  SOLID BORDERS  **/

  --light-gray-border: 0.1rem solid var(--gray);
  --light-white-border: 0.1rem solid var(--white);
  --light-black-border: 0.1rem solid var(--black);










  /** BLUR **/

  --bck-blur: blur(10px);
}


body {
  font-family: 'Roboto Flex';
  background: var(--light-blue);
  color: rgb(236, 236, 236);
  overflow-x: hidden;
}



*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  list-style-type: none;
  text-decoration: none;
  scroll-behavior: smooth;
  box-sizing: border-box;
}

*::selection {
  background: var(--gray);
  color: var(--white);
}

html {
  font-size: 10px;
}

hr {
  background: rgba(243, 234, 187, 0.2);
  height: 1px;
  border: 0;
}


input:focus {
  border: var(--light-black-border)
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.flex-column-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.flex {
  display: flex;
}

.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}

.gray {
  color: var(--gray);
}

.uppercase {
  text-transform: uppercase;
}

.logo {
  transition: 0.1s ease-out;
  margin: 0 10px;
}

.logo:hover {
  transform: scale(1.075);
}


.gray-bck {
  background: var(--gray);
  padding: 4px;
  margin-bottom: 1.15rem;
  transition: 0.2s cubic-bezier(0.47, 0, 0.745, 0.715);
  cursor: pointer;
  border-radius: 6px;
  font-weight: 800;
  font-size: 1.35rem;
}

.gray-bck:hover {
  transform: scale(1.15);
  font-weight: 900;
}













/* SCROLLBAR CSS */

::-webkit-scrollbar {
  width: 10px;
  background-color: #000000;
}

::-webkit-scrollbar-thumb {
  border: 3px solid rgb(0, 0, 0);
  transition: background 0.7s ease;
  cursor: grab;
  background: var(--yellow-white);
  border-radius: 20px;

}

::-webkit-scrollbar-track {
  background-color: #000000;
}

::-webkit-scrollbar-thumb:hover {
  background-color: var(--gray);
}





















/* SCROLL ARROW CSS */

.scroll-arrow {
  position: fixed;
  bottom: 200px;
  right: 25px;
  background: var(--black);
  border: var(--light-gray-border);
  font-size: 2rem;
  width: 5rem;
  height: 5rem;
  z-index: 10000;
  cursor: pointer;
  transition: all 0.25s ease-out;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20%;
}

.scroll_arrow_visible {
  bottom: 25px;
  opacity: 1;
}

.scroll-arrow:hover {
  background: var(--gray);
}





















/*MEDIA QUERIES*/

@media (max-width:1100px) {
  html {
    font-size: 9px;
  }
}

@media (max-width:900px) {
  html {
    font-size: 8px;
  }

  h1,
  h2,
  h3,
  h4 {
    letter-spacing: 0;
  }

  .navbar-responsive-container {
    width: 50% !important;
  }
}

@media (max-width:600px) {
  html {
    font-size: 7px;
  }

  .navbar-responsive-container {
    width: auto !important;
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3,
  h4 {
    font-size: 1.85rem;
  }
}
</style>
