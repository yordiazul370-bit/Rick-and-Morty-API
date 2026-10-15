export default function About() {
  return (
    <div style={{ padding: '30px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Página Informativa 📱</h1>
      <div style={{ border: '1px solid #444', padding: '20px', borderRadius: '10px', backgroundColor: '#272b33', color: '#fff' }}>
        <h2>Proyecto: Rick & Morty App (APK)</h2>
        <p><strong>Materia:</strong> Programación Móvil</p>
        <p><strong>Estudiante:</strong> [Tu Nombre Completo Aquí]</p>
        <p><strong>Código / ID:</strong> [Tu Código Estudiantil]</p>
        <p><strong>Versión:</strong> 1.0.0</p>
        <hr style={{ margin: '20px 0', borderColor: '#444' }} />
        <p>
          Esta aplicación consume los datos oficiales de la{' '}
          <a href="https://rickandmortyapi.com/" target="_blank" rel="noreferrer" style={{ color: '#00ff97' }}>
            Rick and Morty API
          </a>.
        </p>
      </div>
    </div>
  );
}