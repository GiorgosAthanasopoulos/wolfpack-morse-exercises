<script lang="ts">
	import BackToTopButton from '../../components/BackToTopButton.svelte';
	import CommonCommands from './components/CommonCommands.svelte';
	import PdfDownloads from './components/PDFDownloads.svelte';
	import Sources from './components/Sources.svelte';
</script>

<div>
	<h1>Wolfpack Morse Syntax</h1>

	<PdfDownloads />
	<Sources />
	<CommonCommands />
	<BackToTopButton />
</div>
