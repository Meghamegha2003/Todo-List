import Todo from "./component/Todo"
import "./App.css"
import Header from "./component/Header/Header"
import Footer from "./component/Footer/Footer"

function App() {
 
  return (
      <div className="App">
        <Header />
        <Todo />
        <Footer />
      </div>
  )
}

export default App
