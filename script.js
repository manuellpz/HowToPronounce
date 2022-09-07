const search = document.querySelector('.pronunciation__search');
const phonetic = document.querySelector('.pronunciation__phonetic');
const pronunciation = document.querySelector('.pronunciation__audio');

search.addEventListener('keyup',e => {
	if(e.keyCode === 13) {
		let word = e.target.value;
		fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
		.then(response => response.json())
		.then(data => {
			let found_audio = false;
			let audio = '';
			let index = 0;

			while(found_audio === false) {
				if(data[0].phonetics[index].audio !== '') {
					found_audio = true;
					audio = data[0].phonetics[index].audio;
				}
				index++;
			}
			phonetic.innerHTML = data[0].phonetics[0].text;
			pronunciation.innerHTML = `
               <audio src="${audio}" controls></audio>
			`;
		})
	}
}) 