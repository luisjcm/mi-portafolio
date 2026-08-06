---
title: "CRM Core API"
description: "Backend transaccional para gestión de clientes con consultas nativas."
techStack: ["Node.js", "PostgreSQL", "Express"]
github: "https://github.com/luisjcm/crm-core-api"
featured: true
---

Esta API fue diseñada para manejar la gestión de clientes en un entorno de alta demanda. 

Para maximizar el rendimiento y tener control absoluto sobre las sentencias SQL, decidí construir la conexión a la base de datos de forma completamente nativa, prescindiendo por completo del uso de un ORM (Object-Relational Mapper).

### Retos Técnicos Resueltos:
* **Diseño del Esquema:** Estructuración de relaciones relacionales complejas desde cero.
* **Manejo de Conexiones:** Optimización del pool de conexiones asíncronas para evitar cuellos de botella durante transacciones concurrentes.