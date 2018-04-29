import { connect } from 'react-redux';
import Notes from './Notes';
import * as noteActions from './NoteActions';

const mapDispatchToProps = {
  ...noteActions,
  createNote: createNoteRequest,
  updateNote: updateNoteRequest,
  deleteNote: deleteNoteRequest,
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);