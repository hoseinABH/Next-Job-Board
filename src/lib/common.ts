export function isArray(value: any) {
  return Array.isArray(value);
}
export function isObject(value: any) {
  return typeof value === 'object' && value !== null && !isArray(value);
}

export function isBoolean(value: any) {
  return typeof value === 'boolean';
}

export function isNumber(value: any) {
  return typeof value === 'number' && !isNaN(Number(value));
}

export function isServer() {
  return typeof window === 'undefined';
}

export function getBaseApiUrl() {
  return process.env.API_URL;
}

export async function pause(timeout: number) {
  return new Promise((res) => setTimeout(res, timeout));
}
