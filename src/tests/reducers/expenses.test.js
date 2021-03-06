import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' });

	expect(state).toEqual([]);
});

test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	};
	const state = expensesReducer(expenses, action);

	expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '-1'
	};
	const state = expensesReducer(expenses, action);

	expect(state).toEqual(expenses);
});

test('should add an expense', () => {
	const expense = {
		id: '4',
		description: 'Car Payment',
		note: '',
		amount: 55000,
		createdAt: moment(5000)
	}
	const action = {
		type: 'ADD_EXPENSE',
		expense
	};
	const state = expensesReducer(expenses, action);

	expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
	const updates = {
		description: 'Testing',
		amount: 10003432
	};
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[1].id,
		updates
	};
	const state = expensesReducer(expenses, action);

	expect(state[1]).toEqual({
		...expenses[1],
		...updates
	});
});

test('should not edit an expense if expense not found', () => {
	const updates = {
		description: 'shopping',
		amount: 324231
	};
	const action = {
		type: 'EDIT_EXPENSE',
		id: '213',
		updates
	};
	const state = expensesReducer(expenses, action);

	expect(state[1]).toEqual(expenses[1]);
});