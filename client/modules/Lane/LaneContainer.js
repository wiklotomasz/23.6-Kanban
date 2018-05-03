import { connect } from 'react-redux';
import * as laneActions from './LaneActions';
import { createLaneRequest, updateLaneRequest, deleteLaneRequest , fetchLanes } from './LaneActions';
import { createNote } from '../Note/NoteActions';
import { createLane, createLanes, updateLane, editLane, deleteLane } from './LaneActions';
import { createNoteRequest } from '../Note/NoteActions';
import Lane from './Lane';

const mapStateToProps = (state, ownProps) => ({
  laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId])
});

const mapDispatchToProps = {
  ...laneActions,
  addNote: createNote,
  createLane: createLaneRequest,
  updateLane: updateLaneRequest,
  deleteLane: deleteLaneRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);