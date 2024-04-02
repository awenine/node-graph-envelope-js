# node-graph-envelope-js
A function for creating a graph function from defined node points in Javascript 

## The Problem

Similar to the envelope mapping found in animation software, this library allows you to create different 'envelope map' functions, that map an input value to an output value, based on a graph defined by nodes/keyframes.

## Usage
Define an array of node for the graph, which are objects that comprise an `input` (corresponding to the input passed into the graph; the _x_ value) and a `value` (what the value should be at that point; the _y_ value)

```js
const envelopeNodes = [
	{
		input: 0,
		value: 0.6,
	},
	{
		input: 10,
		value: 1,
	},
	{
		input: 30,
		value: 0.75,
	},
	{
		input: 40,
		value: 0,
	},
	{
		input: 80,
		value: 0.2,
	},
];
```

Then call the `createGraph()` function passing these nodes, which will return a function that can be used to calculate the value of the graph at any point

## Examples
- controlling animation
- controlling audio parameters

## Caveats
- currently only produces straight lines between the nodes; curves/handles are yet to be implemented