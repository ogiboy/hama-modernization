const fs = require('fs')
const cheerio = require('cheerio')

fs.readFile('./source-work.html', 'utf8', (err, html) => {
  if (err) {
    console.error('Error reading HTML file:', err)
    return
  }

  const $ = cheerio.load(html)
  const products = []

  $('.popup-detail').each((index, element) => {
    const id = $(element).attr('id') || `product-${index}`
    const title = $(element).find('.title').text().trim()
    const image = $(element).find('img').attr('src') || ''
    const description = $(element)
      .find('.description p, .description strong, .description table')
      .map((i, el) => $(el).html().trim())
      .get()

    products.push({ id, title, image, description })
  })

  fs.writeFile(
    'products-final.json',
    JSON.stringify({ products }, null, 4),
    (err) => {
      if (err) {
        console.error('Error writing JSON file:', err)
        return
      }
      console.log('JSON file has been saved.')
    }
  )
})
