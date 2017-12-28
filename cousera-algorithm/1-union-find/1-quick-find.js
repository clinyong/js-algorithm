module.exports = class QuickFind {
	constructor(n) {
		this.id = [];
		for (let i = 0; i < n; i++) {
			this.id[i] = i;
		}
	}

	connected(p, q) {
		return this.id[p] === this.id[q];
	}

	union(p, q) {
		if (!this.connected(p, q)) {
			const oldValue = this.id[p];
			const newValue = this.id[q];

			for (let i = 0; i < this.id.length; i++) {
				if (this.id[i] === oldValue) {
					this.id[i] = newValue;
				}
			}
		}
	}
};
