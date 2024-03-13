const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answerOptions = [
	'Oczywiście, jeszcze jak!',
	'Na pewno, na pewno, czas pokaże, zobaczymy, zobaczymy...',
	'Skąd Ci to przyszło do głowy?',
	'Wstawaj zesrałeś się!',
	'Jeden rabin powie tak, drugi rabin powie nie',
	'Nie wiem, choć sie domyślam',
]

const shakeBall = () => {
	ball.classList.add('shake-animation')
	setTimeout(checkInput, 1000)
}

const checkInput = () => {
	if (input.value !== '' && input.value.slice(-1) === '?') {
		showRandomAnswer()
		ball.classList.remove('shake-animation')
		error.textContent = ''
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent = 'Pytanie musi być zakończone znakiem "?".'
		answer.textContent = ''
		ball.classList.remove('shake-animation')
	} else {
		error.textContent = 'Wprowadź pytanie!'
		answer.textContent = ''
		ball.classList.remove('shake-animation')
	}
}

const showRandomAnswer = () => {
	const number = Math.floor(Math.random() * 6)
	answer.innerHTML = `<span>Odpowiedź:</span> ${answerOptions[number]}`
}

ball.addEventListener('click', shakeBall)
