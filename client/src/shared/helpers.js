export function capitalizeOnly(word) {
  return word
    .split('')
    .map((letter, i) => (
      i === 0
        ? letter.toUpperCase()
        : letter.toLowerCase()
    ))
    .join('')
};

export function constantToWord(word) {
  return word
    .split('_')
    .map(word => capitalizeOnly(word))
    .join(' ');
}