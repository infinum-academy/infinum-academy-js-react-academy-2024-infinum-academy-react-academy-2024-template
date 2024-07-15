export const metadata = {
    title: 'TV Shows',
    description: 'Generated by Next.js',
  }

  import { Providers } from './providers'
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode,
  }) {
    return (
      <html lang='en'>
        <head>
            <link rel="icon" type="image/png" href="tv_icon.png" />
        </head>
        <body>
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    )
  }