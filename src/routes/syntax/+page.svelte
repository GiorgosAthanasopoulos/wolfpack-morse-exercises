<script lang="ts">
	import Calls from './components/Calls.svelte';
	import CommonCommands from './components/CommonCommands.svelte';
	import DataPhrases from './components/DataPhrases.svelte';
	import PdfDownloads from './components/PDFDownloads.svelte';
	import PhraseSyntax from './components/PhraseSyntax.svelte';
	import PositioningPhrases from './components/PositioningPhrases.svelte';
	import Questions from './components/Questions.svelte';
	import Reports from './components/Reports.svelte';
	import Sources from './components/Sources.svelte';
	import Toc from './components/TOC.svelte';
	import Toi from './components/TOI.svelte';
	import UnbrokenMorseProsigns from './components/UnbrokenMorseProsigns.svelte';
</script>

<div>
	<h1>Wolfpack Morse Syntax</h1>

	<Toc/>
	<PdfDownloads />
	<Sources />
	<CommonCommands />
	<UnbrokenMorseProsigns />
	<PhraseSyntax />
	<Calls />
	<Questions />
	<PositioningPhrases />
	<DataPhrases />
	<Toi />
	<Reports />
</div>

<head>
	<title>Syntax - Wolfpack Morse Exercises</title>
</head>
