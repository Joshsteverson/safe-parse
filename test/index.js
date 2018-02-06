'use strict';

const safeParse = require('../index');
require('chai').should();

describe('safeParse()', () => {
	it('works when given proper json string', () => {
		const objString = JSON.stringify({"name":"John","age":30,"city":"New York"});
		const parsed = safeParse(objString);
		(parsed.name).should.equal('John');
	});	

	it('works when given empty string', () => {
		const objString = '';
		const parsed = safeParse(objString);
		(typeof parsed).should.equal('object');
	});

	it('works when given javascript object', () => {
		const objString = {"name":"John","age":30,"city":"New York"};
		const parsed = safeParse(objString);
		(parsed.name).should.equal('John');
	});

	it('works when given null', () => {
		const parsed = safeParse(null);
		(typeof parsed).should.equal('object');
	});
});
