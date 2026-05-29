export const BASE_PATH = "";

export function assetPath(src: string): string {
  if (!BASE_PATH || !src.startsWith("/") || src.startsWith(BASE_PATH)) return src;
  return `${BASE_PATH}${src}`;
}
