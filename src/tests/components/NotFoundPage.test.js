import NotFoundPage from '../../components/NotFoundPage';

test('Should render NotFoundPage correctly', () => {
	const wrapper = shallow(<NotFoundPage />);

	expect(wrapper).toMatchSnapshot();
});