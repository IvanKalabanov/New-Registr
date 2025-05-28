import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PersonalCabinet.css';

const PersonalCabinet = () => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [message, setMessage] = useState('');
  
  // Начальные данные пользователя
  const [userData, setUserData] = useState({
    email: 'anonim123456@mail.com',
    phone: '+79850407839',
    gender: 'женщина',
    city: 'Краснодар',
    street: 'Ленина',
    house: '11',
    building: '5',
    birthDate: '26.05.2025'
  });

  // Состояние для формы редактирования
  const [editForm, setEditForm] = useState({
    email: '',
    phone: '',
    gender: '',
    city: '',
    street: '',
    house: '',
    building: '',
    birthDate: ''
  });

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const handleContactClick = () => {
    setShowContactModal(true);
  };

  const handleEditClick = () => {
    // Заполняем форму текущими данными при открытии
    setEditForm({ ...userData });
    setShowEditModal(true);
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    navigate('/');
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmitMessage = () => {
    console.log('Отправлено сообщение:', message);
    setShowContactModal(false);
    setMessage('');
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const saveChanges = () => {
    setUserData({ ...editForm });
    setShowEditModal(false);
  };

  const cancelEdit = () => {
    setShowEditModal(false);
  };

  const cancelContact = () => {
    setShowContactModal(false);
    setMessage('');
  };

  return (
    <div className="personal-cabinet">
      {/* Шапка */}
      <header className="cabinet-header">
        <div className="header-content">
          <h1>Личный кабинет</h1>
          <div className="header-actions">
            <button className="contact-btn" onClick={handleContactClick}>Написать нам</button>
            <button className="logout-btn" onClick={handleLogoutClick}>Выйти</button>
          </div>
        </div>
      </header>

      {/* Основное содержимое */}
      <main className="cabinet-main-content">
        {/* Левая колонка - информация пользователя */}
        <section className="user-info-section">
          <div className="user-profile">
            <h2 className="username">Аноним</h2>
            <span className="completion-status">Заполнено на 20%</span>
          </div>
          
          <div className="user-actions">
            <button className="action-btn" onClick={handleEditClick}>Добавить данные</button>
            <button className="action-btn">Изменить пароль</button>
          </div>
        </section>

        {/* Правая колонка - данные пользователя */}
        <section className="user-data-section">
          <div className="data-grid">
            <DataRow label="E-mail" value={userData.email} />
            <DataRow label="Контактный телефон" value={userData.phone} />
            <DataRow label="Пол" value={userData.gender} />
            <DataRow label="Город" value={userData.city} />
            <DataRow label="Улица" value={userData.street} />
            <DataRow label="Дом" value={userData.house} />
            <DataRow label="Корпус" value={userData.building} />
            <DataRow label="Дата рождения" value={userData.birthDate} />
          </div>
        </section>
      </main>

      {/* Модальное окно подтверждения выхода */}
      {showLogoutModal && (
        <div className="modal-overlay">
          <div className="logout-modal">
            <h3>Подтверждение выхода</h3>
            <p>Вы действительно хотите выйти из личного кабинета?</p>
            <div className="modal-actions">
              <button className="modal-btn confirm-btn" onClick={confirmLogout}>Да, выйти</button>
              <button className="modal-btn cancel-btn" onClick={cancelLogout}>Отмена</button>
            </div>
          </div>
        </div>
      )}

      {/* Модальное окно "Написать нам" */}
      {showContactModal && (
        <div className="modal-overlay">
          <div className="contact-modal">
            <h3>Написать нам</h3>
            <p>Оставьте ваше сообщение, и мы ответим вам в ближайшее время.</p>
            <textarea
              className="message-input"
              value={message}
              onChange={handleMessageChange}
              placeholder="Введите ваше сообщение..."
              rows="5"
            />
            <div className="modal-actions">
              <button className="modal-btn confirm-btn" onClick={handleSubmitMessage}>Отправить</button>
              <button className="modal-btn cancel-btn" onClick={cancelContact}>Отмена</button>
            </div>
          </div>
        </div>
      )}

      {/* Модальное окно редактирования данных */}
      {showEditModal && (
        <div className="modal-overlay">
          <div className="edit-modal">
            <h3>Редактирование данных</h3>
            <form className="edit-form">
              <div className="form-group">
                <label>E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={editForm.email}
                  onChange={handleEditChange}
                />
              </div>
              
              <div className="form-group">
                <label>Телефон</label>
                <input
                  type="tel"
                  name="phone"
                  value={editForm.phone}
                  onChange={handleEditChange}
                />
              </div>
              
              <div className="form-group">
                <label>Пол</label>
                <select
                  name="gender"
                  value={editForm.gender}
                  onChange={handleEditChange}
                >
                  <option value="мужчина">Мужчина</option>
                  <option value="женщина">Женщина</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Город</label>
                <input
                  type="text"
                  name="city"
                  value={editForm.city}
                  onChange={handleEditChange}
                />
              </div>
              
              <div className="form-group">
                <label>Улица</label>
                <input
                  type="text"
                  name="street"
                  value={editForm.street}
                  onChange={handleEditChange}
                />
              </div>
              
              <div className="form-group">
                <label>Дом</label>
                <input
                  type="text"
                  name="house"
                  value={editForm.house}
                  onChange={handleEditChange}
                />
              </div>
              
              <div className="form-group">
                <label>Корпус</label>
                <input
                  type="text"
                  name="building"
                  value={editForm.building}
                  onChange={handleEditChange}
                />
              </div>
              
              <div className="form-group">
                <label>Дата рождения</label>
                <input
                  type="date"
                  name="birthDate"
                  value={editForm.birthDate}
                  onChange={handleEditChange}
                />
              </div>
              
              <div className="modal-actions">
                <button type="button" className="modal-btn confirm-btn" onClick={saveChanges}>
                  Сохранить
                </button>
                <button type="button" className="modal-btn cancel-btn" onClick={cancelEdit}>
                  Отмена
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// Компонент строки данных
const DataRow = ({ label, value }) => (
  <div className="data-row">
    <span className="data-label">{label}</span>
    <span className="dots">......</span>
    <span className="data-value">{value}</span>
  </div>
);

export default PersonalCabinet;