<script lang="ts">
	import { _foxGuideLink, _imagesFolder, _smallImageSize } from '../routes/store';

	let imagesFolder;
	_imagesFolder.subscribe((v) => {
		imagesFolder = v;
	});
	let specificsSrc = imagesFolder + 'specifics.png';

	let imageSize: number;
	_smallImageSize.subscribe((v) => {
		imageSize = v;
	});

	let syntaxPage = '/syntax';

	let foxGuideLink: string;
	_foxGuideLink.subscribe((v) => {
		foxGuideLink = v;
	});
</script>

<div>
	<h2>
		<img src={specificsSrc} alt="Specifics" width={imageSize} height={imageSize} /> Wolfpack specifics
	</h2>
	<ul>
		<li>
			<a href={syntaxPage}>Syntax,</a>
		</li>
		<li>
			<a target="_blank" href={foxGuideLink}>Steam Syntax Guide by Fox.</a>
		</li>
	</ul>
</div>
