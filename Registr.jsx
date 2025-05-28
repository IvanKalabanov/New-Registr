import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Authorization from './authorization';
import './Registr.css';

const RegistrationForm = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    login: '',
    password: '',
    email: '',
    lastName: '',
    firstName: '',
    middleName: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
    .then(() => navigate('/cabinet'))
    .catch(error => console.error(error));
  };

   const handleLoginRedirect = () => {
    navigate('/auth'); // Переход на страницу авторизации
  };

  return (
    <div className="registration-container">
      <h2>Форма регистрации</h2>
<form onSubmit={handleSubmit}>
        {/* Логин */}
        <div className="form-row">
          <div className="form-label">Логин</div>
          <input  type="text"  name="login"  value={formData.login} onChange={handleChange} placeholder="Введите логин" className="form-input" />
        </div>

        {/* Пароль */}
        <div className="form-row">
          <div className="form-label">Пароль</div>
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Введите пароль" className="form-input" />
        </div>

        {/* Почта */}
        <div className="form-row">
          <div className="form-label">Электронная почта</div>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Введите электронную почту" className="form-input" />
        </div>

        {/* Фамилия */}
        <div className="form-row">
          <div className="form-label">Фамилия</div>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Введите фамилию" className="form-input" />
        </div>

        {/* Имя */}
        <div className="form-row">
          <div className="form-label">Имя</div>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Введите своё имя" className="form-input" />
        </div>

        {/* Отчество */}
        <div className="form-row">
          <div className="form-label">Отчество</div>
          <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} placeholder="Введите своё отчество" className="form-input" />
        </div>

        {/* Пол */}
        <div className="form-row">
          <div className="form-label">Пол</div>
          <div className="gender-options">
            <label className="gender-option">
              <input type="checkbox" name="gender" value="мужской" checked={formData.gender === 'мужской'} onChange={handleChange} />
              <p className='gtext'>Муж.</p>
            </label>
            <label className="gender-option">
              <input type="checkbox" name="gender" value="женский" checked={formData.gender === 'женский'} onChange={handleChange} />
              <p className='gtext'>Жен.</p>
            </label>
            <label className="gender-option">
              <input type="checkbox" name="gender" value="другое" checked={formData.gender === 'другое'} onChange={handleChange}/>
              <p className='gtext'>Другое...</p>
            </label>
          </div>
        </div>

        <button type="submit" className="submit-btn">Зарегистрироваться</button>
        
        <div className="login-link">
          Уже есть аккаунт? 
            <button type="button" className='log' onClick={handleLoginRedirect}>Войти</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;