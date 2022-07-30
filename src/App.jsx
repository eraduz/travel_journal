import Nav from './components/Nav'
import TravelCard from './components/TravelCard'
import data from './data'

function App() {
  const travels = data.map(travel => {
    return (
      <TravelCard 
        {...travel}
      />
    )
  })

  return (
    <div className="container">
      <Nav />
      {travels}
    </div>
  )
}

export default App
