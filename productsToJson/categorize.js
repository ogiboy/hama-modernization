const fs = require('fs')

fs.readFile('./products-final.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Dosya okuma hatası:', err)
    return
  }

  const jsonData = JSON.parse(data)
  const categorizedProducts = {}

  jsonData.products.forEach((product) => {
    const imagePathParts = product.image.split('/')
    const category = imagePathParts[2]

    if (!categorizedProducts[category]) {
      categorizedProducts[category] = []
    }

    categorizedProducts[category].push(product)
  })

  fs.writeFile(
    'products-categorized.json',
    JSON.stringify(categorizedProducts, null, 2),
    (err) => {
      if (err) {
        console.error('Dosya yazma hatası:', err)
        return
      }
      console.log('✅ Ürünler kategorize edildi: products-categorized.json')
    }
  )
})
