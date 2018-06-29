// API address from .env
let backendHost = process.env.REACT_APP_BACKEND_HOST || `http://localhost:${process.env.BACKEND_PORT}`;

export default backendHost