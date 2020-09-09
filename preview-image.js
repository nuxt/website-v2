const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:3000/integrations/cloudinary')
  await page.setViewport({ width: 2400, height: 2000, deviceScaleFactor: 2 })
  const hrefElement = await page.$('.hero')

  await hrefElement.screenshot({ path: 'example.jpeg' })

  await browser.close()
})()
