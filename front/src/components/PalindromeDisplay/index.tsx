export default function PalindromeDisplay({
  displayText,
  isPalindrome,
}: {
  displayText: string;
  isPalindrome: boolean;
}) {
  return (
    <p
      aria-live="polite"
      className={
        isPalindrome
          ? "p-3 text-green-700 bg-green-200 rounded-md text-center font-bold"
          : "p-3 text-red-700 bg-red-200 rounded-md text-center font-bold"
      }
    >
      {displayText}
    </p>
  );
}
