import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch}) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h3>{description}</h3>
		</Link>
		<p>
			{numeral(amount / 100).format('$0,0.00')}
			-
			{moment(createdAt).format('MMMM Do, YYYY')}
		</p>
	</div>
);

export default ExpenseListItem;