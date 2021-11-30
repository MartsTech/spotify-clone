export const millisToMinutesAndSeconds = (millis: number) => {
  const minutes = Math.floor(millis / 60000);
  const seconds = Number(Math.floor((millis % 60000) / 1000).toFixed(0));

  if (seconds === 60) {
    return minutes + 1 + ":00";
  }

  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};
