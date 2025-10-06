import React from 'react'

function Header(){
  return (
    <header className="header">
      <div className="logo">Taskal</div>
      <nav className="nav">
        <a href="#story">Story</a>
        <a href="#auth">Login</a>
      </nav>
    </header>
  )
}

function Story(){
  return (
    <section id="story" className="card story">
      <h2>Короткая философская история</h2>
      <p>Путник посмотрел в озеро и увидел не только небо, но и свое отражение — напоминание, что мир состоит из зеркал. От перемен в нас отражается и мир, и наоборот. Быть внимательным — значит видеть связь между шумом ветра и своей мыслью.</p>
    </section>
  )
}

function Auth(){
  const handleSubmit = (e)=>{
    e.preventDefault();
    alert('Вход выполнен (имитация)')
  }
  return (
    <aside id="auth" className="card auth">
      <h3>Вход</h3>
      <form onSubmit={handleSubmit} className="form">
        <label> Email <input type="email" required/></label>
        <label> Пароль <input type="password" minLength={6} required/></label>
        <div className="form-actions"><button type="submit">Войти</button></div>
      </form>
    </aside>
  )
}

export default function App(){
  return (
    <div className="app">
      <Header />
      <main className="layout">
        <Story />
        <Auth />
      </main>
      <footer className="footer">© Taskal — Автодеплой</footer>
    </div>
  )
}
