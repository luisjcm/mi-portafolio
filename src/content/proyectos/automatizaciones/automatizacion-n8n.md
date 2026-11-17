---
title: "Automatización de Tasas BCV y USDT con n8n"
category: "n8n"
description: "Flujo programado que consulta tasas de cambio, calcula variaciones con JavaScript y envía alertas formateadas a Telegram."
imageUrl: "/projects/n8n/n8n-wireframe.svg" 
technologies: ["n8n", "JavaScript", "Telegram API", "REST APIs"]
date: "2024-05-20"
---

### El Desafío
Para tomar decisiones informadas sobre divisas (como USDT y BCV) en Venezuela, es necesario monitorear constantemente la brecha cambiaria y las fluctuaciones diarias. Hacerlo de forma manual consumía tiempo y era propenso a errores de cálculo.

### La Solución
Desarrollé un flujo de trabajo automatizado y programado utilizando **n8n**. El sistema no requiere intervención humana y se ejecuta tres veces al día (9:00 AM, 1:00 PM y 6:00 PM) para enviar un reporte formateado a un Bot de Telegram.

### Arquitectura del Workflow
1. **Schedule Trigger**: Inicia el flujo en horarios estratégicos de la jornada cambiaria.
2. **HTTP Request**: Consume una API financiera (`brecha-cambiaria.com`) para obtener los datos de BCV, Euro y Binance (USDT) en tiempo real.
3. **Lógica en JavaScript (Code Node)**: 
   - Recupera el estado de las tasas anteriores almacenadas en la memoria global del workflow (`$getWorkflowStaticData`).
   - Calcula la variación porcentual exacta (subida o bajada) respecto a la última lectura.
   - Establece un "semáforo" visual (🟢, 🟡, 🔴) dependiendo del porcentaje de brecha entre el dólar oficial y Binance.
4. **Formateo y Notificación**: Estructura el mensaje en HTML con emojis y lo envía instantáneamente mediante la API de Telegram.

### Tecnologías y Conceptos aplicados
- **n8n**: Orquestación de flujos y automatización.
- **JavaScript**: Procesamiento de datos, condicionales y manejo de estado global.
- **Telegram Bot API**: Notificaciones push en tiempo real.
- **Consumo de APIs REST**: Integración de datos externos.