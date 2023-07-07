export function copyToClipboard(id: string) {
  window.navigator.clipboard.writeText(
    document.getElementById(id)?.innerText || ""
  );
}
