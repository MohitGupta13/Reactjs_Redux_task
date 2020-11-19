import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

test("snapshot Test",()=> {
const tree =renderer.create(<App/>).toJSON();
console.log(tree);
expect(tree).toMatchSnapshot();
})