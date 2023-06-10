import { setFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';
import { FilterForm, FilterLabel, FilterInput } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();
  const handleFilterChange = e => {
    const inputVal = e.target.value;
    dispatch(setFilter(inputVal));
  };
  return (
    <FilterForm>
      <FilterLabel>
        Search:
        <FilterInput
          name="contactsFilter"
          title=""
          onChange={handleFilterChange}
        />
      </FilterLabel>
    </FilterForm>
  );
}
