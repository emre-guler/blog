export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: String
      DATABASE: String
      DATABASE_PASSWORD: Substring
    }
  }
}