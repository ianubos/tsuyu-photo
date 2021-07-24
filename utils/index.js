export const sortByDate = (a, b) => {
  return new Date(b.date) - new Date(a.date)
}

export const jsUcfirst = (string) => {
    if (!string || string.length === 0) return '';
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}