export const isSafeUrl = (url: string): boolean =>
  url.startsWith("https://") || url.startsWith("/");
