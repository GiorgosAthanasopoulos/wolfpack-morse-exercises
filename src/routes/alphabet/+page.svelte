<script lang="ts">
	import { _imagesFolder, _largeImageSize } from '../store';

	let imagesFolder;
	_imagesFolder.subscribe((v) => {
		imagesFolder = v;
	});
	let morseCodeSrc = imagesFolder + 'morse-code.png';

	let imageSize: number;
	_largeImageSize.subscribe((v) => {
		imageSize = v;
	});

	/* ===!=== */
	let videosFolder = 'videos/';

	let src = new Map<number, string>();
	src.set(0, videosFolder + 'classic-alphabet.mp4');
	src.set(1, videosFolder + 'alphabet-reversed.mp4');
	src.set(2, videosFolder + 'vowels-consonants.mp4');
	src.set(3, videosFolder + 'alternating-letters.mp4');
	src.set(4, videosFolder + 'syllable-count.mp4');

	$: alphabetProgress = 0;
	/* ===!=== */
</script>

<div>
	<img
		src={morseCodeSrc}
		alt="Morse Code Alphabet CheatSheet"
		width={imageSize}
		height={imageSize}
	/>
	<h1>Alphabet</h1>
</div>
