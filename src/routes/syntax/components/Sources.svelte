<script lang="ts">
	import {
		_duyfkenDiscordLink,
		_foxGuideLink,
		_morseWikiLink,
		_prosignsWikiLink,
		_wolfpackDiscordLink,
		_wpOpsDiscordLink
	} from '../../store';

	let foxGuideLink: string;
	_foxGuideLink.subscribe((v) => {
		foxGuideLink = v;
	});

	let duyfkenDiscordLink: string;
	_duyfkenDiscordLink.subscribe((v) => {
		duyfkenDiscordLink = v;
	});

	let wpOpsDiscordLink: string;
	_wpOpsDiscordLink.subscribe((v) => {
		wpOpsDiscordLink = v;
	});

	let wolfpackDiscordLink: string;
	_wolfpackDiscordLink.subscribe((v) => {
		wolfpackDiscordLink = v;
	});

	let morseWikiLink: string;
	_morseWikiLink.subscribe((v) => {
		morseWikiLink = v;
	});

	let prosignsWikiLink: string;
	_prosignsWikiLink.subscribe((v) => {
		prosignsWikiLink = v;
	});
</script>

<div id="sources">
	<h2>Additional Sources</h2>
	<ul>
		<li>
			<a target="_blank" href={foxGuideLink}>Steam Radio Syntax Guide (by Fox),</a>
		</li>
		<li>
			<a target="_blank" href={duyfkenDiscordLink}>Duyfken pact uboat group</a>
			#morse-syntax channel.
		</li>
		<li>
			<a target="_blank" href={wpOpsDiscordLink}>WP Operations</a>
		</li>
		<li>
			<a target="_blank" href={prosignsWikiLink}>International Morse Code (Prosigns)</a>
		</li>
		<li>
			<a target="_blank" href={morseWikiLink}>International Morse Code</a>
		</li>
		<li>
			<a target="_blank" href={wolfpackDiscordLink}>Official WP Community</a>
		</li>
	</ul>
</div>
