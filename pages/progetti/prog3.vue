<script setup>
useHead({
    title: 'Gestionale pizzeria'
})
</script>
<template>

<div>
    <div class="flex justify-content-center text-0 text-2xl">
        <h1>Gestionale pizzeria</h1>
    </div>
    <div class="flex justify-content-between div-text about-me">
        <div class="width-div">
            <p>
                La pizzeria ha deciso di creare un'<span class="highlight">applicazione</span> web per <span>semplificare</span> la vendita dei suoi prodotti. Sarà una WebApplication che ospiterà due tipologie di utenti: gli amministratori e i clienti. Il progetto mira a <span class="highlight">sviluppare</span> una piattaforma per la <span class="highlight">gestione</span> degli articoli da parte degli amministratori, la registrazione e l'ordinazione degli utenti, nonché la <span class="highlight">visualizzazione</span> e la conferma degli ordini. Gli amministratori potranno anche <span class="highlight">gestire</span> gli ordini evasi e generare rapporti giornalieri sulle vendite.
            </p>
        </div>
        <div class="width-div">
            <p>
                Per questo <span class="highlight">progetto</span>, è stato utilizzato ASP.NET Framework 4.8 con Entity Framework per il back-end e SQL Server per il database. La parte grafica è stata realizzata con CSS e Bootstrap. Inoltre, sono state <span class="highlight">implementate</span> due funzioni asincrone con JavaScript per <span class="highlight">migliorare</span> l'esperienza utente.
            </p>
        </div>
    </div>
    <div class="flex justify-content-center mt-5">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/uzPapgpYweA?si=GB7i2E5RZv5ouhtu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div class="flex justify-content-center mt-3"><p><a href="https://github.com/DomenicoVillani/Pizzeria" target="_blank" class="no-underline text-0">Link Repo Github</a></p></div>
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