function calculateTravelTime(averageSpeed, totalDistance) {
  const [hours, minutes] = (totalDistance / averageSpeed).toFixed(2).split('.');
  return { hours, minutes };
}

(() => {
  console.log(calculateTravelTime(95, 433));
})();
