function getRandomNumber(min, max) {
  if (min < 0) {
    return 'error'
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.random();
  if (min > max) {
    //если min больше max, меняем их местами
    return Math.floor(random * (min - max + 1)) + max;
  }
  if (min === max) {
    //если min равен max, возвращаем любое их них
    return min
  }
  //возвращаем рандомное число из диапазона
  return Math.floor(random * (max - min + 1)) + min;
}
console.log(getRandomNumber(1, 1));


function letStrLength(string, max) {
  return string.length <= max;
  console.log(letStrLength('', 140));
