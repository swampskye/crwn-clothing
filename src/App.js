import Home from "./routes/home/home";

import { Route, Routes } from 'react-router-dom'
import Navigation from './routes/navigation/navigation'
import SignIn from "./routes/signin/signin";
const Shop = () => {
  return <h1>Shop Page</h1>
}




const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<SignIn />} />
      </Route >
    </Routes>
  )
}

export default App;
