<script lang="ts">
	import { _foxGuideLink } from '../../store';

	let foxGuideLink: string;
	_foxGuideLink.subscribe((v) => {
		foxGuideLink = v;
	});
</script>

<div>
	<h2>Positioning Phrases</h2>
	<p>The following table assumes your boat no is 96 (U96).</p>
	<p>
		If you re not sure what some of these mean (AF5612, LXX, RXXX, HXXX) then check out the <a
			target="_blank"
			href={foxGuideLink}>Steam Radio Guide - Reporting/Requesting Positioning section (by Fox)</a
		>.
	</p>
	<table>
		<tr>
			<th>RECIPIENT</th>
			<th>SENDER</th>
			<th>MESSAGE</th>
			<th>TERMINATOR</th>
			<th>PHRASE MEANING</th>
		</tr>
		<tr>
			<td>AS</td>
			<td>DE 96</td>
			<td>POS AF5612 L32 R123</td>
			<td>AR</td>
			<td
				>To All Stations,<br />From (U)96,<br />Our position is square AF5612, Left 32 degrees,
				Right 123 degrees,<br />No reply needed.</td
			>
		</tr>
		<tr>
			<td>AS</td>
			<td>DE 96</td>
			<td>POS AF5612 L32 R123 H120</td>
			<td>AR</td>
			<td
				>To All Stations,<br />From (U)96,<br />Our position is square AF5612, Left 32 degrees,
				Right 123 degrees, Heading 120 degrees,<br />No reply needed.</td
			>
		</tr>
		<tr>
			<td>AS</td>
			<td>DE 96</td>
			<td>POS AF5612 L32 9207M</td>
			<td>AR</td>
			<td
				>To All Stations,<br />From (U)96,<br />Our position is square AF5612, Left 32 degrees,
				Distance 9207 meters,<br />No reply needed.</td
			>
		</tr>
		<tr>
			<td>AS</td>
			<td>DE 96</td>
			<td>POS AF56121</td>
			<td>AR</td>
			<td
				>To All Stations,<br />From (U)96,<br />Our position is square AF5612, Subgrid 1,<br />No
				reply needed.</td
			>
		</tr>
		<tr>
			<td>AS</td>
			<td>DE 96</td>
			<td>POS AF5612 K9</td>
			<td>AR</td>
			<td
				>To All Stations,<br />From (U)96,<br />Our position is square AF5612, Keypad 9,<br />No
				reply needed.</td
			>
		</tr>
		<tr>
			<td>AS</td>
			<td>DE 96</td>
			<td>REL POS 34 DIST 6KM</td>
			<td>AR</td>
			<td
				>To All Stations,<br />From (U)96,<br />Our position is relative 34, Distance 6 kilometers,<br
				/>No reply needed.</td
			>
		</tr>
		<tr>
			<td>AS</td>
			<td>DE 96</td>
			<td>RPOS 34 X INTEND 2</td>
			<td>AR</td>
			<td
				>To All Stations,<br />From (U)96,<br />Our position is relative 34, moving to relative
				position 2,<br />No reply needed.</td
			>
		</tr>
		<tr>
			<td>AS</td>
			<td>DE 96</td>
			<td>POS STB X INTEND INSIDE</td>
			<td>AR</td>
			<td
				>To All Stations,<br />From (U)96,<br />Our position is starboard of convoy, moving inside,<br
				/>No reply needed.</td
			>
		</tr>
		<tr>
			<td>AS</td>
			<td>DE 96</td>
			<td>REQ POS</td>
			<td>K</td>
			<td>To All Stations,<br />From (U)96,<br />Requesting your positions,<br />Awaiting reply.</td
			>
		</tr>
	</table>
</div>
