<script setup>
useHead({
    title: 'Calcolatore tasse'
})
</script>
<template>

<div>
    <div class="flex justify-content-center text-0 text-2xl">
        <h1>Calcolatore Tasse</h1>
    </div>
    <div class="flex justify-content-between div-text about-me">
        <div class="width-div">
            <p>Il progetto mira a sviluppare un'<span class="highlight">applicazione software</span> che gestisca le informazioni fiscali dei contribuenti per calcolare l'imposta dovuta in base alle fasce di reddito stabilite dalla normativa fiscale italiana. Questo sistema, <span class="highlight">realizzato in C#</span>, automatizza il processo di calcolo delle imposte, <span class="highlight">semplificando</span> così la gestione fiscale per gli utenti.</p>
        </div>
        <div class="width-div">
            <p>L'obiettivo principale del progetto è creare un sistema che permetta agli utenti di inserire <span class="highlight">facilmente</span> i propri dati personali e fiscali e di calcolare l'imposta dovuta con <span class="highlight">precisione</span> ed <span class="highlight">efficienza</span>. Questo sistema offre un'interfaccia utente intuitiva per facilitare l'inserimento dei dati e fornisce un <span class="highlight">risultato chiaro</span> e dettagliato del calcolo delle imposte.</p>
        </div>
    </div>
    <div class="flex justify-content-center mt-5">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jQYu7iWliHg?si=_M9vwtJM96wr6Qkm"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
    </div>
    <div class="flex justify-content-center mt-3"><p><a href="https://github.com/DomenicoVillani/PS-CalcolatoreDiTasse" target="_blank" class="no-underline text-0">Link Repo Github</a></p></div>
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