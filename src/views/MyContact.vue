<template>
 <div class="contact">
        <h2>CONTACT</h2>
        <div class="container">
        <h1>Contactez-moi</h1>
        <form action="mailto:alexandre.meux@etu.u-pec.fr" method="post" enctype="text/plain">
            <label for="name">Nom :</label>
            <input type="text" id="name" name="name" placeholder="Votre nom" required>

            <label for="email">E-mail :</label>
            <input type="email" id="email" name="email" placeholder="Votre e-mail" required>

            <label for="message">Message :</label>
            <textarea id="message" name="message" rows="5" placeholder="Votre message" required></textarea>

            <button type="submit">Envoyer</button>
        </form>
        <div class="email">
            Ou envoyez-moi un e-mail directement à : <a href="mailto:alexandre.meux@etu.u-pec.fr">alexandre.meux@etu.u-pec.fr</a>
        </div>
    </div>
    </div>
</template>


<script>

export default {
    name: "MyContact"
}


</script>






<style scoped>
.contact{
    margin:5vw 0;
}

        .container {
            max-width: 800px;
            margin: 20px auto;
            background: var(--footer-header_bck);
            padding: 5rem 2rem;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border:var(--light-gray-border);
        }
        h2,h1 {
            text-align: center;
        }
        form {
            display: flex;
            flex-direction: column;
        }
        label {
            margin-bottom: 5px;
            font-weight: bold;
        }
        input, textarea {
            margin-bottom: 15px;
            padding: 10px;
            font-size: 16px;
            border: var(--light-gray-border);
        }
        .email {
            text-align: center;
            margin-top: 20px;
            font-size: 18px;
        }

</style>