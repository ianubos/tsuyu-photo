export const sortByDate = (a, b) => {
  return new Date(b.date) - new Date(a.date)
}

export const jsUcfirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}