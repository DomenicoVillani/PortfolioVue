<script setup>
useHead({
    title: 'Netflix clone'
})
</script>
<template>

<div>
    <div class="flex justify-content-center text-0 text-2xl">
        <h1>Netflix clone</h1>
    </div>
    <div class="flex justify-content-between div-text about-me">
        <div class="width-div">
            <p>Il <span class="highlight">progetto</span> ha come obiettivo la creazione di un clone di <span class="highlight">Netflix</span>, sviluppato utilizzando HTML, CSS e JavaScript. Questa WebApplication permette agli utenti di <span class="highlight">navigare</span> e visualizzare un catalogo statico di film e serie TV. Per migliorare <span class="highlight">l'interfaccia</span> utente, è stato utilizzato CSS per lo styling e Bootstrap per garantire una struttura responsive e <span class="highlight">accattivante</span> su dispositivi di diverse dimensioni.</p>
        </div>
        <div class="width-div">
            <p>Il sito è <span class="highlight">ottimizzato</span> per offrire una navigazione fluida e veloce, garantendo un'esperienza <span class="highlight">user-friendly</span> su qualsiasi dispositivo. In sintesi, questo clone di Netflix offre un'interfaccia <span class="highlight">attraente</span> e reattiva, ricreando l'aspetto visivo della <span class="highlight">piattaforma originale</span></p>
        </div>
    </div>
    <div class="flex justify-content-center mt-5">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/SCYb5DL7k34?si=VuzktiS0isBd4lRI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div class="flex justify-content-center mt-3"><p><a href="https://github.com/DomenicoVillani/DomenicoVillaniFS0623-26Netflix" target="_blank" class="no-underline text-0">Link Repo Github</a></p></div>
</div>

</template>

<style scoped>
.div-text {
    margin: 0 20%;
}

.width-div {
    width: 45%;
}

.about-me {
    background-color: #e3f2fd;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.about-me p {
    font-size: 1.1em;
    line-height: 1.6em;
    color: #333;
}

.about-me .highlight {
    color: #1e90ff;
    font-weight: bold;
}

@media (max-width: 768px) {
    .div-text {
        margin: 0 5%;
        flex-direction: column;
    }
    .width-div {
        width: 100%;
        margin-bottom: 20px;
    }
}
</style>