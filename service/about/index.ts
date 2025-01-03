import { get } from ".."

const API_PREFIX = "/api/about"

/**
 * 获取关于信息
 */
export const getAboutMessage = () => get<{ name: string; msg: string }>(API_PREFIX + "/msg")
