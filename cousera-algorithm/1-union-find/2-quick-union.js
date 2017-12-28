module.exports = class QuickUnion {
	constructor(n) {
		this.id = [];
		for (let i = 0; i < n; i++) {
			this.id[i] = i;
		}
	}

	root(p) {
		while (p !== this.id[p]) p = this.id[p];
		return p;
	}

	connected(p, q) {
		return this.root(p) === this.root(q);
	}

	union(p, q) {
		const pRoot = this.root(p);
		const qRoot = this.root(q);
		this.id[pRoot] = qRoot;
	}
};
