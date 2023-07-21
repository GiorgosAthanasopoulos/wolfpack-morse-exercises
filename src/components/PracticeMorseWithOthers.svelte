<script lang="ts">
	import {
		_duyfkenDiscordLink,
		_imagesFolder,
		_morseCodeMeLink,
		_smallImageSize,
		_vailDuyfkenLink
	} from '../routes/store';

	let imagesFolder;
	_imagesFolder.subscribe((v) => {
		imagesFolder = v;
	});
	let multiplayerSrc = imagesFolder + 'multiplayer.jpg';

	let imageSize: number;
	_smallImageSize.subscribe((v) => {
		imageSize = v;
	});

	let duyfkenDiscordLink: string;
	_duyfkenDiscordLink.subscribe((v) => {
		duyfkenDiscordLink = v;
	});

	let vailDuyfkenLink: string;
	_vailDuyfkenLink.subscribe((v) => {
		vailDuyfkenLink = v;
	});

	let morseCodeMeLink: string;
	_morseCodeMeLink.subscribe((v) => {
		morseCodeMeLink = v;
	});

	let footnote1Id = '#footnote-1';
</script>

<div>
	<h2>
		<img src={multiplayerSrc} alt="Multiplayer" width={imageSize} height={imageSize} /> Practice Morse
		with others
	</h2>
	<ul>
		<li>
			<a target="_blank" href={duyfkenDiscordLink}
				>Duyfken pact uboat group (discord server for wolfpack events)</a
			>
			channel on
			<a target="_blank" href={vailDuyfkenLink}>vail.woozle.org,</a>
		</li>
		<li>
			<a target="_blank" href={morseCodeMeLink}>MorseCode.me.</a>
			<a href={footnote1Id} class="inline warning">[1]</a>
		</li>
	</ul>
</div>

<style>
	.warning {
		color: red;
	}

	.inline {
		display: inline;
	}
</style>
