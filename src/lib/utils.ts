/**
 * Converts a string to sentence case (first letter uppercase, rest lowercase)
 * @param str - The string to convert
 * @returns The string in sentence case
 */
export function toSentenceCase(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Capitalizes the first letter of a string without changing the rest
 * @param str - The string to capitalize
 * @returns The string with first letter capitalized
 */
export function capitalizeFirst(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
