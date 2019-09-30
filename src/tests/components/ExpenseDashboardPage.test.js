import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

test('Should render ExpenseDashboardPage correctly', () => {
	const wrapper = shallow(<ExpenseDashboardPage />);

	expect(wrapper).toMatchSnapshot();
});