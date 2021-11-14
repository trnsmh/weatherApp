export const dateOfToday = () => {
  //date and dayOfWeek
  let date = new Date();
  return date;
};

export const dayOfWeek = () => {
  let options = { weekday: "long" };
  let today = new Intl.DateTimeFormat("en-US", options).format(dateOfToday());
  return today;
};
