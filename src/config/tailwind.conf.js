const colorTheme = {
  'black':'var(--black)',
  'bej':'var(--bej)',
  'darkbej':'var(--darkbej)',
  'red':'var(--red)',
  'bej2':'var(--bej2)',
  'awc':'var(--awc)',
  }
  
  const spacingTheme = Array(31).fill(null)
    .reduce((acc, _, index) => ({ ...acc, ...{ [index]: `${(index) * 4}px` } }), {});
  
  module.exports = {
    colorTheme,
    spacingTheme,
  }