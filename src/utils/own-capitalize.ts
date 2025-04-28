export default function ownCapitalize(words: string) {
    const arrOfWord: string[] = words.toLowerCase().split(' ');

    const newArrOfWord: string[] = [];

    function capitalizeFirstLetter(word: string) {
        const arrOfWord = word.split('');

        const newArrOfWords: string[] = [];

        for (let alphabet = 0; alphabet < word.length; alphabet++) {
            if (alphabet == 0) {
                newArrOfWords.push(arrOfWord[alphabet].toUpperCase());
            } else {
                newArrOfWords.push(arrOfWord[alphabet]);
            }
        }
        return newArrOfWords.join('');
    }

    for (let i = 0; i < arrOfWord.length; i++) {
        newArrOfWord.push(capitalizeFirstLetter(arrOfWord[i]));
    }
    return newArrOfWord.join(' ');
}