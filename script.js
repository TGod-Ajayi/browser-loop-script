const axios = require('axios');
/**
 * please replace with your own url
 */
let url = '';

const fetchData = async () => {
	while (true) {
		try {
			const response = await axios.get(url, {
				headers: {
					Accept: 'application/json', // Set the Accept header to JSON or else the server throws 406 errors
				},
			});
			const data = response.data;
			console.log(data);
			// change this to a criteria that you want to check for
			if (data.follow) {
				url = data.follow;
			} else {
				break;
			}
		} catch (error) {
			console.error('Error:', error.message);
			break;
		}
	}
};

fetchData();
