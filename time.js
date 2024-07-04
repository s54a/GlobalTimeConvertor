// const timeData = {
//   0: 0,
//   1: 15,
//   2: 30,
//   3: 45,
//   4: 60,
//   5: 75,
//   6: 90,
//   7: 105,
//   8: 120,
//   9: 135,
//   10: 150,
//   11: 165,
//   12: 180,
//   13: 195,
//   14: 210,
//   15: 225,
//   16: 240,
//   17: 255,
//   18: 270,
//   19: 285,
//   20: 300,
//   21: 315,
//   22: 330,
//   23: 345,
//   0.25: 3.75,
//   1.25: 18.75,
//   2.25: 33.75,
//   3.25: 48.75,
//   4.25: 63.75,
//   5.25: 78.75,
//   6.25: 93.75,
//   7.25: 108.75,
//   8.25: 123.75,
//   9.25: 138.75,
//   10.25: 153.75,
//   11.25: 168.75,
//   12.25: 183.75,
//   13.25: 198.75,
//   14.25: 213.75,
//   15.25: 228.75,
//   16.25: 243.75,
//   17.25: 258.75,
//   18.25: 273.75,
//   19.25: 288.75,
//   20.25: 303.75,
//   21.25: 318.75,
//   22.25: 333.75,
//   23.25: 348.75,
//   0.5: 7.5,
//   1.5: 22.5,
//   2.5: 37.5,
//   3.5: 52.5,
//   4.5: 67.5,
//   5.5: 82.5,
//   6.5: 97.5,
//   7.5: 112.5,
//   8.5: 127.5,
//   9.5: 142.5,
//   10.5: 157.5,
//   11.5: 172.5,
//   12.5: 187.5,
//   13.5: 202.5,
//   14.5: 217.5,
//   15.5: 232.5,
//   16.5: 247.5,
//   17.5: 262.5,
//   18.5: 277.5,
//   19.5: 292.5,
//   20.5: 307.5,
//   21.5: 322.5,
//   22.5: 337.5,
//   23.5: 352.5,
//   0.75: 11.25,
//   1.75: 26.25,
//   2.75: 41.25,
//   3.75: 56.25,
//   4.75: 71.25,
//   5.75: 86.25,
//   6.75: 101.25,
//   7.75: 116.25,
//   8.75: 131.25,
//   9.75: 146.25,
//   10.75: 161.25,
//   11.75: 176.25,
//   12.75: 191.25,
//   13.75: 206.25,
//   14.75: 221.25,
//   15.75: 236.25,
//   16.75: 251.25,
//   17.75: 266.25,
//   18.75: 281.25,
//   19.75: 296.25,
//   20.75: 311.25,
//   21.75: 326.25,
//   22.75: 341.25,
//   23.75: 356.25,
// };

// export function timeToValue(time) {
//   let [hours, minutes] = time.split(":").map(Number);
//   let key = hours;

//   if (minutes === 15) {
//     key += ".25";
//   } else if (minutes === 30) {
//     key += ".5";
//   } else if (minutes === 45) {
//     key += ".75";
//   } else if (minutes !== 0) {
//     return null; // Handle unexpected minute values
//   }

//   return timeData[key];
// }

export function timeToDegreeValue(time) {
  let [hours, minutes] = time.split(":").map(Number);

  // Calculate the total degrees
  let degrees = hours * 15 + minutes * 0.25;

  return degrees;
}
