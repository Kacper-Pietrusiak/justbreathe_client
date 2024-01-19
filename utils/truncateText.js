export const truncateText = (text) => {
  const maxLength = 200;

  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength) + "...";
  }
};
