class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
		this.state = {
			toggle: false
		};
	}

	handleToggleVisibility() {
		this.setState((prevState) => ({
			toggle: !prevState.toggle
		}));
	}

	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleToggleVisibility}>
					{this.state.toggle ? 'Hide Details' : 'Show Details'}
				</button>
				{this.state.toggle && <p>Here are the details</p>}	
			</div>
		);
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
