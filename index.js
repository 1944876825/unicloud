'use strict';
exports.main = async (event, context) => {
	if (!event.body) {
		return {
			code: 404,
			msg: '缺少url'
		};
	}
	const body = JSON.parse(event.body);
	const {url='', method='GET', headers={"Referer": "never", "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"}, data={}, content='', timeout=5000} = body;
	if (!url) {
		return {
			code: 404,
			msg: '缺少url'
		};
	}
	const res = await uniCloud.httpclient.request(url, {
		dataType: 'text',
		method,
		headers,
		data,
		content,
		timeout,
		rejectUnauthorized: false,
	})
	return res;
};
