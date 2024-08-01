<script setup>
useHead({
    title: 'Tris'
})
</script>
<template>

<div>
    <div class="flex justify-content-center text-0 text-2xl">
        <h1>Tris</h1>
    </div>
    <div class="flex justify-content-between div-text about-me">
        <div class="width-div">
            <p>Il gioco del tris è un <span class="highlight">passatempo classico</span> in cui due giocatori si sfidano per ottenere una fila, colonna o diagonale di tre simboli identici, come una croce (X) o un cerchio (O), su una griglia 3x3. Questa versione del tris è stata <span class="highlight">sviluppata</span> usando esclusivamente HTML e JavaScript, rendendola <span class="highlight">accessibile</span> a tutti i giocatori senza la necessità di installare software aggiuntivo. La griglia di gioco è rappresentata tramite una tabella HTML, mentre le mosse dei giocatori sono gestite tramite <span class="highlight">funzioni JavaScript</span> che consentono loro di inserire i propri simboli cliccando sulle caselle vuote.</p>
        </div>
        <div class="width-div">
            <p>Un semplice script JavaScript <span class="highlight">controlla</span> costantemente lo stato della griglia, verificando se uno dei giocatori ha ottenuto una <span class="highlight">combinazione vincente</span> o se la griglia è piena senza vincitori, dichiarando così la fine della <span class="highlight">partita</span>. Grazie alla sua semplicità e alla sua implementazione leggera, questa versione del tris è <span class="highlight">perfetta</span> per chiunque desideri godersi una partita rapida e <span class="highlight">divertente</span> direttamente dal proprio browser web.</p>
        </div>
    </div>
    <div class="flex justify-content-center mt-5">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/RaFxCJcd6eA?si=oOLeF02duQX_1sF4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div class="flex justify-content-center mt-3">
        <p class="text-center mt-2 me-5"><a href="https://github.com/DomenicoVillani/Tris" target="_blank" class="no-underline text-0 mr-5">Link Repo Github</a></p>
        <p class="text-center mt-2 ms-3"><a href="https://domenicovillani.github.io/Tris/index.html" target="_blank" class="no-underline text-0 ml-5">Vuoi giocarci?</a></p>
    </div>
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