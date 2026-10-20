# Resultados del parcial práctico 2

Registrar resultados reales después de implementar y probar los endpoints. Sustituir los IDs de ejemplo por los utilizados.

| Petición y datos utilizados | Código esperado | Código obtenido | Observación |
| --- | --- | --- | --- |
| Crear una reserva con datos válidos y sala existente. | 201 | Pendiente | |
| Crear con participants como texto. | 400 | Pendiente | |
| Crear con una propiedad adicional, como status. | 400 | Pendiente | |
| Crear con una sala inexistente. | 404 | Pendiente | |
| Cancelar una reserva activa y consultar el cambio guardado. | 200 | Pendiente | |
| Cancelar de nuevo la misma reserva. | 409 | Pendiente | |
| Intentar cancelar con ID abc. | 400 | Pendiente | |
| Intentar cancelar con un ID entero inexistente. | 404 | Pendiente | |

## Pruebas unitarias

Registrar el resultado de `npm test`.

| Caso | Resultado obtenido |
| --- | --- |
| 1. La regla real rechaza una reserva cancelada. | Pendiente |
| 2. El servicio cancela y guarda una reserva activa. | Pendiente |
| 3. Si la regla simulada rechaza, conserva active y no guarda. | Pendiente |

Resumen de ejecución: pendiente.


// respuestas


Para este

POST http://localhost:3003/api/reservations

{
  "purpose": "Project planning",
  "participants": 6,
  "roomId": 1
}

me aparece en el body de postman


{    "id": 5,    "purpose": "Project planning",    "participants": 6,    "status": "active",    "room": {        "id": 1,        "name": "Room A"    }}

201 created / 33ms / 345B


Para

POST http://localhost:3003/api/reservations
Content-Type: application/json

{
  "purpose": "Invalid participants",
  "participants": "6",
  "roomId": 1
}

400 Bad request / 30ms / 335B


Para 

PATCH http://localhost:3003/api/reservations/1/cancel


{
    "message": "TODO 2: implement cancellation",
    "error": "Not Implemented",
    "statusCode": 501
}

501Not Implemented
2 ms
335 B

Para 

GET http://localhost:3003/api/reservations/1

{
    "id": 1,
    "purpose": "Sprint planning",
    "participants": 6,
    "status": "active",
    "room": {
        "id": 1,
        "name": "Room A"
    }
}

200OK
16 ms
339 B


Para

http://localhost:3003/api/reservations/abc/cancel

{
    "message": "Validation failed (numeric string is expected)",
    "error": "Bad Request",
    "statusCode": 400
}

400Bad Request
4 ms
343 B

Para 

http://localhost:3003/api/reservations/999999999/cancel

{
    "message": "TODO 2: implement cancellation",
    "error": "Not Implemented",
    "statusCode": 501
}

501Not Implemented
3 ms
335 B