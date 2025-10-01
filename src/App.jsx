import Home from './pages/Home'
import Layout from './components/layout/layout.jsx'

const App = () => {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
    <Layout>
      <Home />
    </Layout>
    </div>
  )
}

export default App