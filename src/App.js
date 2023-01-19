import React, { useEffect, useState } from 'react'
import LoginPage from './components/login_page/LoginPage';
import MainPage from './components/MainPage';

const App = props => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('user_id') === null) {
    } else {
      setIsLogin(true)
    }
  })

  return (
    <div>
      {isLogin ?
        <MainPage /> :
        <LoginPage />
      }
    </div>
  )
}

export default App