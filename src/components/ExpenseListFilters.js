import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends Component {
	state = {
		calendarFocused: null
	};

	handleDatesChange = ({ startDate, endDate }) => {
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	};

	handleFocusChange = (calendarFocused) => {
		this.setState(() => ({ calendarFocused }));
	};

	handleTextChange = (e) => {
		this.props.setTextFilter(e.target.value);
	}

	handleSortChange = (e) => {
		const sortValue = e.target.value;

		if (sortValue === 'date') {
			this.props.sortByDate();
		} else if (sortValue === 'amount') {
			this.props.sortByAmount();
		}
	}

	render() {
		return (
			<div>
				<input type="text" value={this.props.filters.text} onChange={this.handleTextChange} />
				<select value={this.props.filters.sortBy} onChange={this.handleSortChange}>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
				</select>
				<DateRangePicker
					startDate={this.props.filters.startDate}
					startDateId="start-date"
					endDate={this.props.filters.endDate}
					endDateId="end-date"
					onDatesChange={this.handleDatesChange}
					focusedInput={this.state.calendarFocused}
					onFocusChange={this.handleFocusChange}
					showClearDates={true}
					numberOfMonths={1}
					isOutsideRange={() => false}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	setTextFilter: (text) => dispatch(setTextFilter(text)),
	sortByDate: () => dispatch(sortByDate()),
	sortByAmount: () => dispatch(sortByAmount()),
	setStartDate: (startDate) => dispatch(setStartDate(startDate)),
	setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

const mapStateToProps = (state) => ({
	filters: state.filters
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);