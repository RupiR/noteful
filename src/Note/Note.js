import React from 'react';
import { Link, Route, withRouter} from 'react-router-dom';
import './Note.css';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';

function Note(props) {
  return (
    <NotefulContext.Consumer>
      {value => {
        return (
          <>
            <Link to={`/note/${props.note.id}`}>
              <h3>{props.note.note_name}</h3>
            </Link>
            <p>{props.note.modified}</p>
            <button onClick={() => {
              value.delete(props.note.id);
              props.history.push('/');}}>Delete</button>
            <Route path='/note/:id' render={() => <p>{props.note.content}</p>} />
          </>
        );
      }}
    </NotefulContext.Consumer>
  );
}

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    note_name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    modified: PropTypes.string.isRequired,
    folder_id: PropTypes.number.isRequired
  })
}

export default withRouter(Note);