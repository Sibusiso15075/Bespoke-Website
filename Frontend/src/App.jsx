import Header from 'Frontend\src\Header.tsx'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import 'Frontend\src\App.css'
import FilterBar from 'Frontend\src\FilterBar.tsx'
import SearchBar  from 'Frontend\src\SearchBar.tsx'

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



