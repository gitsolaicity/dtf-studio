export function evaluateExpression(input: string): number | null {
  try {
    // Безопасный eval: только цифры, операторы и скобки
    const sanitized = input.replace(/[^-+*/().\d\s]/g, '')
    if (!sanitized.trim()) return null

    // eslint-disable-next-line no-eval
    const result = eval(sanitized)
    return typeof result === 'number' && isFinite(result) ? result : null
  } catch {
    return null
  }
}
