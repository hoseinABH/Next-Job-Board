const env = process.env.NODE_ENV;
export const isProduction = () => env === 'production';
export const isDevelopment = () => env === 'development';
