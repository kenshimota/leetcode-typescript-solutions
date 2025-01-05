
import hasMatch from ".";

describe("3407. Substring Matching Pattern", function() {
	test("s = 'leetcode', p = 'ee*e'", function() {
		expect( hasMatch("leetcode", "ee*e") ).toBe(true);
	});

	test("s = 'car', p = 'c*v'", function() {
		expect(hasMatch("car", "c*v")).toBe(false);
	});

	test("s = 'luck', p = 'u*'", function() {
		expect(hasMatch("luck", "u*")).toBe(true);
	});

	test("s = 'tokk', p = 't*t'", function() {
		expect(hasMatch("tokk", "t*t")).toBe(false);
	});

	test("s = 'ojjju', p = '*o'", function() {
		expect(hasMatch("ojju", "*o")).toBe(true);
	});

	test("s = 'wwmwww', p = 'wm*'", function() {
		expect(hasMatch("wwmwww", "wm*")).toBe(true);
	});
	
	test("s = 'wwwwwwmwww', p = 'wwm*'", function() {
		expect(hasMatch("wwwwwmwww", "wwm*")).toBe(true);
	});
});
