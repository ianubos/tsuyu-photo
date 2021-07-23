export const sortByDate = (a, b) => {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
}

export const jsUcfirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}