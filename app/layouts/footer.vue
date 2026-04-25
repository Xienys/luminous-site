<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

// const items: NavigationMenuItem[] = [{
//   label: 'Figma Kit',
//   to: 'https://go.nuxt.com/figma-ui',
//   target: '_blank'
// }, {
//   label: 'Playground',
//   to: 'https://stackblitz.com/edit/nuxt-ui',
//   target: '_blank'
// }, {
//   label: 'Releases',
//   to: 'https://github.com/nuxt/ui/releases',
//   target: '_blank'
// }]
</script>


<template>
  <UFooter class="bg-(--footer-bg)">
      <template #left>
        <span class='flex flex-col'>
            <p class="text-center">Luminous x Winevii</p>
            <p class="text-muted text-sm">
            Copyright © {{ new Date().getFullYear() }}
            </p>
        </span>
      </template>

      <!-- <UNavigationMenu :items="items" variant="link" /> -->

      <template #right>
        <UButton
          icon="i-simple-icons-telegram"
          color="neutral"
          variant="ghost"
          to="https://t.me/luminousmc"
          target="_blank"
          aria-label="Telegram"
        />
        <UButton
          icon="i-simple-icons-discord"
          color="neutral"
          variant="ghost"
          to="https://discord.com/invite/4ww4hZqsp4"
          target="_blank"
          aria-label="Discord"
        />
        <UButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          to="https://github.com/xienys"
          target="_blank"
          aria-label="GitHub"
        />
        <UButton
            icon="i-simple-icons-youtube"
            color="neutral"
            variant="ghost"
            to="https://www.youtube.com/@wineviii"
            target="_blank"
            aria-label="GitHub"
        />
      </template>
  </UFooter>
</template>
