import callApi from '../../util/apiCaller';

export const CREATE_NOTE = 'CREATE_NOTE';
export const CREATE_NOTES = 'CREATE_NOTES';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';

export function createNote(note, laneId) {
 return {
   type: CREATE_NOTE,
   laneId,
   note,
 };
}

export function createNotes(notes) {
  return {
    type: CREATE_NOTES,
    notes,
  };
}

export function editNote(noteId) {
  return {
    type: EDIT_NOTE,
    noteId,
  };
}

export function updateNote(noteId) {
  return {
    type: UPDATE_NOTE,
    noteId,
  };
}

export function deleteNote(noteId, laneId) {
  return {
    type: DELETE_NOTE,
    noteId,
    laneId,
  };
}

export function createNoteRequest(note, laneId) {
  return (dispatch) => {
    return callApi('notes', 'post', { note, laneId }).then(noteResp => {
      dispatch(createNote(noteResp, laneId));
    });
  };
}

export function updateNoteRequest(noteId) {
  return (dispatch) => {
    return callApi('notes', 'put', noteId).then(res => {
      dispatch(updateNote(res, noteId));
    });
  };
}

export function deleteNoteRequest(noteId, laneId) {
  return (dispatch) => {
    return callApi(`notes/${noteId}`, 'delete').then(() => {
      dispatch(deleteNote(noteId, laneId));
    });
  };
}