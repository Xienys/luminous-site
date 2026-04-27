<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "ГЛАВНАЯ",
    to: "/",
    active: route.path === "/",
  },
  {
    label: "О СЕРВЕРЕ",
    to: "/about",
    active: route.path.startsWith("/about")
  },
  {
    label: "СБОРКА",
    to: "/modpack",
    active: route.path.startsWith("/modpack")
  },
])
</script>

<template>
  <UHeader class="bg-default/50 border-none!">
    <template #title>
      <img src="/logo.png" alt="logo" class="h-8 w-full">
    </template>

    <UNavigationMenu :items="items" />

    <template #right>

        <UTooltip text="Наш канал в телеграм">
            <UButton
            icon="i-simple-icons-telegram"
            color="neutral"
            variant="ghost"
            to="https://t.me/luminousmc"
            target="_blank"
            aria-label="Telegram"
            />
        </UTooltip>
        <UTooltip text="Наш сервер в дискорд">
            <UButton
            icon="i-simple-icons-discord"
            color="neutral"
            variant="ghost"
            to="https://discord.com/invite/4ww4hZqsp4"
            target="_blank"
            aria-label="Discord"
            />
        </UTooltip>
        <UTooltip text="Гитхаб технического администратора">
            <UButton
            icon="i-simple-icons-github"
            color="neutral"
            variant="ghost"
            to="https://github.com/xienys"
            target="_blank"
            aria-label="GitHub"
            />
        </UTooltip>
        <UTooltip text="Winevii">
            <UButton
            icon="i-simple-icons-youtube"
            color="neutral"
            variant="ghost"
            to="https://www.youtube.com/@wineviii"
            target="_blank"
            aria-label="GitHub"
            />
        </UTooltip>
    </template>

    <template #body>
        <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>

  </UHeader>
</template>
