# Blog Project

A modern blog application built with Node.js, Express, and TypeScript, featuring a RESTful API architecture.

## 🚀 Features

- RESTful API endpoints
- MongoDB database integration
- TypeScript support
- Express.js framework
- Modern development setup with ESLint and Prettier

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd blog
```

2. Install dependencies:
```bash
npm install
```

3. Set up your environment variables:
- Copy `config.env.example` to `config.env`
- Update the variables with your configuration

## 🚀 Running the Application

### Development Mode (JavaScript)
```bash
npm run dev
```

### Development Mode (TypeScript)
```bash
npm run typ-dev
```

## 🏗️ Project Structure

```
├── controllers/     # Route controllers
├── models/         # Database models
├── routes/         # API routes
├── services/       # Business logic
├── src/           # Source files
├── server.ts      # Server entry point (TypeScript)
├── server.js      # Server entry point (JavaScript)
└── config.env     # Environment configuration
```

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript/JavaScript
- **Database**: MongoDB
- **Development Tools**:
  - ESLint for linting
  - Prettier for code formatting
  - Nodemon for development
  - Morgan for HTTP request logging
