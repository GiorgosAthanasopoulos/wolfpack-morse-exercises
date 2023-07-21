<script lang="ts">
	import { _imagesFolder, _smallImageSize } from '../routes/store';

	let imagesFolder;
	_imagesFolder.subscribe((v) => {
		imagesFolder = v;
	});
	let exercisesSrc = imagesFolder + 'exercises.jpg';

	let imageSize: number;
	_smallImageSize.subscribe((v) => {
		imageSize = v;
	});

	let alphabetPage = '/alphabet';
	let numbersPage = '/numbers';
	let wordsSentencesPage = '/words-sentences';
	let wpSentencesSimplePage = '/wp-sentences-simple';
	let wpSentencesAdvancedPage = '/wp-sentences-advanced';
</script>

<div>
	<h2><img src={exercisesSrc} alt="Exercises" width={imageSize} height={imageSize} /> Exercises</h2>
	<ol>
		<li>
			<a href={alphabetPage}>Alphabet,</a>
		</li>
		<li>
			<a href={numbersPage}>Numbers,</a>
		</li>
		<li>
			<a href={wordsSentencesPage}>Words/Sentences,</a>
		</li>
		<li>
			<a href={wpSentencesSimplePage}>WP Sentences (simple),</a>
		</li>
		<li>
			<a href={wpSentencesAdvancedPage}>WP Sentences (advanced).</a>
		</li>
	</ol>
</div>
