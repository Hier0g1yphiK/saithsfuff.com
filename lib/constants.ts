/**
 * Base path prefix for assets. In production (GitHub Pages), images and other
 * public assets need to be prefixed with the repo name since they're served
 * from a subdirectory (e.g. https://user.github.io/saithsfuff.com/).
 *
 * next/image with `unoptimized: true` does NOT automatically prepend basePath,
 * so we handle it manually.
 */
export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/saithsfuff-site' : '';
