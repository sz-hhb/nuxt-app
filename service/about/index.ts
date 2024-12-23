import { get } from ".."

const API_PREFIX = "/api/about"

export const getAboutMessage = () => get<{ name: string; msg: string }>(API_PREFIX + "/msg")
