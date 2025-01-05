
interface Result {
	isMatch: boolean;
	from: number;
	to: number;
}

function hasMatchOnlyOneString(s: string, from: number, target: string): Result {
	let to: number = 0;
	let counted: number = 0; 
	let fail = 0;
	
	for(let i: number = from; i < s.length && target.length > counted; i++){
		const c: string = s[i];
		to = i;

		if(c === target[counted]) {
			counted += 1;
			continue;
		} else if(c === target[0]){
			fail += 1;
			counted = 0;
			i = from + fail - 1;
		       continue;	        
		}

		counted = 0;
	}

	return {
	       to, 
	       from: to - counted,
	       isMatch:  counted === target.length   
	};
}


function hasMatch(s:  string, p: string): boolean {
	const [a, b] = p.split("*");

	const first: Result = hasMatchOnlyOneString(s, 0, a);

	if(!first.isMatch) {
		return false;
	}

	const from: number = !a ? 0 : first.to + 1; 
	const second = hasMatchOnlyOneString(s, from, b);	
	return second.isMatch;
}

export default hasMatch;
