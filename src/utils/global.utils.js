export const uid = () =>
  new Date().getTime() + Math.random().toString(16).slice(2)
