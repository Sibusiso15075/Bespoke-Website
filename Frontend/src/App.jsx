import Header from './Header'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import './App.css'
import FilterBar from './FilterBar'
import SearchBar  from './SearchBar'

function App() {
  return(
    <>
    <Header></Header>
    <FilterBar></FilterBar>
    <SearchBar></SearchBar> 
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/products/:id' element={<ProductDetail/>} />
      </Routes>
    </Router>
    </>
  )
  
}

export default App



