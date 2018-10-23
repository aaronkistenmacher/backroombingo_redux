import { connect } from 'react-redux';
import { toggleTile } from '../actions/toggleTile';
import BingoCard from '../components/BingoCard';

const mapStateToProps = state => ({
  tiles: state.bingo.tiles
});

const mapDispatchToProps = dispatch => ({
  tileClickedHandler: id => dispatch(toggleTile(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BingoCard);
