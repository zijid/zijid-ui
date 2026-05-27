let counter = 0

export function generateWindowId(): string {
  return `z-window-${++counter}`
}
