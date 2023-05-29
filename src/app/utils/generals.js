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
