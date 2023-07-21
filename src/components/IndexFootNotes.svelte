<script>
	let footnote1Id = 'footnote-1';
</script>

<div>
	<ol>
		<li id={footnote1Id}>
			Website's security certificate has been expired for 90 days,<br />(as of 08/7/23 - Issue
			appeared after the creation of this website).
		</li>
	</ol>
</div>

<style>
	ol li::marker {
		color: red;
	}

	#footnote-1::marker {
		content: '[1]. ';
	}
</style>
