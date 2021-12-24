const unformatter = (str) => {
  str = str.replaceAll("$", "");
  str = str.replaceAll(",", "");
  return parseInt(str);
};

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});


export {unformatter,formatter}