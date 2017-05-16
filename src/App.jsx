import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import beautify from 'json-beautify';

import ContactForm from './ContactForm';

const Button = inject('appState')(observer(({appState}) => <button>{appState.timer}</button>));

const FormView = inject('formStore')(observer(({formStore}) => <pre>{beautify(formStore, null, 2, 100)}</pre>));


class App extends Component {
	handleSubmit(form) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				console.log(JSON.stringify(form));
				resolve('done');
			}, 1500)
		})
	}

	render() {
		return (
			<div>
				<Button/>
				{/*<button onClick={this.onReset}>
					Seconds passed: {this.props.appState.timer}
				</button>*/}

				<ContactForm handleSubmit={this.handleSubmit.bind(this)} schema={{firstName: ['viktor']}}/>

				{/*<pre>{beautify(this.props.formStore.forms, null, 2, 100)}</pre>*/}
				<FormView />
				<DevTools />
			</div>
		);
	}

	onReset = () => {
		this.props.appState.resetTimer();
	}
}

export default App;