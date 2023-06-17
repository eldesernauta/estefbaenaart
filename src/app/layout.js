import './globals.css'

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
        <title>Estef Baena Art</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
