export default ({ app }, inject) => {
  app.sort = arr => arr.sort()
  inject('integerSort', arr => arr.sort((a, b) => { return a - b }))
}
