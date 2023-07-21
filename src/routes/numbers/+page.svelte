<script lang="ts">
	import { _imagesFolder, _largeImageSize } from '../store';

	let imagesFolder;
	_imagesFolder.subscribe((v) => {
		imagesFolder = v;
	});
	let morseCodeNumbersSrc = imagesFolder + 'morse-code-numbers.png';

	let imageSize: number;
	_largeImageSize.subscribe((v) => {
		imageSize = v;
	});
</script>

<div>
	<img
		src={morseCodeNumbersSrc}
		alt="Morse Code Numbers CheatSheet"
		width={imageSize}
		height={imageSize}
	/>
	<h1>Numbers</h1>
</div>
