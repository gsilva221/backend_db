# CondoManage Backend

## 🌟 DESCRIPCIÓN DEL PROYECTO

Este repositorio contiene la API backend de CondoManage, el sistema de control de visitas para condominios. El backend expone los servicios REST que administran los registros de ingreso y salida en MongoDB Atlas.

Objetivos principales:
- Procesar y validar los registros de visitas.
- Exponer una API segura y escalable para el frontend.
- Gestionar la persistencia de datos en la nube.
- Mantener una arquitectura modular y fácil de extender.

---

## 🛠️ STACK TECNOLÓGICO

| Capa | Tecnología | Justificación | Beneficio |
|---|---|---|---|
| Backend | Node.js + Express | API ligera, modular y ampliamente adoptada. | Desarrollo rápido y despliegue eficiente. |
| Base de datos | MongoDB Atlas | Almacenamiento documental NoSQL con replicación automática. | Escala sin configuración de infraestructura física. |
| Despliegue | Render | Hosting backend con soporte para PR deploys y staging. | Validación de API antes de producción. |
| Seguridad | CORS, variables de entorno | Control de origen y configuración central. | Aislamiento de entornos y despliegue confiable. |

---

## 📁 ESTRUCTURA DEL REPOSITORIO BACKEND

```text
backend_db/
  ├─ src/
  │   ├─ config/
  │   │   ├─ database.js
  │   │   ├─ db.js
  │   │   └─ jwt.js
  │   ├─ controllers/
  │   │   ├─ visitaController.js
  │   │   ├─ usuarioController.js
  │   │   └─ ...
  │   ├─ middleware/
  │   │   └─ authMiddleware.js
  │   ├─ models/
  │   │   ├─ Visita.js
  │   │   └─ ...
  │   ├─ routers/
  │   │   ├─ visitaRoutes.js
  │   │   └─ ...
  │   ├─ app.js
  │   └─ server.js
  ├─ package.json
  └─ README.md
```

---

## ⚙️ INSTALACIÓN Y CONFIGURACIÓN LOCAL

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPO_BACKEND>
cd backend_db
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Variables de entorno

Crea un archivo `.env` en esta carpeta con el siguiente contenido:

```env
PORT=4000
MONGODB_URI=mongodb+srv://<usuario>:<contraseña>@cluster0.mongodb.net/condomanage?retryWrites=true&w=majority
CORS_ORIGIN=http://localhost:5173
```

> Reemplaza `<usuario>`, `<contraseña>` y el host de MongoDB Atlas con los valores reales.

### 4. Levantar el servidor en local

```bash
npm run dev
```

El backend entonces estará disponible en `http://localhost:4000` y servirá la API bajo `/api`.

---

## 🗄️ MODELADO DE DATOS (NoSQL)

### Esquema Mongoose de la colección `visitas`

El modelo `Visita` define la persistencia de cada registro de visita con validaciones claras.

- `nombre`: String. Nombre completo del visitante. Requerido.
- `rut`: String. Identificador único. Requerido.
- `departamento`: String. Departamento destino. Requerido.
- `motivo`: String. Motivo de la visita. Requerido.
- `fechaIngreso`: Date. Fecha y hora de ingreso. Requerido.
- `fechaSalida`: Date. Fecha y hora de salida. Opcional.

#### Ejemplo de documento JSON

```json
{
  "nombre": "María Pérez",
  "rut": "12.345.678-9",
  "departamento": "A-403",
  "motivo": "Entrega de paquete",
  "fechaIngreso": "2026-07-14T09:25:00.000Z",
  "fechaSalida": "2026-07-14T09:42:00.000Z"
}
```

---

## 🔌 API ENDPOINTS (CRUD COMPLETO)

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/visitas` | Obtener todos los registros de visitas. |
| POST | `/api/visitas` | Crear una nueva visita. |
| PUT | `/api/visitas/:id` | Actualizar una visita existente. |
| DELETE | `/api/visitas/:id` | Eliminar una visita en tiempo real. |

### Flujo de uso

- `GET /api/visitas`: lista todas las visitas.
- `POST /api/visitas`: crea un registro de visita.
- `PUT /api/visitas/:id`: actualiza el registro de visita.
- `DELETE /api/visitas/:id`: borra el registro.

---

## 🐙 ESTRATEGIA DE RAMAS Y DEPLOYMENT (CI/CD)

### Control de versiones con Git

1. `main` es la rama de producción estable.
2. Crear una rama de prueba:

```bash
git checkout -b prueba-edicion
```

3. Probar cambios localmente y validar la API con un Preview Deployment.
4. Fusionar a `main` cuando el backend esté verificado:

```bash
git checkout main
git merge prueba-edicion
```

5. Eliminar la rama temporal:

```bash
git branch -d prueba-edicion
```

### Deploy seguro con staging y previews

- Render permite revisar PR deploys para el backend.
- Las pruebas en staging se completan antes de exponer la API en producción.
- Esto preserva `main` como rama confiable para deploys finales.

### Placeholders de despliegue

- App Web (Vercel): `https://<TU_APP_CONDOMANAGE>.vercel.app`
- API Backend (Render): `https://<TU_API_CONDOMANAGE>.onrender.com`

---

## 📌 Notas finales

Este README documenta el backend de CondoManage con foco en la API, la configuración local y el modelado de datos NoSQL. Mantén actualizadas las variables de entorno y la separación de repositorios para una operación clara y profesional.
