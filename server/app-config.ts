const DB_PORT = process.env.DB_PORT ? process.env.DB_PORT : 27017
const DB_NAME = process.env.DB_NAME ? process.env.DB_NAME : 'app_db'
const BUILD_DB_URL = `mongodb://localhost:${DB_PORT}/${DB_NAME}`
const PROD_DB_URL = `mongodb://database/${DB_NAME}`
export const DB_URL = process.env.DB_URL ? process.env.DB_URL : (process.env.NODE_ENV == 'prod' ? PROD_DB_URL : BUILD_DB_URL)
