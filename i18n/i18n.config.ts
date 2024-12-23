import en from "../locale/en.json"
import zhHans from "../locale/zh-hans.json"
import zhHant from "../locale/zh-hant.json"

const messages: { [key: string]: any } = {
  en: en,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant
}

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: messages
}))
