const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const titles = []

  tutorials.map((title) => {
    const splitTitle = title.split(" ")
    const joinedWords = []

    for (const word of splitTitle) {
      joinedWords.push(word.charAt(0).toUpperCase() + word.slice(1))
    }

    titles.push(joinedWords.join(" "))
  })

  return titles
}

/*const titleCased = () => {

  const capitalize = tutorials.map((title) => {

    const splitTitle = title.split(" ")

    const wordCased = splitTitle.map(word => word.charAt(0).toUpperCase() + word.slice(1))

    return wordCased.join(" ")

    })

    return capitalize;
}*/

console.log(titleCased())