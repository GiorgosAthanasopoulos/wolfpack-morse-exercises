<script lang="ts">
	import {
		_imagesFolder,
		_wolfpackDiscordLink,
		_duyfkenDiscordLink,
		_wpOpsDiscordLink,
		_discordUsername,
		_smallImageSize
	} from '../routes/store';

	let imagesFolder;
	_imagesFolder.subscribe((v) => {
		imagesFolder = v;
	});
	let contactSrc = imagesFolder + 'contact.png';

	let wolfpackDiscordLink: string;
	_wolfpackDiscordLink.subscribe((v) => {
		wolfpackDiscordLink = v;
	});

	let duyfkenDiscordLink: string;
	_duyfkenDiscordLink.subscribe((v) => {
		duyfkenDiscordLink = v;
	});

	let wpOpsDiscordLink: string;
	_wpOpsDiscordLink.subscribe((v) => {
		wpOpsDiscordLink = v;
	});

	let discordUsername: string;
	_discordUsername.subscribe((v) => {
		discordUsername = v;
	});

	let imageSize: number;
	_smallImageSize.subscribe((v) => {
		imageSize = v;
	});
</script>

<div>
	<h2><img src={contactSrc} alt="Contact" width={imageSize} height={imageSize} /> Contact</h2>
	<ul>
		<li>
			<a target="_blank" href={wolfpackDiscordLink}>Wolfpack(game) official discord server,</a>
		</li>
		<li>
			<a target="_blank" href={duyfkenDiscordLink}>Duyfken pact uboat group discord server,</a>
		</li>
		<li>
			<a target="_blank" href={wpOpsDiscordLink}>WP Operations </a>
			(server that <strong>includes tutoring sessions</strong>),
		</li>
		<li>
			My discord username:
			<p class="inline underline emphasize">{discordUsername}</p>
			.
		</li>
	</ul>
</div>

<style>
	.inline {
		display: inline;
	}

	.underline {
		text-decoration: underline;
	}

	.emphasize {
		color: white;
	}
</style>
