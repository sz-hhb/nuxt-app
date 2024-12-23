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
    <h1>{{ res.data.name }}</h1>
    <button @click="setLocale('zh-Hans')">zh-Hans</button>
    <button @click="setLocale('zh-Hant')">zh-Hant</button>
    <button @click="setLocale('en')">en</button>
    <h2>{{ t("public") }}</h2>
  </div>
</template>

<script setup lang="ts">
import { getAboutMessage } from "@/service/about"

const { t, setLocale } = useI18n()

useHead({
  title: "首页"
})

const res = await getAboutMessage()
</script>

<style></style>
