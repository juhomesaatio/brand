
export function unsecureClipboardCopy(text, textArea) {
    textArea.value = text;
    textArea.textContent = text;
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      return true;
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
      return false;
    }
  }