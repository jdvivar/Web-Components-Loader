// Get a list of all the undefined web components
const markup = document.documentElement.innerHTML
const found = markup.match(/<\/(\w+-(\w+-?)+)>/g)
console.log(found)