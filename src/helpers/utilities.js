/**
 * @desc strip html tags from string
 * @param  {String}  [string='']
 * @return {String}
 */
export const stripHTML = string => {
  var tmp = document.createElement("DIV");
  tmp.innerHTML = string;
  return tmp.textContent || tmp.innerText || "";
}

/**
 * @desc return ellipsed text
 * @param  {String} [text='']
 * @param  {String} [maxLength=text.length]
 * @return {String}
 */
export const ellipseText = (text = "", maxLength = false) =>
  maxLength && text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
