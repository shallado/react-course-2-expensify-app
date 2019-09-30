const getExpensesTotal = (expenses) => {
	const total = expenses.reduce((total, { amount }) => {
		return total + amount;
	}, 0);

	return total;
};

export default getExpensesTotal;