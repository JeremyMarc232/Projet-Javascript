const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// entrepreneurs.forEach((entrepreneur) => {
//   console.log(entrepreneur.year)
// })

// entrepreneurs.forEach((entrepreneur) => {
//   console.log(entrepreneur.first)
//   console.log(entrepreneur.last)
// })

//Nés dans les années 70
const bornBetween = (yearMin, yearMax) => {
  return entrepreneurs.filter( (entrepreneur) => entrepreneur.year >= yearMin && entrepreneur.year <= yearMax )
 }
 console.log("Voici les entrepreneurs nés dans les années 70: ")
 bornBetween(1970, 1980).forEach( (list) => console.log(list))

//Array avec noms et prénoms
 const names = () => {
  return entrepreneurs.map( (entrepreneur) => `${entrepreneur.first} ${entrepreneur.last}`)
}
console.log("Voici une array contenant le prénom et nom des entrepreneurs:")
console.log(names())

//Age aujourd'hui
const ageToday = () => {
  return entrepreneurs.map( (entrepreneur) => `${entrepreneur.first} ${entrepreneur.last} aurait ` + (2020 - entrepreneur.year) + " ans en 2020" )
 }
console.log("Quel âge aurait chaque entrepreneur aujourd'hui ?")
ageToday().forEach( (age) => console.log(age))

