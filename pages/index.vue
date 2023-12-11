<template>
  <div>
    <h1>欢迎来到首页</h1>
    <AppAlert> 这是一个自动导入的组件。 </AppAlert>
    <img src="/img/q.jpg" alt="" />
    <NuxtLink to="/about">关于</NuxtLink>
    <span>页面访问量：{{ res.url }}</span>
    计数器: {{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
    <div>
      <h1>Nuxt生日</h1>
      <p>{{ date }}</p>
      <label for="locale-chooser">预览不同的语言环境</label>
      <select id="locale-chooser" v-model="locale">
        <option v-for="locale of locales" :key="locale" :value="locale">
          {{ locale }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Home"
})

const counter = useState("counter", () => Math.round(Math.random() * 1000))
const locales = useLocales()
const locale = useLocale()
const date = useLocaleDate(new Date("2016-10-26"))

const { data: res }: { data: any } = await useFetch("https://httpbin.org/get")
</script>

<style scoped lang="scss">
h1 {
  color: $secondary;
}
</style>
