import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenses }) => {
	const totalExpenses = expenses.length;
	const expenseText = totalExpenses === 1 ? 'expense' : 'expenses';
	const totalAmount = numeral(getExpensesTotal(expenses) / 100).format('$0,0.00');

	return (
		<div>
			<h1>{`Viewing ${totalExpenses} ${expenseText} totaling ${totalAmount}`}</h1>
		</div>		
	);
};

const mapStateToProps = (state) => ({
	expenses: state.expenses
});

export default connect(mapStateToProps)(ExpensesSummary);