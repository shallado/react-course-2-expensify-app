import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends Component {
	state = {
		description: this.props.expense ? this.props.expense.description : '',
		note: this.props.expense ? this.props.expense.note : '',
		amount: this.props.expense ? (this.props.expense.amount / 100).toString() : '',
		createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
		calendarFocused: false,
		error: ''
	};

	handleDescriptionChange = (e) => {
		const description = e.target.value;

		this.setState(() => ({ description }));
	};

	handleNoteChange = (e) => {
		const note = e.target.value;

		this.setState(() => ({ note }));
	};

	handleAmountChange = (e) => {
		const amount = e.target.value;

		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState(() => ({ amount }));
		}
	};

	handleDateChange = (createdAt) => {
		if (createdAt) {
			this.setState(() => ({ createdAt }));
		}
	};

	handleFocusChange = ({ focused }) => {
		this.setState(() => ({ calendarFocused: focused }));
	};

	handleSubmit = (e) => {
		e.preventDefault();
		let error;

		if (!this.state.description || !this.state.amount) {
			error = 'Please provide description and amount';
		} else {
			error = '';
			this.props.handleSubmit({
				description: this.state.description,
				amount: parseFloat(this.state.amount, 10) * 100,
				createdAt: this.state.createdAt.valueOf(),
				note: this.state.note
			});
		}
	
		this.setState(() => ({ error }));
	}

	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleSubmit}>
					<input 
						type="text"
						placeholder="Description"
						autoFocus
						value={this.state.description}
						onChange={this.handleDescriptionChange}
					/>
					<input 
						type="text"
						placeholder="Amount"
						value={this.state.amount}
						onChange={this.handleAmountChange}
					/>
					<SingleDatePicker 
						date={this.state.createdAt}
						onDateChange={this.handleDateChange}
						focused={this.state.calendarFocused}
						onFocusChange={this.handleFocusChange}
						numberOfMonths={1}
						id="unique-id"
						isOutsideRange={() => false}
					/>
					<textarea
						placeholder="Add a note for your expense (optional)"
						value={this.state.note}
						onChange={this.handleNoteChange}
					>
					</textarea>
					<button>Add Expense</button>
				</form>
			</div>
		);
	}
}