<script>
	import { onMount } from 'svelte';

	export let showOnPx = 150;
	let hidden = true;
	let first = true;

	onMount(() => {
		handleOnScroll();
	});

	const goToTop = () => {
		document.body.scrollIntoView();
	};

	const scrollContainer = () => {
		return document.documentElement || document.body;
	};

	const handleOnScroll = () => {
		if (!scrollContainer() && !first) {
			return;
		}

		first = false;
		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false;
		} else {
			hidden = true;
		}
	};
</script>

<svelte:window on:scroll={handleOnScroll} />
<button on:click={goToTop} class:hidden>^</button>

<style>
	button.hidden {
		opacity: 0;
		visibility: hidden;
	}

	button {
		opacity: 1;
		transition: opacity 0.5s, visibility 0.5s;
		position: fixed;
		z-index: 99;
		left: 20px;
		user-select: none;
		bottom: 20px;
	}

	button,
	button.hidden {
		background-color: #22a7f0;
		color: white;
		border-radius: 50%;
		width: 50px;
		height: 50px;
		border: none;
		font-size: 30px;
		font-weight: bold;
	}

	button:hover {
		scale: 130%;
		color: black;
	}
</style>
