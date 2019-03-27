export function pageYOffsetSafe() {
  if (typeof window !== `undefined`) {
    return window.pageYOffset
  }
  return 0
}