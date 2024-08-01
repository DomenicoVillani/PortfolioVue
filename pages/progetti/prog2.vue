<script setup>
useHead({
    title: 'Gestionale hotel'
})
</script>
<template>

<div>
    <div class="flex justify-content-center text-0 text-2xl">
        <h1>Gestionale hotel</h1>
    </div>
    <div class="flex justify-content-between div-text about-me">
        <div class="width-div">
            <p>
                L'<span class="highlight">obiettivo</span> del progetto è sviluppare un software per ottimizzare la <span class="highlight">gestione</span> delle prenotazioni in un piccolo albergo. Si punta a gestire in modo <span class="highlight">efficiente</span> i dati dei clienti e delle camere, offrire <span class="highlight">servizi</span> aggiuntivi personalizzati e garantire un accesso sicuro al sistema solo al personale autorizzato. L'obiettivo è anche <span class="highlight">semplificare</span> il checkout e implementare funzionalità di ricerca avanzata per un servizio clienti <span class="highlight">ottimale</span>, il tutto tramite un'<span class="highlight">interfaccia intuitiva</span>.
            </p>
        </div>
        <div class="width-div">
            <p>
                Il progetto è stato realizzato individualmente, con un <span class="highlight">forte focus sulla qualità</span> e sull'esperienza utente. Per lo sviluppo del back-end è stato utilizzato ASP.NET Framework 4.8, mentre SQL Server è stato scelto per la <span class="highlight">gestione</span> del database. Per l'aspetto grafico, sono state adottate <span class="highlight">tecnologie</span> come CSS e Bootstrap. Inoltre, per migliorare l'esperienza utente, sono state <span class="highlight">implementate</span> due funzioni asincrone con JavaScript.
            </p>
        </div>
    </div>
    <div class="flex justify-content-center mt-5">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/sn8Ru4Gf1AM?si=wAJRLQZqoMY22amb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div class="flex justify-content-center mt-3"><p><a href="https://github.com/DomenicoVillani/Albergo" target="_blank" class="no-underline text-0">Link Repo Github</a></p></div>
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