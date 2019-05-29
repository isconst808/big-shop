export default class InstaService {
	constructor() {
		this._apiBase = 'http://localhost:3000/'
	}

	getResource = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`);

		if(!res.ok) {
			throw new Error(`Could not fetch ${url}, received ${res.status}`)
		}

		return res.json();
	};

	getAllBags = async () => {
		const res = await this.getResource('bags/');
		return res;
	};

	getAllWatches = async () => {
		const res = await this.getResource('watches/');
		return res;
	};
}