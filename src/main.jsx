import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Test from './pages/test'
import Header from './components/Header/header'
import Footer from './components/Footer'
import store from './app/store.js'
import { Provider } from 'react-redux'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/app" element={<Test />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
