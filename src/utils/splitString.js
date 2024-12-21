export default function splitString(inputString) {
  const characters = [];
  const regex = /[\s\S]/gu;

  let match;

  while ((match = regex.exec(inputString)) !== null) {
    if (match[0] === " ") {
      characters.push("\u00A0");
    } else {
      characters.push(match[0]);
    }
  }

  return characters;
}
