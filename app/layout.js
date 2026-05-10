export const metadata = {
  title: 'Glow Up em 30 Dias',
  description: 'Guia feminino de autoestima',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
