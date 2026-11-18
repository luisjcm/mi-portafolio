---
title: "Calculadora de Nómina | PWA Mobile-first"
subtitle: "Procesamiento biométrico y exportación a Excel"
description: "Desarrollé una Progressive Web App (PWA) móvil-first de uso interno para optimizar el cálculo administrativo de compensaciones del personal técnico de IT en Avior Airlines. Mediante el procesamiento de datos del sistema Bioadmin y horarios mensuales, implementé algoritmos específicos en JavaScript y React para calcular automáticamente horas extras, recargos nocturnos, días feriados y descansos laborados por quincena. El resultado fue un sistema de cálculo exacto e inmediato que automatiza la exportación de la data directamente al formato oficial de Excel (.xlsx) mediante JSZip, reduciendo drásticamente el error humano y el tiempo de gestión administrativa al cierre de cada periodo."
isNew: true
badge: "Nuevo"
techStack:
- "React"
- "Offline-first"
- "JSZip"
- "Vite"
tags:
- "PWA"
- "Excel"
- "Automatización"
- "Mobile-first"
imageUrl: "/projects/horas-extras/horas1.png"
images:
- "/projects/horas-extras/horas1.png"
- "/projects/horas-extras/horas2.png"
- "/projects/horas-extras/horas3.png"
- "/projects/horas-extras/horas4.png"
- "/projects/horas-extras/horas5.png"
wireframeType: "web"
projectUrl: "https://horas-extras-avior.vercel.app/" # URL del proyecto o repo
order: 4
category: "javascript"
---

### Características Técnicas

- **Algoritmia de Procesamiento:** Desarrollo de lógica compleja en JavaScript para el cruce dinámico de reportes biométricos contra calendarios y normativas laborales.
- **Manipulación de Excel Client-Side:** Integración nativa de librerías (JSZip/ExcelJS) para leer plantillas oficiales en crudo, mapear celdas, inyectar los datos calculados y exportar el archivo `.xlsx` final sin intervención de un backend.
- **Arquitectura Offline-First:** Configuración de Service Workers para asegurar que la herramienta de cálculo sea 100% funcional en cualquier entorno, incluso sin acceso a internet.
- **Interfaz Mobile-First:** Arquitectura de UI enfocada en la usabilidad desde dispositivos móviles, facilitando la gestión administrativa en cualquier momento.