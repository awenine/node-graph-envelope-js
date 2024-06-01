
interface NodePoint {
		input: number,
		value: number,
}

function getEdge(start: NodePoint, end:NodePoint): (input: number) => number {
	const inputRange = end.input - start.input;
	const valueRange = end.value - start.value;

	return (input:number):number => {
		return start.value + valueRange * ((input - start.input) / inputRange);
	};
}


function createEnvelope(nodePointArray: NodePoint[]): (input: number) => number {
	const nodeBreakPoints = nodePointArray.map((node) => node.input);
	const lookup = [(input: number) => nodePointArray[0].value];
	
	for (let i = 0; i < nodePointArray.length - 1; i++) {
		lookup.push(getEdge(nodePointArray[i], nodePointArray[i + 1]));
	}

	return (input: number): number => {
		let output = nodePointArray[nodePointArray.length - 1].value;

		for (let i = 0; i < nodeBreakPoints.length; i++) {
			if (input <= nodeBreakPoints[i]) {
				output = lookup[i](input);
				break;
			}
		}

		return output;
	};
}

export {createEnvelope}