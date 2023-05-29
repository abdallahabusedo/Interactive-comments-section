export function getTimeFromString(timeString) {
  const timeValue = parseInt(timeString);
  console.log(timeValue);
  if (timeString.includes("year")) {
    return timeValue * 12; // Convert years to months
  } else if (timeString.includes("month")) {
    return timeValue;
  } else if (timeString.includes("day")) {
    return timeValue;
  } else if (timeString.includes("hour")) {
    return timeValue / 24; // Convert hours to days
  } else if (timeString.includes("minute")) {
    return timeValue / (24 * 60); // Convert minutes to days
  } else if (timeString.includes("second")) {
    return timeValue / (24 * 60 * 60); // Convert seconds to days
  }

  return 0; // Default case if timeString does not match any format
}
export function formatDateAgo(date) {
  const currentDate = new Date();
  const timeDiff = currentDate.getTime() - date.getTime();
  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);

  if (months > 0) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }
}
