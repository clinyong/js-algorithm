import test from "ava";
import QuickUnion from "../1-union-find/2-quick-union";
import QuickFind from "../1-union-find/1-quick-find";
import QuickUnionWeight from "../1-union-find/3-quick-union-with-weight";

function testHelper(t, UF) {
	const uf = new UF(10);
	uf.union(0, 5);
	t.is(uf.connected(0, 5), true);
	t.is(uf.connected(0, 1), false);
}

test("1-quick-find", t => testHelper(t, QuickFind));
test("2-quick-union", t => testHelper(t, QuickUnion));
test("3-quick-union", t => testHelper(t, QuickUnionWeight));
