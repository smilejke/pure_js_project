export function capitalize(string) {
  //pure function to multiply usage
  if (typeof string !== 'string') return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
}
