export const format_date = (val) => {
  try {
    let date = new Date(val);
    const day = date.toLocaleString("default", { day: "2-digit" });
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.toLocaleString("default", { year: "numeric" });
    return `${day} ${month} ${year}`;
  } catch (error) {
    console.log(error);
    return val;
  }
};
export default function Helper() {
  return true;
}
