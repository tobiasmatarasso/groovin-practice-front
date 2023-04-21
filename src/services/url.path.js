const basePath = 'http://localhost.om';

export default {
	status: basePath + 'v2/reports/periods',

	/* AUTHENTICATION */

	headers: {
		headers: {
			'Content-Type': 'application/json',
			'Accept-Language': 'en',
		},
	},
};
