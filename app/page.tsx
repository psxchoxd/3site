import React from 'react';

export default function MyFirstProfileSite() {
  return (
    <div style={{ backgroundColor: "#f0f0f0", fontFamily: "Arial", padding: "20px" }}>
      
      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px", border: "1px solid #cccccc", textAlign: "center" }}>
          
          <img 
            src="https://unsplash.com" 
            style={{ width: "100px", height: "100px", borderRadius: "50px", objectFit: "cover" }} 
            alt="Фото профиля" 
          />
          
          <h1 style={{color: "#333333", margin: "10px 0 5px 0", fontSize: "24px" }}>Шпилевский Максим</h1>
          <p style={{ margin: "0", color: "green", fontWeight: "bold" }}>Junior Fullstack Developer</p>
          <p style={{ margin: "2px 0 15px 0", color: "gray" }}>@psxcho</p>
          
          <p style={{color: "#333333", fontSize: "15px" }}>Создаю удобные веб-сайты и сервисы. Пишу чистый код и изучаю современные технологии разработки.</p>
          
          <div style={{ marginTop: "15px" }}>
            <button style={{ backgroundColor: "green", color: "white", padding: "10px 15px", borderRadius: "5px", border: "none", fontWeight: "bold" }}>
              Редактировать профиль
            </button>
            <button style={{color: "#333333", marginLeft: "10px", padding: "8px 12px", backgroundColor: "white", border: "1px solid #cccccc", borderRadius: "5px" }}>
              🔗 Поделиться
            </button>
            <button style={{color: "#333333", marginLeft: "10px", padding: "8px 12px", backgroundColor: "white", border: "1px solid #cccccc", borderRadius: "5px" }}>
              ⚙️ Настройки
            </button>
          </div>

        </div>

        <br />

        <div style={{ backgroundColor: "white", padding: "15px", borderRadius: "8px", border: "1px solid #cccccc" }}>
          
          <p style={{color: "#333333", margin: "5px 0" }}>📝 <b>Публикации:</b> 142</p>
          <p style={{color: "#333333", margin: "5px 0" }}>👥 <b>Подписчики:</b> 12.5K</p>
          <p style={{color: "#333333", margin: "5px 0" }}>➕ <b>Подписки:</b> 843</p>
          <p style={{color: "#333333", margin: "5px 0" }}>❤️ <b>Лайки:</b> 88.2K</p>

        </div>

        <br />

        <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px", border: "1px solid #cccccc" }}>
          
          <h3 style={{color: "#333333", margin: "0 0 10px 0" }}>О себе</h3>
          <p style={{ color: "#333333", fontSize: "14px", lineHeight: "1.5" }}>
            Увлекаюсь программированием и созданием интерфейсов. Занимаюсь разработкой серверной логики и клиентской части приложений. Постоянно учусь новому.
          </p>
          
          <h4 style={{color: "#333333", margin: "15px 0 5px 0" }}>Навыки:</h4>
          <p style={{ margin: "0", color: "green", fontWeight: "bold" }}>#NodeJS #React #NextJS #Tailwind</p>
          
          <hr style={{ border: "none", borderTop: "1px solid #eeeeee", margin: "15px 0" }} />
          
          <h4 style={{color: "#333333", margin: "0 0 10px 0" }}>Контакты:</h4>
          <p style={{color: "#333333", margin: "5px 0", fontSize: "14px" }}>✉️ <b>Email:</b> shpilevsky@example.com</p>
          <p style={{color: "#333333", margin: "5px 0", fontSize: "14px" }}>🌐 <b>Веб-сайт:</b> shpilevsky.dev</p>
          <p style={{color: "#333333", margin: "5px 0", fontSize: "14px" }}>📅 <b>Регистрация:</b> 14 мая 2021</p>

        </div>

        <br />

        <div style={{ backgroundColor: "white", padding: "10px", borderRadius: "8px", border: "1px solid #cccccc" }}>
          
          <p style={{ margin: "5px 0", fontWeight: "bold", color: "green" }}>📂 Все посты (Выбрано)</p>
          <p style={{ margin: "5px 0", color: "gray" }}>🖼️ Медиа</p>
          <p style={{ margin: "5px 0", color: "gray" }}>📄 Документы</p>
          <p style={{ margin: "5px 0", color: "gray" }}>⭐ Избранное</p>

        </div>

        <br /><br />

        <footer style={{ borderTop: "1px solid #cccccc", paddingTop: "15px", fontSize: "12px", color: "gray" }}>
          
          <p style={{ margin: "5px 0" }}><b>⚡ Платформа</b> | © 2026 Название. Все права защищены.</p>
          
          <p style={{ margin: "5px 0" }}>
            <a href="#" style={{ color: "gray", marginRight: "10px" }}>О нас</a>
            <a href="#" style={{ color: "gray", marginRight: "10px" }}>Поддержка</a>
            <a href="#" style={{ color: "gray", marginRight: "10px" }}>Блог</a>
            <a href="#" style={{ color: "gray" }}>Вакансии</a>
          </p>
          
          <p style={{ margin: "5px 0" }}>
            <span>Конфиденциальность и Условия использования</span>
          </p>

        </footer>

      </div>
    </div>
  );
}
