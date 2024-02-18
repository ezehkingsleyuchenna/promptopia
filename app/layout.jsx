import '@styles.globals.css';

export const metadata  = {
  title: "Promptopia",
  description: 'Discover & Share AI Prompt'
}

const RootLayout = () => {
  return (
    <html>
      <body>
        <div className="main">
          <div className="gradient">
          </div>
        </div>
        <main className="app">
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout