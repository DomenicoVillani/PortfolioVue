<script setup>
useHead({
    title: 'Meteo'
})
</script>
<template>

<div>
    <div class="flex justify-content-center text-0 text-2xl">
        <h1>Meteo</h1>
    </div>
    <div class="flex justify-content-between div-text about-me">
        <div class="width-div">
            <p>Il progetto ha come obiettivo lo sviluppo di una web application utilizzando <span class="highlight">ReactJS</span>, che consente
                agli utenti di verificare le <span class="highlight">condizioni meteorologiche</span> attuali e le previsioni future per qualsiasi
                città del mondo attraverso una <sapn class="highlight">semplice</sapn> ricerca. L'applicazione mira a fornire informazioni
                meteorologiche <span class="highlight">affidabili</span> e <span class="highlight">aggiornate</span>, migliorando l'esperienza dell'utente grazie a un'interfaccia
                <span class="highlight">intuitiva</span> e all'accesso immediato ai dati climatici, inclusa la probabilità di pioggia.
            </p>
        </div>
        <div class="width-div">
            <p>Questo progetto rappresenta una <span class="highlight">soluzione</span> moderna e pratica per la verifica delle condizioni
                meteorologiche, sfruttando le <span class="highlight">potenzialità</span> di ReactJS per creare un'esperienza utente <span class="highlight">fluida</span> e
                <span class="highlight">interattiva</span>. 
            </p>
        </div>
    </div>
    <div class="flex justify-content-center mt-5">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/tbborDhY5kI?si=nVFZJ0vDCPDZyyMA"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
    </div>
    <div class="flex justify-content-center mt-3"><p><a href="https://github.com/DomenicoVillani/FS0623-React8" target="_blank" class="no-underline text-0">Link Repo Github</a></p></div>
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