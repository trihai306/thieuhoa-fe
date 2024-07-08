export function formatNumber(number: number) {
  if (!number || isNaN(number)) return number;
  const strNumber: string = number.toString();
  const parts: string[] = strNumber.split('.');
  const integerPart: string = parts[0];
  const decimalPart: string = parts.length > 1 ? '.' + parts[1] : '';
  const formattedInteger: string = (+integerPart).toLocaleString('en');
  return formattedInteger + decimalPart;
}
