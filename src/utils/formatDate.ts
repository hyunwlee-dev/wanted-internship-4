export const formatDate = (date: string) => {
  const newDate = new Date(date);
  const hour = newDate.getHours();
  const minute = newDate.getMinutes();
  const second = newDate.getSeconds();
  if (second < 10)
    return `${hour}:${minute}:0${second}`;
  return `${hour}:${minute}:${second}`;
};
