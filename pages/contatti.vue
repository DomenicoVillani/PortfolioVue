<script setup>
useHead({
    title: 'Contattami'
})
</script>
<template>

<div class="flex flex-column md:flex-row justify-content-evenly">
    <div class="flex flex-column">
        <div class="text-0 text-2xl"><h1>Contattami</h1></div>
        <div class="text-0"><p>Compila il form qui sotto per contattarmi:</p></div>
        <div class="text-0">
            <form action="https://formspree.io/f/xwkgjjry" method="POST">
                <div class="mb-3">
                    <p>Nome</p>
                    <InputText id="username" name="nome" />
                </div>
                <div class="mb-3">
                    <p>Email</p>
                    <InputText id="email" name="email"/>
                </div>
                <div class="mb-3">
                    <p>Messaggio</p>
                    <Textarea id="messaggio" name="messaggio"/>
                </div>
                <div><Button label="Invia" type="submit"/></div>
            </form>
        </div>
    </div>
    <div class="flex flex-column">
        <div class="text-0 text-2xl"><h2>I miei profili!</h2></div>
        <div class="mb-5 text-0"><p>Questi sono tutti i miei profili online</p></div>
        <div>
            <ul class="list-none p-0 m-0">
                <li class="mb-3"><a href="mailto:domenico.villani.99@gmail.com" class="text-0 no-underline text-xl"><i class="pi pi-envelope text-2xl mr-2"></i>Email</a></li>
                <li class="mb-3"><a href="tel:+393203571291" class="text-0 no-underline text-xl"><i class="pi pi-phone text-2xl mr-2"></i>Telefono</a></li>
                <li class="mb-3"><a href="https://github.com/DomenicoVillani" target="_blank" class="text-0 no-underline text-xl"><i class="pi pi-github text-2xl mr-2"></i>GitHub</a></li>
                <li class="mb-3"><a href="https://www.linkedin.com/in/domenicovillani99/" target="_blank" class="text-0 no-underline text-xl"><i class="pi pi-linkedin text-2xl mr-2"></i>Linkedin</a></li>
                <li class="mb-3"><a href="https://www.instagram.com/domenico_villani_/" target="_blank" class="text-0 no-underline text-xl"><i class="pi pi-instagram text-2xl mr-2"></i>Instagram</a></li>
                <li class="mb-3"><a href="https://t.me/Domm99" target="_blank" class="text-0 no-underline text-xl"><i class="pi pi-telegram text-2xl mr-2"></i>Telegram</a></li>
                <li class="mb-3"><a href="https://www.paypal.me/DomenicoVillani99" target="_blank" class="text-0 no-underline text-xl"><i class="pi pi-paypal text-2xl mr-2"></i>Offrimi un caffè</a></li>
            </ul>
        </div>
    </div>
</div>


</template>

<style scoped>

</style>