# Mi Página Personal 🚀

Una página web personal moderna y responsiva desplegada en GitHub Pages.

## 🌟 Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y escritorio
- **Animaciones Suaves**: Efectos de desplazamiento y transiciones elegantes
- **Secciones Incluidas**:
  - 🏠 Inicio (Hero)
  - 👤 Sobre Mí
  - 💼 Proyectos
  - 🛠️ Habilidades
  - 📧 Contacto

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 (con variables CSS y animaciones)
- JavaScript vanilla (sin frameworks)
- GitHub Pages para deployment

## 🎨 Características de Diseño

- Gradientes modernos en hero y sección de contacto
- Sistema de color basado en azul/púrpura
- Animaciones de fade-in con Intersection Observer
- Efecto parallax en la sección hero
- Menú móvil hamburguesa
- Efectos hover en tarjetas y botones
- Navegación pegajosa (sticky)

## 📦 Estructura del Proyecto

```
.
├── index.html          # Página principal
├── styles.css          # Estilos
├── script.js           # JavaScript para interactividad
└── README.md           # Este archivo
```

## 🚀 Cómo Usar

### Ver Localmente

1. Clona este repositorio:
```bash
git clone https://github.com/TU-USUARIO/TU-REPOSITORIO.git
```

2. Abre `index.html` en tu navegador favorito

### Desplegar en GitHub Pages

1. Ve a la configuración de tu repositorio en GitHub
2. Navega a **Settings** > **Pages**
3. En **Source**, selecciona la rama `main` (o `master`)
4. Haz clic en **Save**
5. Tu sitio estará disponible en: `https://TU-USUARIO.github.io/TU-REPOSITORIO/`

## ✏️ Personalización

### Modificar Información Personal

Edita `index.html` y actualiza:

- **Nombre**: Cambia "Daniel" por tu nombre
- **Descripción**: Actualiza el subtítulo en la sección hero
- **Sobre Mí**: Personaliza el contenido de la sección "Sobre Mí"
- **Proyectos**: Añade tus proyectos reales
- **Habilidades**: Lista tus habilidades técnicas
- **Enlaces de Contacto**: Actualiza los enlaces de GitHub, LinkedIn y email

### Cambiar Colores

Modifica las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #3b82f6;      /* Color principal */
    --secondary-color: #8b5cf6;    /* Color secundario */
    --dark-bg: #0f172a;            /* Fondo oscuro */
    --light-bg: #f8fafc;           /* Fondo claro */
}
```

### Añadir Foto de Perfil

Reemplaza el SVG del avatar en `index.html` con tu imagen:

```html
<div class="hero-image">
    <img src="tu-foto.jpg" alt="Tu Nombre" class="profile-image">
</div>
```

Y añade estos estilos en `styles.css`:

```css
.profile-image {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: var(--shadow-lg);
}
```

## 📱 Compatibilidad

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móviles

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Siéntete libre de:

1. Hacer un fork del proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 📧 Contacto

- GitHub: [@TU-USUARIO](https://github.com/TU-USUARIO)
- LinkedIn: [Tu Nombre](https://linkedin.com/in/TU-USUARIO)
- Email: tu-email@example.com

---

⭐ Si te gustó este proyecto, no olvides darle una estrella en GitHub!

Hecho con ❤️ y desplegado en GitHub Pages
