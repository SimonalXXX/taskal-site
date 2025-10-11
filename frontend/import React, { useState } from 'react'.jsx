import React, { useState } from 'react'

export default function Example() {
	// режим: 'login' | 'register'
	const [mode, setMode] = useState('login')
	const switchMode = (m) => {
		setMode(m)
		setMessage(null)
		setErrors({})
	}

	// общие состояния
	const [loading, setLoading] = useState(false)
	const [message, setMessage] = useState(null)
	const [errors, setErrors] = useState({})

	// login
	const [loginEmail, setLoginEmail] = useState('')
	const [loginPassword, setLoginPassword] = useState('')

	// register
	const [fullName, setFullName] = useState('')
	const [dob, setDob] = useState('')
	const [regEmail, setRegEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [petName, setPetName] = useState('')

	// простые валидаторы
	const validateEmail = (v) => /\S+@\S+\.\S+/.test(v)
	const validatePhone = (v) => /^\+?[0-9\s\-()]{6,20}$/.test(v)

	const handleLogin = (e) => {
		e.preventDefault()
		const errs = {}
		if (!loginEmail || !validateEmail(loginEmail)) errs.email = 'Введите корректную почту'
		if (!loginPassword) errs.password = 'Введите пароль'
		setErrors(errs)
		if (Object.keys(errs).length) return
		setLoading(true)
		// имитация запроса
		setTimeout(() => {
			setLoading(false)
			setMessage('Успешный вход (демо).')
			console.log('LOGIN', { email: loginEmail })
		}, 800)
	}

	const handleRegister = (e) => {
		e.preventDefault()
		const errs = {}
		if (!fullName || fullName.trim().length < 3) errs.fullName = 'Укажите ФИО'
		if (!dob) errs.dob = 'Укажите дату рождения'
		if (!regEmail || !validateEmail(regEmail)) errs.email = 'Введите корректную почту'
		if (!phone || !validatePhone(phone)) errs.phone = 'Введите корректный номер'
		// petName optional
		setErrors(errs)
		if (Object.keys(errs).length) return
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
			setMessage('Регистрация выполнена (демо). Проверьте почту для подтверждения — в реальном приложении.')
			console.log('REGISTER', { fullName, dob, regEmail, phone, petName })
			// очистка формы (опционально)
		}, 900)
	}

	return (
		<div className="auth-page">
			<div className="auth-card" role="region" aria-label="Авторизация">
				<header className="auth-header">
					<h1 className="brand">Taskal</h1>
					<p className="subtitle">{mode === 'login' ? 'Войдите в аккаунт' : 'Создайте новый аккаунт'}</p>
				</header>

				{message && <div className="message success">{message}</div>}

				{mode === 'login' ? (
					<form className="auth-form" onSubmit={handleLogin} noValidate>
						<label className="field">
							<span className="label">Почта</span>
							<input
								type="email"
								value={loginEmail}
								onChange={(e) => setLoginEmail(e.target.value)}
								placeholder="you@example.com"
								required
							/>
							{errors.email && <small className="error">{errors.email}</small>}
						</label>

						<label className="field">
							<span className="label">Пароль</span>
							<input
								type="password"
								value={loginPassword}
								onChange={(e) => setLoginPassword(e.target.value)}
								placeholder="• • • • • • • •"
								required
							/>
							{errors.password && <small className="error">{errors.password}</small>}
						</label>

						<button className="btn primary" type="submit" disabled={loading}>
							{loading ? 'Вхожу...' : 'Войти'}
						</button>

						<div className="switch">
							<span>Нет аккаунта?</span>
							<button type="button" className="link" onClick={() => switchMode('register')}>
								Зарегистрироваться
							</button>
						</div>
					</form>
				) : (
					<form className="auth-form" onSubmit={handleRegister} noValidate>
						<label className="field">
							<span className="label">ФИО</span>
							<input
								type="text"
								value={fullName}
								onChange={(e) => setFullName(e.target.value)}
								placeholder="Иванов Иван Иванович"
								required
							/>
							{errors.fullName && <small className="error">{errors.fullName}</small>}
						</label>

						<label className="field">
							<span className="label">Дата рождения</span>
							<input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
							{errors.dob && <small className="error">{errors.dob}</small>}
						</label>

						<label className="field">
							<span className="label">Почта</span>
							<input
								type="email"
								value={regEmail}
								onChange={(e) => setRegEmail(e.target.value)}
								placeholder="you@example.com"
								required
							/>
							{errors.email && <small className="error">{errors.email}</small>}
						</label>

						<label className="field">
							<span className="label">Номер телефона</span>
							<input
								type="tel"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								placeholder="+7 (999) 000-00-00"
								required
							/>
							{errors.phone && <small className="error">{errors.phone}</small>}
						</label>

						<label className="field">
							<span className="label">Имя питомца (необязательно)</span>
							<input
								type="text"
								value={petName}
								onChange={(e) => setPetName(e.target.value)}
								placeholder="Барсик"
							/>
						</label>

						<button className="btn primary" type="submit" disabled={loading}>
							{loading ? 'Регистрация...' : 'Зарегистрироваться'}
						</button>

						<div className="switch">
							<span>Уже есть аккаунт?</span>
							<button type="button" className="link" onClick={() => switchMode('login')}>
								Войти
							</button>
						</div>
					</form>
				)}

				<footer className="auth-foot">
					<small>Это демо-интерфейс — данные не отправляются на сервер.</small>
				</footer>
			</div>
		</div>
	)
}
