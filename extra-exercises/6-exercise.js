function isMultiple(divisor, dividend) {
  return divisor % dividend === 0;
}

function main(start, end) {
  for (start; start <= end; start++) {
    if (isMultiple(start, 7) && isMultiple(start, 5)) {
      console.log(start, 'Ping Pong');
    } else if (isMultiple(start, 7) && !isMultiple(start, 5)) {
      console.log(start, 'Ping');
    } else if (!isMultiple(start, 7) && isMultiple(start, 5)) {
      console.log(start, 'Pong');
    } else {
      console.log(start);
    }
  }
}

main(1, 100);
