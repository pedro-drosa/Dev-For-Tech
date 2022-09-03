function getDayInWeek(number) {
  let week = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  if (week.length >= number) return week[number - 1];
}

(() => {
  console.log(getDayInWeek(10));
})();
