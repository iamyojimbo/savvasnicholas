export function pageYOffsetSafe() {
  if (window !== undefined) {
    return window.pageYOffset
  }
  return 0
}