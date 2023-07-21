<script lang="ts">
	import {
		_alphabetPage,
		_numbersPage,
		_sourceCodeLink,
		_syntaxPage,
		_wordsSentencesPage,
		_wpSentencesAdvancedPage,
		_wpSentencesSimplePage
	} from './store';

	let alphabetPage: string;
	_alphabetPage.subscribe((v) => {
		alphabetPage = v;
	});

	let numbersPage: string;
	_numbersPage.subscribe((v) => {
		numbersPage = v;
	});

	let wordsSentencesPage: string;
	_wordsSentencesPage.subscribe((v) => {
		wordsSentencesPage = v;
	});

	let wpSentencesSimplePage: string;
	_wpSentencesSimplePage.subscribe((v) => {
		wpSentencesSimplePage = v;
	});

	let wpSentencesAdvancedPage: string;
	_wpSentencesAdvancedPage.subscribe((v) => {
		wpSentencesAdvancedPage = v;
	});

	let syntaxPage: string;
	_syntaxPage.subscribe((v) => {
		syntaxPage = v;
	});

	let sourceCodeLink: string;
	_sourceCodeLink.subscribe((v) => {
		sourceCodeLink = v;
	});
</script>

<nav>
	<a href="/">Home</a>
	<a href={alphabetPage}>Alphabet</a>
	<a href={numbersPage}>Numbers</a>
	<a href={wordsSentencesPage}>Words/Sentences</a>
	<a href={wpSentencesSimplePage}>WP sentences (simple)</a>
	<a href={wpSentencesAdvancedPage}>WP sentences (advanced)</a>
	<a href={syntaxPage}>Syntax</a>
</nav>
<hr />

<slot />

<hr />
<footer>
	<h2>
		Created with <p style="display: inline; color: black;">&#10084</p>
		by georglasen (<a target="_blank" href={sourceCodeLink}>Website Source Code</a>).
	</h2>
</footer>

<style>
	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		padding: 1rem;
	}

	footer {
		margin: 0;
		padding: 0;
		padding-bottom: 5px;
	}

	:global(table, table th, table td) {
		margin-left: auto;
		margin-right: auto;
		padding: 2px;
		border: 1px solid black;
	}

	:global(ul, ol) {
		display: inline-block;
		text-align: left;
	}

	:global(html, body) {
		padding: 0;
		margin: 0;
		height: 100%;
		position: relative;
	}

	:global(main) {
		text-align: center;
		min-height: 100%;
		position: relative;
	}

	:global(body) {
		background-color: #1a5276;
		color: #22a7f0;
	}

	:global(a, a:visited) {
		color: #2ecc71;
	}

	:global(hr) {
		background-color: gray;
		color: gray;
		height: 2px;
		border: none;
	}
</style>
