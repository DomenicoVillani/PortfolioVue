<script setup>
import SkinBazaarLogo from '/images/SkinBazaarLogo.png';
import HotelImage from '/images/hotel.jpeg';
import PizzaImage from '/images/pizza.jpg';
import VetImage from '/images/vet.jpg';
import MeteoImage from '/images/meteo.png';
import TasseImage from '/images/tasseOff.webp';
import PoliziaImage from '/images/poliziaOff.webp';
import NetflixImage from '/images/Netflix.jpg';
import TrisImage from '/images/tris.jpg';


useHead({
    title: 'Portfolio Domenico Villani'
})

const projects = ref([
    {
        title: 'SkinBazaar',
        image: SkinBazaarLogo,
        description: "Ecommerce che semplifica la gestione e l'acquisto di skin con un'interfaccia intuitiva e funzionalità complete.",
        link: '/progetti/prog1'
    },
    {
        title: 'Gestionale Hotel',
        image: HotelImage,
        description: "Una gestione alberghiera impeccabile: tecnologia di punta per un'esperienza senza pari per ospiti e staff",
        link: '/progetti/prog2'
    },
    {
        title: 'Gestionale Pizzeria',
        image: PizzaImage,
        description: "Gestione innovativa per un'esperienza gastronomica personalizzata.",
        link: '/progetti/prog3'
    },
    {
        title: 'ClinicaCaniZzoo',
        image: VetImage,
        description: "semplifica la gestione clinica, ottimizza l'esperienza utente.",
        link: '/progetti/prog4'
    },
    {
        title: 'Meteo',
        image: MeteoImage,
        description: "Verifica previsioni meteo globali in tempo reale con una semplice ricerca.",
        link: '/progetti/prog5'
    },
    {
        title: 'Calcolatore Tasse',
        image: TasseImage,
        description: "utomatizzazione calcolo imposte: App gestionale dati fiscali per contribuenti, intuitiva ed efficiente.",
        link: '/progetti/prog6'
    },
    {
        title: 'Gestionale polizia',
        image: PoliziaImage,
        description: "Sviluppo di un'applicazione web per la Polizia Municipale: gestione trasgressori, catalogo violazioni, compilazione verbali e visualizzazione dati aggregati.",
        link: '/progetti/prog7'
    },
    {
        title: 'Clone Netflix',
        image: NetflixImage,
        description: "Crea la tua esperienza di streaming personalizzata con il nostro clone di Netflix: Ampia libreria di contenuti, raccomandazioni personalizzate e una navigazione fluida.",
        link: '/progetti/prog8'
    },
    {
        title: 'Tris',
        image: TrisImage,
        description: "Gioco strategico per due giocatori.",
        link: '/progetti/prog9'
    }
]);

const responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

</script>

<template>
    <div>
        <div class="flex justify-content-center text-0 text-2xl">
            <h1>Benvenuti nel mio portfolio</h1>
        </div>
        <div class="profile-picture-container mb-5">
            <img src="/images/Propic.jpg" alt="Immagine profilo" class="profile-picture">
        </div>
        <div>
            <div class="about-me mt-3 text-center mx-8 text-xl">
                <p>Ciao! Sono <span class="highlight">Domenico Villani</span>, ho <span id="miaEta"></span> anni.</p>
                <p>Sono un <span class="highlight">perito informatico</span> appassionato di <span
                        class="highlight">Informatica e Gaming</span>.</p>
                <p>Ho da poco frequentato un <span class="highlight">bootcamp presso EPICODE</span> dove ho studiato e
                    approfondito sia il lato Frontend che Backend di questo mondo.</p>
                <p>Ho avuto la fortuna di partecipare a diversi <span class="highlight">progetti</span> sia da solo che di
                    gruppo, uno dei miei progetti più significativi è sicuramente <span class="highlight"><RouterLink to="/progetti/prog1" class="no-underline text-blue-500">SkinBazaar</RouterLink></span>,
                    un Ecommerce per skin di gioco che ho realizzato da zero.</p>
                <p>Credo fortemente che per fare questo lavoro come prima cosa ci voglia <span
                        class="highlight">passione</span>, cosa che a me non manca!</p>
                <p>Quando non ho progetti da realizzare, cerco sempre di aggiornarmi riguardo il mondo <span
                        class="highlight">tech</span> ma adoro anche guardare lo sport e giocare con i miei <span
                        class="highlight">amici</span> sia Online che con giochi da tavola.</p>
                <p>Sentiti libero di <span class="highlight"> <RouterLink to="/contatti" class="no-underline text-blue-500">contattarmi </RouterLink> </span> o di spulciare i miei profili Online!</p>
            </div>
        </div>
        <div class="hidden md:block">
            <div class="flex justify-content-center text-0 text-2xl">
                <h2>I miei progetti</h2>
            </div>
            <div class="card">
                <Carousel :value="projects" :numVisible="3" :numScroll="2" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
                    <template #item="slotProps">
                        <RouterLink :to="slotProps.data.link" class="no-underline">
                            <div class="carousel-item border-1 surface-border border-round m-2 p-3 bg-white">
                                <div class="mb-3">
                                    <img :src="slotProps.data.image" :alt="slotProps.data.title" class="w-full border-round" />
                                </div>
                                <div class="mb-2 font-medium text-center text-3xl text-blue-500">{{ slotProps.data.title }}</div>
                                <div class="text-center mb-3 text-gray-600">{{ slotProps.data.description }}</div>
                            </div>
                        </RouterLink>
                    </template>
                </Carousel>
            </div>
        </div>
    </div>
</template>

<style scoped>
.carousel-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.carousel-item:hover{
    transform: scale(1.1);
    transition: 0.4s;
}

.carousel-item img {
    flex-shrink: 0;
    margin-bottom: 10px;
}

.carousel-item .title, .carousel-item .description {
    flex-grow: 1;
}

.profile-picture-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.profile-picture {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
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
    .profile-picture {
        width: 200px;
        height: 200px;
    }

    .about-me {
        padding: 15px;
    }

    .about-me p {
        font-size: 1em;
    }
}

@media (max-width: 480px) {
    .profile-picture {
        width: 150px;
        height: 150px;
    }

    .about-me {
        padding: 10px;
    }

    .about-me p {
        font-size: 0.9em;
    }
}

</style>
