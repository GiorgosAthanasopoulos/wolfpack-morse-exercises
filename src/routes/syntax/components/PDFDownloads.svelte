<script lang="ts">
	import { _frostDownloadLink, _talk4dewsDownloadLink } from '../../store';

	let talk4dewsDownloadLink: string;
	_talk4dewsDownloadLink.subscribe((v) => {
		talk4dewsDownloadLink = v;
	});

	let frostDownloadLink: string;
	_frostDownloadLink.subscribe((v) => {
		frostDownloadLink = v;
	});
</script>

<div>
	<p>
		If you want to read/save the following/similar information in pdf format here are download links
		(<strong>Download button top-right to save</strong>):
	</p>
	<ul>
		<li>
			<a target="_blank" href={talk4dewsDownloadLink}>
				Morse_Code_Syntax_Guide_for_Wolfpack.pdf (by talk4dews),
			</a>
		</li>
		<li>
			<a target="_blank" href={frostDownloadLink}> Radio_Syntax_Guide.pdf (by Colonel Frost). </a>
		</li>
	</ul>
</div>
