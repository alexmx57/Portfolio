<template>
    <div class="contact-container">
      <div class="contact-info">
        <img width="200" src="/img/am.png">
        <h4>Mes coordonnées</h4>
        <p>
          <strong>Email :</strong> <a target="_blank" href="mailto:alexandre.meux@etu.u-pec.fr">alexandre.meux@etu.u-pec.fr</a>
        </p>
        <p>
          <strong>Téléphone :</strong> <a target="_blank" href="tel:0750578484">07 50 57 84 84</a>
        </p>
        <p>
          <strong>LinkedIn :</strong> <a target="_blank" href="https://www.linkedin.com/in/alexandre-meux-2ba28a29b/">https://www.linkedin.com/in/alexandre-meux-2ba28a29b/</a>
        </p>
        <p>
          <strong>Adresse :</strong> <a target="_blank">Malakoff, 92240</a>
        </p>
      </div>
  
      <div class="contact-form">
        <div class="contact-sub-container">
        <h3>Si vous voulez me contactez, remplissez ce formulaire</h3>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <input type="text" v-model="form.firstName" placeholder="Prénom" required />
          </div>
          <div class="form-group">
            <input type="text" v-model="form.lastName" placeholder="Nom" required />
          </div>
          <div class="form-group">
            <input type="email" v-model="form.email" placeholder="Email" required />
          </div>
          <div class="form-group">
            <input type="text" v-model="form.subject" placeholder="Objet" required />
          </div>
          <div class="form-group">
            <textarea v-model="form.message" placeholder="Corps du mail" required></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
    </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        },
      };
    },
    methods: {
      submitForm() {
        // Handle form submission logic here
        console.log("Form submitted:", this.form);
        alert("Form submitted successfully!");
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-container {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-items: center;
  }

  .contact-sub-container{
    background: var(--light-blue);
    padding: 20px;
    border-radius: 20px;
    box-shadow: 1px 2px 5px 4px rgba(0, 0, 0, 0.2);
  }

  input,textarea{
    width: 100%;
  }

  .contact-info{
    display: flex;
    flex-direction: column;
    justify-self: center;
  }

  .contact-info strong{
    text-decoration: underline;
    color:var(--yellow-white)
  }

  .contact-form{
    padding:4vw;
    background: var(--yellow-white);

  }

  .contact-info h4{
    margin-bottom: 5rem;
    font-size: 5rem;
  }

  .contact-info p{
    margin:0.75rem 0;
  }
    
  .contact-form h3 {
    margin-bottom: 2rem;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  textarea {
    resize: vertical;
  }
  
  </style>