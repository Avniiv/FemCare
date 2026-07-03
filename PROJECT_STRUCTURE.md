FemCare/
│
├── PROJECT_STRUCTURE.md
├── README.md
│
├── client/
│
└── server/

# FemCare - Project Structure

## Project Architecture

FemCare follows a **Layered Architecture**.

```
React
   │
Axios
   │
Express Routes
   │
Controllers
   │
Services
   │
Models
   │
MongoDB Atlas
```

---

# Server Structure

```
server/
│
├── config/
│   └── db.js
│
├── constants/
│   └── nutritionData.js
│
├── controllers/
│   ├── AuthController.js
│   ├── PeriodController.js
│   ├── SymptomController.js
│   ├── WaterController.js
│   └── EmergencyController.js
│
├── middleware/
│   ├── authMiddleware.js
│   ├── validateRequest.js
│   └── errorMiddleware.js
│
├── models/
│   ├── User.js
│   ├── PeriodLog.js
│   ├── SymptomLog.js
│   ├── WaterLog.js
│   └── EmergencyContact.js
│
├── routes/
│   ├── authRoutes.js
│   ├── periodRoutes.js
│   ├── symptomRoutes.js
│   ├── waterRoutes.js
│   └── emergencyRoutes.js
│
├── services/
│   ├── AuthService.js
│   ├── PeriodService.js
│   ├── SymptomService.js
│   ├── WaterService.js
│   └── EmergencyService.js
│
├── validations/
│   ├── authValidation.js
│   ├── periodValidation.js
│   ├── symptomValidation.js
│   ├── waterValidation.js
│   └── emergencyValidation.js
│
├── utils/
│   ├── calculateCycleLength.js
│   ├── predictNextPeriod.js
│   └── formatDate.js
│
├── app.js
├── server.js
├── package.json
└── .env
```

---

# Layer Responsibilities

## Routes

Receives incoming requests and forwards them to controllers.

---

## Controllers

Handles request and response.

Should contain minimal logic.

---

## Services

Contains business logic.

Handles calculations, validations, and database interactions.

---

## Models

Defines MongoDB collections using Mongoose.

---

## Middleware

Authentication

Authorization

Validation

Error Handling

---

## Utils

Reusable helper functions.

No business logic.

---

## Constants

Stores static data like nutrition recommendations.

No database required.