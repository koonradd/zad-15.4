const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]

const average = (...args) => {
	let sum = 0;
	args.forEach(args => {
		sum = sum + args;
	});
	return sum / args.length;
}


console.log(average(...grades));