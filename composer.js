/**
 * composer is a kind of higher order function for composing two or more functions with each other
 * @param {Function} f 
 * @param  {Array<any>} props 
 */
const composer = (f, ...props) => f(...props);

module.exports = composer;