import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
	const expensesTotal = getExpensesTotal([]);

	expect(expensesTotal).toBe(0);
});

test('should correctly add up a single expense', () => {
	const expenseTotal = getExpensesTotal([expenses[0]]);

	expect(expenseTotal).toBe(195);
});

test('should correctly add up multiple expenses', () => {
	const expensesTotal = getExpensesTotal(expenses);

	expect(expensesTotal).toBe(114195);
});