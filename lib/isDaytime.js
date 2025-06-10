export function isDaytime(sunrise, sunset, currentTime) {
  // Compare directly as time strings
  return currentTime >= sunrise && currentTime <= sunset;
}
