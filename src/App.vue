<template>
  <div @scroll="handleScroll" id="main">
    <Header v-if="!activeResponsiveHeader"/>
    <Transition mode="out-in" name="fade-slide">
      <RouterView />
    </Transition>
    <Footer/>
    <ResponsiveHeader v-if="activeResponsiveHeader"/>
   <Transition name="arrow">
    <div @click="scrollTop" v-if="activeArrow" class="scroll-arrow">↑</div>
   </Transition>
  </div>
</template>






<script>
import Header from './components/Header.vue';
import ResponsiveHeader from './components/ResponsiveHeader.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    ResponsiveHeader
  },
  data() {
    return {
      activeArrow: false,
      activeResponsiveHeader: false
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
    windowWidth() {
      this.activeResponsiveHeader = window.innerWidth < 700;
    }
  },
  mounted() {
    this.windowWidth(); 
    window.addEventListener('resize', this.windowWidth);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.windowWidth);
  }
}
</script>









<style>
@import url('https://fonts.googleapis.com/css2?family=Advent+Pro:ital,wght@0,100..900;1,100..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Advent+Pro:ital,wght@0,100..900;1,100..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap');



.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.75s cubic-bezier(0.23, 1, 0.320, 1);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
transform: scale(0.75);/*  rotateX(60deg) rotateY(25deg) translateX(75vw); */
  opacity: 0;
}



@font-face {
  font-family: 'Horizon';
  src: url('/public/font/horizon.otf');
}


:root {
  --bg-color-smooth-dark-grey-1: radial-gradient(circle,
      rgba(53, 51, 54, 1) 0%,
      rgba(0, 0, 0, 1) 100%);
  --bg-color-smooth-dark-grey-2: radial-gradient(circle,
      rgba(0, 0, 0, 1) 50%,
      rgba(45, 52, 54, 1) 100%);
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
  --hard-blue:#141428;
  --light-blue:#1D1D2C;
  --white-text:#ECECEC;
  --black: hsl(0, 0%, 0%);
  --gray: rgb(90, 106, 121);
  --white: hsl(0, 0%, 100%);
  --yellow-white: rgb(243 234 187);







  /**   BACKGROUNDS    **/


  --bck: rgb(0, 0, 0);
  --footer-header_bck: #141428;
  --transparent-bck: rgba(0, 0, 0, 0.2);
  --gray-hover: rgba(90, 106, 121, 0.15);







  /**   BORDERS   **/

  /**  DOUBLE BORDERS  **/

  --double-gray: 0.5rem double var(--gray);
  --double-white: 0.5rem double var(--white);
  --double-black: 0.5rem double var(--black);


  /**  SOLID BORDERS  **/
  --light-yellow-white-border:0.1rem solid var(--yellow-white);
  --light-gray-border: 0.1rem solid var(--gray);
  --light-white-border: 0.1rem solid var(--white);
  --light-black-border: 0.1rem solid var(--black);



/**  FONT  **/
  --font-text:'Roboto Flex';
  --font-title: 'Horizon';











  /** BLUR **/

  --bck-blur: blur(10px);
}





#main {
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}

.span{
  color:var(--gray);
  font-weight: var(--font-weight-extrabold);
}

select{
  background: var(--gray);
  font-family: var(--font-text);
  padding:0.8rem 1rem;
  border-radius: 0.5rem;
  font-size: 1.33rem;
  color:var(--white-text);
  font-weight: var(--font-weight-extrabold);
}

select:focus{
 border:1px solid var(--black);
}

select option{
  font-weight: var(--font-weight-extrabold);
}

* input::placeholder,textarea::placeholder{
  color:var(--gray);
  font-family: var(--font-text);
}

input[type="text"],input[type='email'],textarea {
  font-family: var(--font-text);
  font-weight: var(--font-weight-bold);
  color: var(--gray);
  letter-spacing: 1px;
  font-size: 1.8rem;
  padding: 1.2rem 1rem;
  border-radius: 5px 5px 0 0;
  display: flex;
  align-items: center;
  background: var(--yellow-white);
  border: var(--light-gray-border);
  transition: 0.1s cubic-bezier(0.215, 0.610, 0.355, 1);
}

