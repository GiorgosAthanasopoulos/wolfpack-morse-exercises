<script lang="ts">
	import Exercises from '../components/Exercises.svelte';
	import WolfpackSpecifics from '../components/WolfpackSpecifics.svelte';
	import PracticeMorseWithOthers from '../components/PracticeMorseWithOthers.svelte';
	import DontKnowMorseCodeYet from '../components/DontKnowMorseCodeYet.svelte';
	import Contact from '../components/Contact.svelte';
	import IndexFootNotes from './../components/IndexFootNotes.svelte';
	import { _imagesFolder, _largeImageSize } from './store';

	let imagesFolder;
	_imagesFolder.subscribe((v) => {
		imagesFolder = v;
	});
	let morseCodeSrc = imagesFolder + 'morse-code.svg';

	let imageSize: number;
	_largeImageSize.subscribe((v) => {
		imageSize = v;
	});
</script>

<div>
	<img src={morseCodeSrc} alt="Morse Code CheatSheet" width={imageSize} height={imageSize} />
	<h1>Wolfpack Morse Exercises</h1>

	<Exercises />
	<WolfpackSpecifics />
	<PracticeMorseWithOthers />
	<DontKnowMorseCodeYet />
	<Contact />
	<IndexFootNotes />
</div>

<head>
	<title>Wolfpack Morse Exercises</title>
</head>
