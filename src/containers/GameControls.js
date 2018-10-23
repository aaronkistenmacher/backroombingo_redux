import { connect } from 'react-redux';
import GameControls from '../components/GameControls';
import { resetCard } from '../actions/gameControls';

const mapDispatchToProps = dispatch => ({
  resetClickHandler: () => dispatch(resetCard())
});

export default connect(
  null,
  mapDispatchToProps
)(GameControls);
