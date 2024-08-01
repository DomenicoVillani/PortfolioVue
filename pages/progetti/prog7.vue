<script setup>
useHead({
    title: 'Gestionale polizia'
})
</script>
<template>

<div>
    <div class="flex justify-content-center text-0 text-2xl">
        <h1>Gestionale polizia</h1>
    </div>
    <div class="flex justify-content-between div-text about-me">
        <div class="width-div">
            <p>
                Il <span class="highlight">progetto</span> si concentra sull'implementazione di un'applicazione web per la polizia municipale, con quattro <span class="highlight">obiettivi</span> principali. Inizialmente, mira a fornire agli operatori uno <span class="highlight">strumento completo</span> per la gestione dei trasgressori, attraverso un'area dedicata per anagrafarli e monitorarne le attività. Inoltre, <span class="highlight">semplifica</span> il processo di compilazione dei verbali, offrendo un catalogo <span class="highlight">completo</span> delle violazioni contestabili.
            </p>
        </div>
        <div class="width-div">
            <p>
                La piattaforma si focalizza sull'<span class="highlight">ottimizzazione</span> della raccolta e dell'analisi dei dati, fornendo agli operatori un'interfaccia <span class="highlight">intuitiva</span> per visualizzare informazioni aggregate. Questo include <span class="highlight">statistiche dettagliate</span>, come il totale dei verbali emessi e dei punti decurtati per ogni trasgressore. Per lo <span class="highlight">sviluppo</span> del back-end, è stato utilizzato ASP.NET Core, mentre per l'aspetto grafico sono state impiegate tecnologie come CSS e Bootstrap.
            </p>
        </div>
    </div>
    <div class="flex justify-content-center mt-5">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/NQBD1sguHS4?si=6MddV2pRKayi8W6j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div class="flex justify-content-center mt-3"><p><a href="https://github.com/DomenicoVillani/Polizia" target="_blank" class="no-underline text-0">Link Repo Github</a></p></div>
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