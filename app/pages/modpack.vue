<script setup lang="ts">


interface Releases {
    name: string,
    tag_name: string,
    created_at: string,
    body: string
    assets: [{
        name: string,
        browser_download_url: string
    }]
}

const { data } = await useFetch<Releases[]>("https://api.github.com/repos/Xienys/Luminous-modpack/releases")

</script>
<template>
    <UPage>
        <UPageHeader>
            <h1 class="text-center text-2xl tracking-widest">Сборка сервера</h1>
        </UPageHeader>
        <UPageBody>
            <UContainer class="h-full">
                <span class="flex justify-center text-center text-error text-2xl" v-if="!data || data?.length === 0">Сборок нет или недоступны сервера GitHub</span>
                <UChangelogVersions>
                    <UChangelogVersion v-for="value in data"
                        :title="value.name"
                        :description="value.body"
                        :date="value.created_at",
                        :ui="{description: `font-[MinecraftTenLowercase]`, date: `font-[MinecraftTenLowercase] text-sm`}"
                        :badge="{
                        label: `Release`,
                        color: `primary`,
                        variant: `outline`,
                        }"
                        > <template #body>
                            <div class="flex flex-col gap-2 pt-2">
                                <UButton v-for="asset in value.assets" :label="asset.name" :to="asset.browser_download_url"></UButton> 
                            </div>
                        </template>
                    </UChangelogVersion>
                </UChangelogVersions>
            </UContainer>
        </UPageBody>
  </UPage>
</template>