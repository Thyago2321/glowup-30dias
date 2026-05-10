export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#ffe4ec',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      fontFamily: 'Arial',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{
        fontSize: '60px',
        color: '#ff4f8b',
        marginBottom: '20px'
      }}>
        Glow Up em 30 Dias
      </h1>

      <p style={{
        fontSize: '22px',
        maxWidth: '700px',
        color: '#444'
      }}>
        Transforme sua autoestima, aparência e rotina com um guia simples e feminino.
      </p>

      <button style={{
        marginTop: '40px',
        background: '#ff4f8b',
        color: 'white',
        border: 'none',
        padding: '18px 40px',
        borderRadius: '20px',
        fontSize: '20px',
        cursor: 'pointer'
      }}>
        QUERO MEU GLOW UP
      </button>
    </main>
  )
}
