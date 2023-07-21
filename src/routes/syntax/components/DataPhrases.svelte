<script lang="ts">
	import { _foxCourseLink, _foxSpeedLink } from '../../store';

	let foxCourseLink: string;
	_foxCourseLink.subscribe((v) => {
		foxCourseLink = v;
	});

	let foxSpeedLink: string;
	_foxSpeedLink.subscribe((v) => {
		foxSpeedLink = v;
	});
</script>

<div>
	<h1>Requesting/Reporting Data</h1>
	<p>The following table assumes your boat no is 96 (U96).</p>
	<p>
		If you need help determining convoy course and/or speed check out the following Steam Guides:
	</p>
	<ul>
		<li>
			<a target="_blank" href={foxCourseLink}>Course Determination Guide (by Fox).</a>
		</li>
		<li>
			<a target="_blank" href={foxSpeedLink}>Speed Determination Guide (by Fox).</a>
		</li>
	</ul>
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
			<td>CSPD 52 HCON</td>
			<td>AR</td>
			<td
				>To All Stations,<br />From (U)96,<br />Convoy speed is 5.2 knots, High Confidence,<br />No
				reply needed.</td
			>
		</tr>
		<tr>
			<td>AS</td>
			<td>DE 96</td>
			<td>CSPD 52 HCON CCRS 120 MCON</td>
			<td>AR</td>
			<td
				>To All Stations,<br />From (U)96,<br />Convoy speed is 5.2 knots, High Confidence, Convoy
				course is 120 degrees, Medium Confidence,<br />No reply needed.</td
			>
		</tr>
		<tr>
			<td>AS</td>
			<td>DE 96</td>
			<td>REQ CCRS CSPD</td>
			<td>K</td>
			<td
				>To All Stations,<br />From (U)96,<br />Requesting convoy course and speed,<br />Awaiting
				reply.</td
			>
		</tr>
		<tr>
			<td>AS</td>
			<td>DE 96</td>
			<td>CCRS IMI</td>
			<td>K</td>
			<td>To All Stations,<br />From (U)96,<br />Convoy course?<br />Awaiting reply.</td>
		</tr>
	</table>
</div>
