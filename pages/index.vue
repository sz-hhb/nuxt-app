<template>
    <div>
        <header>
            <nav>
                <ul>
                    <li><NuxtLink to="/about">关于</NuxtLink></li>
                    <li><NuxtLink to="/posts/1">文章1</NuxtLink></li>
                    <li><NuxtLink to="/posts/2">文章2</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <h1>{{ res.data.msg }}</h1>
        <h2>{{ t("public") }}</h2>
    </div>
</template>

<script setup lang="ts">
import { getAboutMessage } from "@/service/about"

const { t } = useI18n()

useHead({
    title: "首页"
})

const res = await getAboutMessage()
</script>

<style></style>
