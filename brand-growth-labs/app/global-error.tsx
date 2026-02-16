'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          backgroundColor: '#FFF205',
          padding: '16px'
        }}>
          <div style={{ 
            backgroundColor: 'white', 
            border: '4px solid black', 
            borderRadius: '18px', 
            padding: '32px', 
            maxWidth: '400px', 
            width: '100%',
            boxShadow: '6px 6px 0px #000000',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3.75rem', marginBottom: '16px' }}>🍋💥</div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px' }}>
              Critical Error!
            </h2>
            <p style={{ color: '#666', marginBottom: '24px' }}>
              Something went seriously wrong. Please refresh the page.
            </p>
            <button
              onClick={reset}
              style={{
                backgroundColor: '#000',
                color: '#fff',
                border: '3px solid #000',
                padding: '12px 24px',
                borderRadius: '50px',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '4px 4px 0px #FF85D1'
              }}
            >
              Refresh
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
