<script lang="ts">
	import Exercises from '../components/Exercises.svelte';
	import WolfpackSpecifics from '../components/WolfpackSpecifics.svelte';
	import PracticeMorseWithOthers from '../components/PracticeMorseWithOthers.svelte';
	import DontKnowMorseCodeYet from '../components/DontKnowMorseCodeYet.svelte';
	import Contact from '../components/Contact.svelte';
	import IndexFootNotes from './../components/IndexFootNotes.svelte';
</script>

<div>
	<img src="morse-code.svg" alt="morse-code" width="96" height="96" />
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
