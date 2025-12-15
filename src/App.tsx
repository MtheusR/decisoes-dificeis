import Header from './components/Header'
import MainContent from './components/MainContent'
import { SorteioProvider } from './context/SorteioContext'

function App() {
  return (
    <SorteioProvider>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <MainContent />
        <footer className="text-center py-6 text-gray-600 text-sm">
          <p>🎮 Divirta-se com as escolhas mais difíceis! by Matheus Robert</p>
          <p className="mt-2 text-xs text-gray-500">Cada pergunta é única! Não se repetem até reiniciar.</p>
        </footer>
      </div>
    </SorteioProvider>
  )
}

export default App;