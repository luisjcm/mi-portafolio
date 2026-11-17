---
title: "Avior Checklist | PWA de Inspección IT"
subtitle: "Digitalización de procesos operativos aeroportuarios"
description: "Desarrollé una Progressive Web App (PWA) de alto impacto para el departamento de IT de Avior Airlines, enfocada en digitalizar e inspeccionar de manera ágil el estado operativo en estaciones aeroportuarias de madrugada. Mediante una arquitectura offline-first con React, Vite y Tailwind CSS, implementé un sistema que permite a los técnicos capturar firmas digitales en pantalla de forma nativa e inspeccionar los 12 puntos clave de la operación sin depender de conexión a internet. El resultado fue la eliminación total del formato en papel, centralizando la recolección de datos y automatizando la generación y exportación de reportes a PDF firmados, listos para auditorías en tiempo real."
isNew: true
badge: "Nuevo"
techStack:
- "React"
- "PWA"
- "Tailwind CSS"
- "Vite"
tags:
- "PWA"
- "Automatización"
- "Soporte IT"
- "PDF Generation"
imageUrl: "/projects/avior-checklist/checklist1.png"
images:
- "/projects/avior-checklist/checklist1.png"
- "/projects/avior-checklist/checklist2.png"
- "/projects/avior-checklist/checklist3.png"
- "/projects/avior-checklist/checklist4.png"
- "/projects/avior-checklist/checklist5.png"
- "/projects/avior-checklist/checklist6.png"
wireframeType: "web"
projectUrl: "https://avior-checklist.vercel.app/" # URL del proyecto o repo
order: 10
category: "javascript"
---

### Características Técnicas

- **Arquitectura Offline-First:** Implementación de Service Workers para garantizar la operatividad continua en zonas del aeropuerto con conectividad nula o intermitente.
- **Firmas Biométricas:** Integración de HTML5 Canvas para la captura precisa y fluida de firmas a mano alzada desde dispositivos móviles y tablets.
- **Procesamiento Client-Side:** Toda la validación de datos y el estado de la aplicación se gestiona en el navegador, eliminando la latencia de red.
- **Generación PDF Nativa:** Exportación estructurada de reportes en tiempo real sin dependencias de procesamiento en servidor ni APIs de terceros.