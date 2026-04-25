export default defineEventHandler(async (event) => {
  const response = await $fetch('https://api.github.com/repos/Xienys/elytra-speedometer/releases')
  return response
})