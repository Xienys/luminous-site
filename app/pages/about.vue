<script setup lang="ts">

useHead({
  bodyAttrs: {
    class: `bg-[#74baf5] bg-cover bg-fixed`,
    style: `--footer-bg: #78bef2`
  }
})

const logos = ["aero", "cc", "cdg", "vista", "exposure", "farm", "voxy", "snr", "create", "cee"]

const features = [{
    logo: "i-lucide:cloud",
    title: "ПОЛЕТ",
    description: "Твоя база больше не привязана к координатам. Построй гигантский летучий дредноут, мобильную торговую лавку или маневренный истребитель."
},
{
    logo: "i-lucide:brush",
    title: "ТВОРЧЕСТВО",
    description: "У нас ты волен делать то - чего жаждет твоя душа. Приветствуется любые виды творчества, правила максимально упрощены и лояльны."
},
{
    logo: "i-lucide:badge-russian-ruble",
    title: "ДОСТУПНОСТЬ",
    description: "Наш сервер абсолютно бесплатен. У нас нет игровых привелегий дарующих преимущество над другими игроками или платной проходки - все совершенно бесплатно."
}]
</script>

<template>
    <UPage>
        <UPageHeader class="border-none!">
            <UPageSection>
                <template #title>
                    <h1 class="tracking-[.15em] sm:text-2xl! md:text-3xl! lg:text-4xl! xl:text-4xl text-4xl! pixel_shadow">СВОБОДА НАШЕ ВСЕ</h1>
                </template>

                <template #description>
                    <h2 class="text-white font-[MinecraftTenLowercase] text-2xl">Ты когда-нибудь чувствовал, <br> что мир майнкрафта стал слишком тесным?</h2>
                </template>

                <template #features>
                    <div v-for="feature in features" class="flex flex-col items-center gap-5">
                        <span class="flex gap-3 items-center">
                            <UIcon :name="feature.logo" class="size-10 shrink-0"></UIcon>
                            <h1 class="text-2xl pixel_shadow">
                                {{ feature.title }}
                            </h1>
                        </span>
                        <p class="font-[MinecraftTenLowercase] text-center text-lg">{{ feature.description }}</p>
                    </div>
                </template>

            </UPageSection>
        </UPageHeader>
        <UPageBody class="bg-[url(/freedom.jpg)] bg-bottom">
            <UContainer>
                <UMarquee class="w-full" reverse pause-on-hover
                    :overlay="false"
                    :ui="{ root: `[--gap:--spacing(20)]`, content: `w-auto py-1` }">
                    <img v-for="logo in logos" :src="`/logos/${logo}.webp`" class="size-20 rounded-full shrink-0" alt="logo">
                </UMarquee>
                <USeparator class="pt-90" color="primary" size="lg" label="FREEDOM" />
            </UContainer>
        </UPageBody>
    </UPage>
</template>

<style scoped>

.pixel_shadow {
    text-shadow: 0px 5px 0px #0986b8;
}

</style>