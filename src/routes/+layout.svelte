<nav>
	<a href="/">Home</a>
	<a href="/alphabet">Alphabet</a>
	<a href="/numbers">Numbers</a>
	<a href="/words-sentences">Words/Sentences</a>
	<a href="/wp-sentences-simple">WP sentences (simple)</a>
	<a href="/wp-sentences-advanced">WP sentences (advanced)</a>
	<a href="/syntax">Syntax</a>
</nav>
<hr />

<slot />

<hr />
<footer>
	<h2>
		Created with <p style="display: inline; color: black;">&#10084</p>
		by georglasen(<a
			target="_blank"
			href="https://github.com/giorgosathanasopoulos/wolfpack-morse-exercises"
			>Website Source Code</a
		>).
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
