
interface GraphNode {
		input: number,
		value: number,
}

function getEnvelopeEdge(startNode: GraphNode, endNode:GraphNode): (input: number) => number {
	const inputRange = endNode.input - startNode.input;
	const valueRange = endNode.value - startNode.value;

	return (input:number):number => {
		const percentage = (input - startNode.input) / inputRange;
		return startNode.value + valueRange * percentage;
	};
}


function createEnvelope(nodeArray: GraphNode[]): (input: number) => number {
	const nodeBreakPoints = nodeArray.map((node) => node.input);
	const lookup = [(input: number) => nodeArray[0].value];
	for (let i = 0; i < nodeArray.length - 1; i++) {
		lookup.push(getEnvelopeEdge(nodeArray[i], nodeArray[i + 1]));
	}

	return (input: number): number => {
		let output = nodeArray[nodeArray.length - 1].value;

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