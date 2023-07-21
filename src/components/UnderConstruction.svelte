<script lang="ts">
	import { _imagesFolder, _largeImageSize } from '../routes/store';

	let imagesFolder;
	_imagesFolder.subscribe((v) => {
		imagesFolder = v;
	});
	let underConstructionSrc = imagesFolder + 'under-construction.png';

	let imageSize: number;
	_largeImageSize.subscribe((v) => {
		imageSize = v;
	});
</script>

<img src={underConstructionSrc} alt="Under Construction" width={imageSize} height={imageSize} />
