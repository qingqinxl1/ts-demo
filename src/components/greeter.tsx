import * as React from 'react';
import num, { Directions } from './enum';
import validator from './validator';

function add(num1: number, num2 = 0) {
	return num1 + num2;
}

function buildName(firstName: string, ...restOfName: string[]) {
	return firstName + ' ' + restOfName.join(' ');
}

export interface HelloProps {
	compiler: string;
	framework: string;
}

function identify<T>(arg: T): T {
	return arg;
}

let output = identify<string>("Hello, qingqinxl");
let iOutput = identify<number>(100);

function whichDirection(recipient: string, direction: Directions) {
	console.log(recipient, direction);
}
console.log(whichDirection('go left:', Directions.Left));

const validator1 = new validator();

export class Hello extends React.Component<HelloProps, {}> {
	render() {
		return (<div>
			<h1>Hello from {this.props.compiler} and {this.props.framework} !</h1>
			<div>sum: {add(100)}</div>
			<div>buildName: {buildName('Lily', 'Lucy', 'Pander', 'Peter', 'Divid')}</div>
			<div>{output},{iOutput}分</div>
			<div>1000是否为5位整数？{validator1.isAcceptable('1000') ? '是' : '否'}</div>
			<div>默认导出值100的引入：{num}</div>
		</div>);
	}
}

