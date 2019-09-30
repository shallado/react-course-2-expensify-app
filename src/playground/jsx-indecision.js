console.log('App.js is running!');

const app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: []
};

const handleFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		renderIndecisionApp();
	}
};

const handleRemoveAll = () => {
	app.options = [];

	renderIndecisionApp();
};

const handleMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum];
	alert(option);
	dfgdfgdfgdfg
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const renderIndecisionApp = () => {
		const template = ( <
			div >
			<
			h1 > {
				app.title
			} < /h1> {
			app.subtitle && < p > {
				app.subtitle
			} < /p>} <
			p > {
				app.options.length > 0 ? 'Here are your options' : 'No options'
			} < /p> <
			button disabled = {
				app.options.length === 0
			}
			onClick = {
				handleMakeDecision
			} > What should I do ? < /button> <
			button onClick = {
				handleRemoveAll
			} > Remove All < /button> <
			ol > {
				app.options.map((option, index) => < li key = {
						index
					} > {
						option
					} < /li>)
				} <
				/ol> <
				form onSubmit = {
					handleFormSubmit
				} >
				<
				input type = "text"
				name = "option" / >
				<
				button > Add Option < /button> < /
				form > <
				/div>
			);

			ReactDOM.render(template, appRoot);
		};

				renderIndecisionApp();
