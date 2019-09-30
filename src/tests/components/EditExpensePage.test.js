import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper, expense;

beforeEach(() => {
	editExpense = jest.fn();
	removeExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
		<EditExpensePage 
			editExpense={editExpense} 
			removeExpense={removeExpense} 
			history={history}
			expense={expenses[2]}	
		/>
	);
});

test('should render EditExpensePage correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
	wrapper.find('ExpenseForm').prop('handleSubmit')(expenses[2])

	expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
	expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle removeExpense', () => {
	const id = expenses[2].id;
	wrapper.find('button').simulate('click');
	
	expect(removeExpense).toHaveBeenLastCalledWith({ id });
	expect(history.push).toHaveBeenLastCalledWith('/');
});
