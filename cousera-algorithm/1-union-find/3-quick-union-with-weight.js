module.exports = class QuickUnionWeight {
	constructor(n) {
        this.id = [];
        this.sz = [];
		for (let i = 0; i < n; i++) {
            this.id[i] = i;
            this.sz[i] = 1;
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
        if (pRoot !== qRoot) {
            if (this.sz[pRoot] < this.sz[qRoot]) {
                this.id[pRoot] = qRoot;
                this.sz[qRoot] += this.sz[qRoot];
            } else {
                this.id[qRoot] = pRoot;
                this.sz[pRoot] += this.sz[qRoot];
            }
        }
	}
};
