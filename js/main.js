import { config } from './config/tipification.js'

console.log(config)


document
  .querySelector('[data-content]')
  .textContent = JSON.stringify(config)
