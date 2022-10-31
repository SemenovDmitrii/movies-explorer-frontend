export function durationFormat(duration) {
  const hours = Math.trunc(duration / 60);
  const min = duration % 60;
  return hours + 'ч ' + min + 'м';
}
