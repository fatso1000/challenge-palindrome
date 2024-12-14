export default function esPalindromo(frase: string): boolean {
  const fraseLimpia = frase.toLowerCase().replace(/[^a-z0-9]/g, "");
  const esPalindromo = fraseLimpia === fraseLimpia.split("").reverse().join("");

  return esPalindromo;
}
