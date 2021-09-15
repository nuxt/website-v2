const onLoad = (callback, delay = 1) => {
  // missed the load event, run now
  if (document.readyState === 'complete') {
    setTimeout(() => callback(), delay)
  } else {
    window.addEventListener('load', function () {
      setTimeout(() => callback(), delay)
    })
  }
}

export default function () {
  window.dataLayer = window.dataLayer || []
  function gtag() {
    dataLayer.push(arguments)
  }
  gtag('js', new Date())
  gtag('config', 'G-R6EZ8X9DGS')

  onLoad(() => {
    // manually add the script to the DOM
    const script = document.createElement('script')
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-R6EZ8X9DGS'
    script.async = true
    document.head.appendChild(script)
  })
}
