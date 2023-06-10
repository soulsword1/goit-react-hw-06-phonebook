import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { ListItem, ListItemButton } from './ContactListItem.styled';

export default function ContactListItem({ contact }) {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <ListItem key={id}>
      {name} : {number}
      <ListItemButton onClick={handleDelete}>Delete</ListItemButton>
    </ListItem>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
