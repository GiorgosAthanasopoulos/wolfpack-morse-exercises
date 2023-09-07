<div id="phrase-syntax">
	<h2>Phrase Syntax</h2>
	<p>The following table assumes your boat no is 96 (U96).</p>
	<p><strong>RECIPIENT -> SENDER -> MESSAGE -> TERMINATOR.</strong></p>
	<table>
		<tr>
			<th>RECIPIENT</th>
			<th>SENDER</th>
			<th>MESSAGE</th>
			<th>TERMINATOR</th>
			<th>PHRASE MEANING</th>
		</tr>
		<tr>
			<td>552</td>
			<td>DE 96</td>
			<td>REQ POS</td>
			<td>K</td>
			<td>To (U)552,<br />From (U)96,<br />Requesting position,<br />Awaiting reply.</td>
		</tr>
		<tr>
			<td>AS</td>
			<td>DE 96</td>
			<td>POS AF5781 L068 R323</td>
			<td>AR</td>
			<td
				>To All Stations,<br />From (U)96,<br />Our position is AF5781 L068 R323,<br />No reply needed.</td
			>
		</tr>
		<tr>
			<td>UNKWN</td>
			<td>DE 96</td>
			<td>REQ SITREP</td>
			<td>K</td>
			<td
				>To unknown station that just transmitted,<br />From (U)96,<br />Requesting situation
				report,<br />Awaiting reply.</td
			>
		</tr>
		<tr>
			<td>CQ</td>
			<td>DE 96</td>
			<td />
			<td />
			<td>Anyone there,<br />From (U)96,<br />,<br />(Awaiting reply is omitted from CQ).</td>
		</tr>
	</table>
</div>
