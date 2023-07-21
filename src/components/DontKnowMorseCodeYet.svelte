<script lang="ts">
	import { _imagesFolder, _smallImageSize } from '../routes/store';

	let imagesFolder;
	_imagesFolder.subscribe((v) => {
		imagesFolder = v;
	});
	let lackOfKnowledgeSrc = imagesFolder + 'lack-of-knowledge.jpg';
	let morseCodeCheatSheetLink = imagesFolder + 'morse-code-cheat-sheet.png';

	let imageSize: number;
	_smallImageSize.subscribe((v) => {
		imageSize = v;
	});

	let submorseSteamLink = 'https://store.steampowered.com/app/912380/Submorse/';
	let lcwoLink = 'https://lcwo.net/download';
	let morseCodeInternationalLink = 'https://morsecode.world/international';
	let qsoLink = 'https://morsecode.world/international/trainer/qso.html';
	let characterLink = 'https://morsecode.world/international/trainer/character.html';
	let morseCodeAudioPracticeTestLink =
		'https://www.meridianoutpost.com/resources/training/test-morse-code-setup.php';
	let googleLearnMorseLink = 'https://morse.withgoogle.com/learn';
	let morseCodeKeyerLink = 'https://morsecode.world/international/keyer.html';
	let syntaxPage = '/syntax';
</script>

<div>
	<h2>
		<img src={lackOfKnowledgeSrc} alt="Lack of Knowledge" width={imageSize} height={imageSize} /> Don't
		know Morse Code yet?
	</h2>
	<p>Here are some resources to help you get started:</p>
	<ol>
		<li>
			<a target="_blank" href={morseCodeCheatSheetLink}>Morse Code CheatSheet,</a>
		</li>
		<li>
			First steps:
			<a target="_blank" href={submorseSteamLink}>Submorse(game)</a>
			can help you learn the alphabet and numbers,
		</li>
		<li>
			Copying:
			<ul class="block-list">
				<li>
					<a target="_blank" href={lcwoLink}>LCWO</a>
					(use mp3 to copy, then text file to verify answer),
				</li>
				<li>
					<a target="_blank" href={morseCodeInternationalLink}>Morse Code International:</a>
					<ul class="block-list">
						<li>
							<a target="_blank" href={qsoLink}>QSO,</a>
						</li>
						<li>
							<a target="_blank" href={characterLink}>Character,</a>
						</li>
					</ul>
				</li>
				<li>
					<a target="_blank" href={morseCodeAudioPracticeTestLink}>Morse Code Audio Practice Test</a
					>
				</li>
			</ul>
		</li>
		<li>
			Sending:
			<ul class="block-list">
				<li>
					<a target="_blank" href={googleLearnMorseLink}>Google - Learn Morse,</a>
				</li>
				<li>
					<a target="_blank" href={morseCodeKeyerLink}>Morse Code Keyer</a>
					(no prompt - use sentences from <a href={syntaxPage}>Syntax</a>).
				</li>
			</ul>
		</li>
	</ol>
</div>

<style>
	.block-list {
		display: block;
		text-align: left;
	}
</style>
