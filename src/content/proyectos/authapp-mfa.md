---
title: AuthApp MFA | Autenticación Segura
description: Gestión de Accesos y Seguridad Frontend
techStack: ['React Native', 'Expo Go', 'MFA Security', 'TOTP']
wireframeType: mobile
projectUrl: #
isNew: true
order: 1
images:
  - /projects/authapp/authapp1.jpg
  - /projects/authapp/authapp2.jpg
  - /projects/authapp/authapp3.jpg
  - /projects/authapp/authapp4.jpg
---

Desarrollo de un **Producto Mínimo Viable (MVP)** enfocado estrictamente en la seguridad de identidades mediante autenticación de múltiples factores (MFA). 

Este prototipo funcional fue diseñado originalmente como núcleo práctico para la defensa de mi Trabajo Especial de Grado de Maestría (TEGM) y recientemente refactorizado para cumplir con los estándares actuales de desarrollo móvil.

### Arquitectura y Funcionalidad
Como prueba de concepto (PoC), la aplicación demuestra la viabilidad técnica de implementar capas de seguridad robustas directamente desde el frontend:

* **Gestión de Sesiones:** Flujos de registro e inicio de sesión con validación estricta y manejo de estados seguros.
* **Autenticación en Dos Pasos:** Integración de códigos temporales (TOTP) y simulación de hardware biométrico (Huella Digital).
* **Gestor de Bóvedas:** Módulos internos para la protección de "Cajas Fuertes" y "Notas Seguras", requiriendo re-autenticación para accesos sensibles.
* **Interfaz de Usuario (UI/UX):** Diseño en modo oscuro (Dark Mode) enfocado en reducir la carga cognitiva, priorizando la claridad y la confianza del usuario final.

Este proyecto sienta las bases estructurales para una futura implementación a gran escala corporativa, priorizando siempre la protección de datos bajo protocolos modernos.