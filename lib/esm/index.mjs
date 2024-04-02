function getEnvelopeEdge(startNode, endNode) {
    const inputRange = endNode.input - startNode.input;
    const valueRange = endNode.value - startNode.value;
    return (input) => {
        const percentage = (input - startNode.input) / inputRange;
        return startNode.value + valueRange * percentage;
    };
}
function createEnvelope(nodeArray) {
    const nodeBreakPoints = nodeArray.map((node) => node.input);
    const lookup = [(input) => nodeArray[0].value];
    for (let i = 0; i < nodeArray.length - 1; i++) {
        lookup.push(getEnvelopeEdge(nodeArray[i], nodeArray[i + 1]));
    }
    return (input) => {
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
export { createEnvelope };
