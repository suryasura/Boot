import React from 'react';
import Button from '@material-ui/core/Button';

const App = () => {

return (
	<div style={{
	display: 'flex',
	margin: '20px',
	width: 200,
	flexWrap: 'wrap',
	}}>
	<div style={{ width: '100%', float: 'left' }}>
		<h3>click below button to upload a file</h3> <br />
	</div>
	<input
		type="file"
		accept="image/*"
		style={{ display: 'none' }}
		id="contained-button-file"
	/>
	<label htmlFor="contained-button-file">
		<Button variant="contained" color="primary" component="span">
		Click to upload 
		</Button>
	</label>
	</div>
);
}

export default App;
