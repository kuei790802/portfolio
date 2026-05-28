export const BASE_PATH = "/portfolio";

export function assetPath(src: string): string {
  if (!src.startsWith("/") || src.startsWith(BASE_PATH)) return src;
  return `${BASE_PATH}${src}`;
}
