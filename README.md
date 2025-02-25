# **Optimización de Costes en Google Maps**




### **🔹Firestore para Almacenar Rutas**
- Se guarda cada ruta generada en **Firestore** para evitar consultas repetidas a Google Directions API.
- **Se reducen costos al disminuir llamadas a la API de Google**.

### **🔹Firestore + Caché Local**
- Primero se consulta **IndexedDB o AsyncStorage** en el dispositivo del usuario.
- Si no está en caché, se consulta **Firestore**.
- Si no está en Firestore, se hace la solicitud a **Google Directions API**.
- **Mejor balance entre optimización y flexibilidad**.



---

## **Costes Originales (Sin Optimización)**

### **🔹 Google Directions API**
- **Cada consulta de ruta cuesta 40€ por cada 1000 solicitudes**.
- Si cada post recibe **50 consultas al mes** → 100 posts → **5000 consultas al mes**.
- **Coste total:** (5000 / 1000) × 40€ = **200€/mes**.

### **🔹 Google Maps JavaScript API**
- **Cada carga de mapa es gratuita hasta 28,000 cargas/mes**.
- Si superamos ese límite: **7€ por cada 1000 cargas adicionales**.
- Con **100 usuarios activos diarios** cargando el mapa **5 veces al día**:
  - **500 cargas/día × 30 días = 15,000 cargas/mes (dentro del límite gratuito)**.
  - **Costo adicional: 0€ (mientras no pasemos el límite gratuito)**.

### **🔹 Google Places API** (Opcional para imágenes de lugares)
- **Hasta 100,000 solicitudes al mes gratis**.
- **Si superamos el límite:** 5€ por cada 1000 solicitudes adicionales.

🔻 **Total sin optimización:** **200€/mes (solo por Google Directions API).**

---

## **Costes Optimizados con Firestore y Caché**

### **🔹Solo Firestore (Sin caché local)**
- Se almacena cada ruta en Firestore después de la primera consulta a Google Directions API.
- Se reducen las peticiones a Google en **80%**.
- **Nuevo coste de Google API:** (1000 / 1000) × 40€ = **40€/mes**.
- **Coste en Firestore:** **0.30€/mes aprox.** por lecturas de rutas.
- 🔥 **Ahorro: 159.70€/mes**.

### **🔹 Firestore + Caché Local**
- Se usa caché local para evitar incluso las lecturas en Firestore.
- Solo el **10% de las consultas** van a Google API.
- **Nuevo coste de Google API:** (500 / 1000) × 40€ = **10€/mes**.
- **Coste en Firestore:** **0€ (gracias a la caché local)**.
- 🔥 **Ahorro: 190€/mes**.


