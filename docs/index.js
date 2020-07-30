const isIE = document.documentMode
const backUrl = location.href;

if ( isIE ) {
  location.href = `https://psephopaiktes.github.io/IE-blocker/?${backUrl}`;
}
