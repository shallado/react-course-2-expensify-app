import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends Component {
	handleSubmit = (expense) => {
		this.props.editExpense(this.props.expense.id, expense);
		this.props.history.push('/');
	};

	handleRemoveExpense = () => {
		this.props.removeExpense({ id: this.props.expense.id });
		this.props.history.push('/');
	};

	render() {
		return (
			<div>
				<ExpenseForm
					expense={this.props.expense}
					handleSubmit={this.handleSubmit}
				/>
				<button onClick={this.handleRemoveExpense}>Remove</button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	editExpense: (id, updates) => dispatch(editExpense(id, updates)),
	removeExpense: (id) => dispatch(removeExpense(id))
});

const mapStateToProps = (state, props) => ({
	expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);