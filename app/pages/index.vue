<script setup lang="ts">

const serverIp = "play.luminous-official.ru"

const { copy, copied } = useClipboard({ source: serverIp })

const { x, y } = useMouse()
const planeTransform = computed(() => {
  const moveX = (x.value - window.innerWidth / 2) * 0.02
  const moveY = (y.value - window.innerHeight / 2) * 0.02
  return `translate(${moveX}px, ${moveY}px) scale(1.1)`
})

const items = [
  "https://media.discordapp.net/attachments/1496113376768561217/1496113376949178428/image.png?ex=69edf9a9&is=69eca829&hm=8735d715073924ea86f07da0a89964a0fea4ceda394d59e1366c3d40ed953d73&=&format=webp&quality=lossless",
  "https://media.discordapp.net/attachments/1490244530467897464/1495201468469481544/image.png?ex=69edf421&is=69eca2a1&hm=b88f94d9f3b93cdbb42a7cdf433378f5feb13d800fa5ceee9ae9fd1780b3d158&=&format=webp&quality=lossless&width=1536&height=864",
  "https://media.discordapp.net/attachments/1490244530467897464/1495081228091654427/2026-04-18_20.18.35.png?ex=69ee2ce6&is=69ecdb66&hm=1bf8424be083ed5ddc7daea0432756616284e07e1832d27931d78299e3241502&=&format=webp&quality=lossless&width=1536&height=864",
]

</script>


<template>
    <UPage class="bg-[linear-gradient(to_right,#131316_1px,transparent_1px),linear-gradient(to_bottom,#131316_1px,transparent_1px)] bg-size-[24px_24px] -z-10">
        <UPageHeader class="border-none!">
            <UPageSection class="border-none!"
                title="LUMINOUS"
                :ui="{title: `font-[Stopwatch] tracking-[.22em] sm:text-5xl! md:text-6xl! lg:text-9xl! xl:text-9xl! text-5xl! pixel-shadow`, wrapper: `relative overflow-hidden`, container: `relative z-10`}">
                    <template #description>
                        <span>
                            <p class="text-white">
                                Идеальный сервер для свободного выживания <br> с Create: Aeronautics.
                            </p>
                        </span>
                    </template>
                    <template #links>
                        <UButton
                            label="Как играть?"
                            to="#guide"
                            size="xl"
                            class="text-white p-3 tracking-widest text-xl rounded-xl"
                        />
                        <UButton
                            color="neutral"
                            class="p-3 tracking-widest rounded-xl"
                            size="xl"
                            @click="copy(serverIp)"
                            >
                            <span class="text-xl text-secondary">IP:</span>
                            <span class="sm:text-sm lg:text-lg text-md text-secondary">{{ computed(() => copied ? "Скопировано!" : serverIp) }}</span>
                            
                        </UButton>
                    </template>

                <template #top>
                    <ClientOnly>
                        <div class="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
                            <img 
                                src="/plane.webp" 
                                alt="Aeronautics Plane"
                                class="w-[120%] max-w-none sm:scale-60 scale-45 object-contain"
                                :style="{ transform: planeTransform }"
                                loading="lazy"
                            />
                        </div>
                    </ClientOnly>
                </template>
            </UPageSection>
        </UPageHeader>
        <UPageBody class="pt-10">
            <UContainer>
                <div class="relative inset-0 z-20 flex items-center justify-center">
                    <UCarousel class="z-10 ring-4 shadow-xl shadow-primary/10 inset-shadow-2xl inset-shadow-primary ring-primary rounded-2xl px-5 py-5"
                            v-slot="{ item }"
                            loop
                            arrows
                            :autoplay="{ delay: 2000 }"
                            :auto-height="true"
                            wheel-gestures
                            :prev="{ variant: `solid` }"
                            :next="{ variant: `solid` }"
                            :items="items"
                            :ui="{
                            item: `basis-1/3 ps-0`,
                            prev: `sm:inset-s-8`,
                            next: `sm:inset-e-8`,
                            container: `ms-0`,
                            }"
                        >
                        <img :src="item" width="380" height="320" loading="lazy">
                    </UCarousel>
                    <img src="/courusel_front.png" class="absolute w-full z-20 opacity-95 pl-2 max-w-none scale-120 bottom-0" loading="lazy">
                    <img src="/courusel_back.png" class="absolute w-full max-w-none scale-120 bottom-0" loading="lazy">
                </div>
            </UContainer>
            <UContainer>
                <section id="guide">
                <h1 class="text-center text-2xl py-10">Как попасть на сервер?</h1>
                <UContainer class="relative flex flex-col lg:flex-row items-center justify-center gap-x-8 gap-y-4 p-4 sm:p-6">
                    <UPageCard class="font-[MinecraftTenLowercase] items-center min-w-60 lg:min-w-120 min-h-60 max-w-160"
                            description="Это совершенно бесплатно, рассматриваем в течение 1 рабочего дня."
                            icon="i-simple-icons-discord"
                            orientation="vertical"
                            spotlight
                            spotlight-color="primary"
                            to="https://discord.com/invite/4ww4hZqsp4"
                            target="_blank"
                            variant="outline"
                            :ui="{ root: 'bg-primary/10  hover:bg-sky-700' }"
                            >
                            <template #title>
                                <p class="text-white text-nowrap font-normal text-lg" >Подайте заявку <br> на нашем дискорд сервере</p>
                            </template>
                    </UPageCard>
                    <UPageCard class="font-[MinecraftTenLowercase] items-center min-w-60 lg:min-w-120 min-h-60 max-w-160"
                        description="Можно установить с помощью mrpack и zip"
                        icon="i-simple-icons-modrinth"
                        orientation="vertical"
                        spotlight
                        spotlight-color="primary"
                        to="/modpack"
                        variant="outline"
                        :ui="{ root: `bg-primary/10  hover:bg-sky-700` }"
                        >
                        <template #title>
                            <p class="text-white text-nowrap font-normal text-lg" >Скачайте сборку</p>
                        </template>
                    </UPageCard>
                    <UPageCard class="font-[MinecraftTenLowercase] items-center min-w-60 lg:min-w-120 min-h-60 max-w-160"
                        icon="i-lucide-server"
                        description="По кнопке в главном меню или используя адресс: play.luminous-official.ru."
                        orientation="vertical"
                        spotlight
                        spotlight-color="primary"
                        variant="outline"
                        :ui="{ root: `bg-sky-700/10` }"
                        >
                        <template #title>
                            <p class="text-white text-nowrap font-normal text-lg" >Зайдите на сервер</p>
                        </template>
                    </UPageCard>
                </UContainer>
                </section>
            </UContainer>
        </UPageBody>
    </UPage>
</template>

