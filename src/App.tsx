import './App.css'
import Counter from './components/Counter'
import MarkdownPane from './components/MarkdownPane'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Hello, Windsurf!
        </h1>
        
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <Counter />
          <MarkdownPane />
        </div>
      </div>
    </div>
  )
}

export default App
