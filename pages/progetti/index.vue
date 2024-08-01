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
    title: 'I miei progetti'
})

const cards = [
    { id: 1, title: 'Skinbazaar', image: SkinBazaarLogo },
    { id: 2, title: 'Gestionale Hotel', image: HotelImage },
    { id: 3, title: 'Gestionale pizzeria', image: PizzaImage },
    { id: 4, title: 'Gestionale Clinica veterinaria', image: VetImage },
    { id: 5, title: 'Meteo', image: MeteoImage },
    { id: 6, title: 'Calcolatore tasse', image: TasseImage },
    { id: 7, title: 'Gestionale polizia', image: PoliziaImage },
    { id: 8, title: 'Netflix clone', image: NetflixImage },
    { id: 9, title: 'Tris', image: TrisImage },
];
</script>

<template>
    <div class="grid grid-nogutter p-4">
        <div 
            v-for="card in cards" 
            :key="card.id" 
            class="col-12 md:col-4 p-2"
        >
            <RouterLink :to="`/progetti/prog${card.id}`" class="no-underline">
                <div class="card shadow-2">
                    <img :src="card.image" alt="Card Image" class="card-image" />
                    <div class="card-content">
                        <h3 class="text-2xl text-blue-500 no-underline">{{ card.title }}</h3>
                    </div>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.card {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: transform 0.4s;
}

.card:hover {
    transform: scale(1.1);
}

.card-image {
    width: 100%;
    height: auto;
}

.card-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0.75rem;
    height: 100%;
}

h3 {
    margin: 0;
    text-align: center;
}

.p-4 {
    padding: 1rem;
}

.p-2 {
    padding: 0.5rem;
}

.p-3 {
    padding: 0.75rem;
}

.shadow-2 {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
