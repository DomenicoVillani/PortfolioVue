<script setup>
useHead({
    title: 'Gestionale clinica veterinaria'
})
</script>
<template>

<div>
    <div class="flex justify-content-center text-0 text-2xl">
        <h1>Gestionale clinica veterinaria</h1>
    </div>
    <div class="flex justify-content-between div-text about-me">
        <div class="width-div">
            <p>Clinica CaniZzoo è un'<span class="highlight">applicazione</span> web progettata per gestire una clinica veterinaria, <span class="highlight">sviluppata</span> utilizzando ASP.NET MVC 5.2.9 e Entity Framework 6.4.4. L'applicazione è ottimizzata per l'interazione desktop e impiega Bootstrap 5.2.3 per una progettazione dell'interfaccia utente moderna. La <span class="highlight">piattaforma</span> offre diverse funzionalità per amministratori e utenti registrati, consentendo una <span class="highlight">gestione</span> efficiente degli animali, delle visite veterinarie e dei ricoveri. Gli amministratori possono anagrafare, modificare o eliminare le schede degli animali, <span class="highlight">monitorare</span> visite e ricoveri, e <span class="highlight">gestire</span> una sezione dedicata agli animali smarriti. Inoltre, è presente una farmacia interna per registrare prodotti alimentari e medicinali, tracciare le vendite ai clienti, e facilitare la ricerca dei prodotti attraverso una <span class="highlight">funzionalità</span> che identifica l'armadietto e il cassetto specifici.</p>
        </div>
        <div class="width-div">
            <p>Gli <span class="highlight">utenti</span> registrati di Clinica CaniZzoo hanno accesso a una <span class="highlight">funzionalità</span> di ricerca che permette di trovare un animale utilizzando il codice del microchip. Questa caratteristica è particolarmente utile per i proprietari e i veterinari che necessitano di <span class="highlight">accedere rapidamente</span> alle informazioni relative agli animali. L'applicazione, costruita su solide basi tecnologiche, garantisce <span class="highlight">efficienza e affidabilità</span> nella gestione dei dati clinici, migliorando la qualità del servizio offerto dalla clinica veterinaria. In sintesi, Clinica CaniZzoo rappresenta una <span class="highlight">soluzione completa</span> e ben strutturata per la gestione di una clinica veterinaria, <span class="highlight">facilitando</span> il lavoro degli amministratori e migliorando l'esperienza degli utenti.</p>
        </div>
    </div>
    <div class="flex justify-content-center mt-5">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/MTrQsKbAQzY?si=GZA2Ol6Usjig_7PN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div class="flex justify-content-center mt-3"><p><a href="https://github.com/Channilol/BW3ClinicaCaniZzoo" target="_blank" class="no-underline text-0">Link Repo Github</a></p></div>
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