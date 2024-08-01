<script setup>
useHead({
    title: 'SkinBazaar'
})
</script>
<template>
    <div>
        <div class="flex justify-content-center text-0 text-2xl">
            <h1>SkinBazaar</h1>
        </div>
        <div class="about-me div-text justify-content-between">
                <div>
                    <p>SkinBazaar rappresenta il mio <span class="highlight">progetto più ambizioso</span> e di cui vado più fiero, in quanto è il <span class="highlight">risultato del mio impegno e della mia dedizione</span> nel corso finale di EPICODE. Questo progetto è stato interamente <span class="highlight">ideato, progettato e realizzato</span> da me, dimostrando le mie capacità nel <span class="highlight">gestire</span> l'intero processo di sviluppo software. Sin dalla fase iniziale di progettazione fino alla sua <span class="highlight">completa implementazione</span>, ho guidato il progetto con passione e determinazione, ottenendo un'applicazione web <span class="highlight">funzionale e intuitiva</span> per la gestione di un Ecommerce di skin.</p>
                </div>
            </div>
        <div class="flex justify-content-between div-text about-me mt-5">
            <div class="width-div">
                <p>
                    SkinBazaar è un'<span class="highlight">applicazione web</span> sviluppata con ASP.NET MVC, utilizzando Entity Framework per la gestione dei dati e SQL Server come database. L'obiettivo principale è fornire agli utenti un'<span class="highlight">esperienza intuitiva</span> per la navigazione, l'acquisto e la gestione delle skin per vari prodotti. Il sito offre <span class="highlight">funzionalità</span> come la registrazione e la <span class="highlight">gestione</span> del profilo, la <span class="highlight">navigazione</span> e la <span class="highlight">ricerca avanzata</span> dei prodotti, la visualizzazione dello storico degli acquisti e l'assistenza clienti.
                </p>
            </div>
            <div class="width-div">
                <p>
                    Per gli amministratori, SkinBazaar consente la <span class="highlight">gestione</span> delle skin, inclusa l'aggiunta e l'eliminazione dal catalogo, e fornisce <span class="highlight">strumenti</span> per la gestione dei clienti e degli acquisti. Per eseguire il progetto in locale, è necessario clonare il repository, importare il database SQL Server incluso e <span class="highlight">configurare le connessioni</span> al database nel file di configurazione dell'applicazione. Una volta completata la configurazione, l'applicazione può essere avviata e gli amministratori possono accedere utilizzando le credenziali predefinite.
                </p>
            </div>
        </div>
        <div class="flex justify-content-center mt-5">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/jdQJ18P-h8s?si=uIMI46F7GkmyGG1-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="flex justify-content-center my-3"><p><a href="https://github.com/DomenicoVillani/CapstoneSkinMarket" target="_blank" class="no-underline text-0">Link Repo Github</a></p></div>
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