input[type="text"]:focus,input[type="email"]:focus,textarea:focus{
  border-bottom: 4px solid var(--gray);
}

input,select,textarea{
  outline:none
}

p {
  font-size: 1.75rem;
  font-weight: var(--font-weight-midbold);
  color:var(--white-text)
}

a {
  color: var(--white-text);
  transition: 0.2s ease-in;
  cursor: pointer;
}

u {
  text-decoration: underline;
  font-weight: var(--font-weight-midbold);
  padding-right: 0.45rem;
  font-family: var(--font-text);
  color: var(--yellow-white);
  letter-spacing: 0;
  font-size: 1.65rem;
}

h4 {
  font-size: 1.5rem;
  font-family: var(--font-text);
}

h3 {
  font-size: 2rem;
  font-family: var(--font-title);
}

h2 {
  font-size: 4rem;
  font-weight: var(--font-weight-bold);
  letter-spacing: -2px;
}

h1 {
  font-size: 7.5rem;
  color: var(--gray);
  font-weight: var(--font-weight-black);
  text-transform: uppercase;
  letter-spacing: -5px;
}

h1,
h2 {
  font-family: var(--font-title);
  color: rgb(90, 106, 121);
}

h3,
h4 {
  color: var(--yellow-white);
  letter-spacing: -0.5px;
  font-weight: 700;
}


button {
  font-family: var(--font-text);
  font-weight: var(--font-weight-extrabold);
  border-radius: 1rem;
  padding: 0.8rem;
  background: #141428;
  color: var(--white-text);
  border: 1px solid rgb(90, 106, 121);
  transition: 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  white-space: nowrap;
  cursor: pointer;
  font-size: 1.33rem;
  cursor:pointer
}


button:hover {
  background: rgb(90, 106, 121);
}

.plus {
  filter: invert(1);
  width: 1.75rem;
  margin-left: 0.75rem;
}





body {
  font-family: var(--font-text);
  background: var(--light-blue);
  color: rgb(236, 236, 236);
  overflow-x: hidden;
  min-height: 100vh;
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

.arrow-enter-active,
.arrow-leave-active {
  transition: all 0.35s cubic-bezier(0.23, 1, 0.320, 1);
}

.arrow-enter-from,
.arrow-leave-to {
  opacity: 0;
  transform: translateY(-25vh) scale(0.5);
}



.scroll-arrow {
  position: fixed;
  bottom: 100px;
  right: 25px;
  background: var(--black);
  border: var(--light-gray-border);
  font-size: 2rem;
  width: 5rem;
  height: 5rem;
  z-index: 10000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20%;
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
  .navbar-responsive-container {
    width: 50% !important;
  }
}

@media (max-width:600px) {
  .navbar-responsive-container {
    width: 70% !important;
  }
}


@media (min-width: 1400px) {
  h1 {
    font-size: 7.5rem;
  }
  h2 {
    font-size: 4rem;
  }
  h3 {
    font-size: 2rem;
  }
  h4 {
    font-size: 1.5rem;
  }
}

/* Écrans larges (1100px - 1400px) */
@media (max-width: 1400px) {
  h1 {
    font-size: 6rem;
    letter-spacing: -1px;
  }
  h2 {
    font-size: 3.5rem;
  }
  h3 {
    font-size: 1.8rem;
  }
  h4 {
    font-size: 1.4rem;
  }
}

/* Tablettes et petits écrans (768px - 1100px) */
@media (max-width: 1100px) {
  h1 {
    font-size: 5rem;
  }
  h2 {
    font-size: 3rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1.3rem;
  }
}

/* Mobiles (600px - 768px) */
@media (max-width: 768px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.6rem;
  }
}

/* Petits mobiles (moins de 600px) */
@media (max-width: 600px) {
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.5rem;
  }
}

/* Très petits écrans (moins de 400px) */
@media (max-width: 400px) {
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  h3 {
    font-size: 1.3rem;
  }
}



@media (max-width:800px) {
  select{
    padding:1vw;
  }
}

@media (max-width:350px) {
  .navbar-responsive-container {
    width: auto !important;
  }
}




</style>
