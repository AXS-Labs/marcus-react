import { connect } from 'react-redux'
import Time from '../components/Time';
import { fetchTime } from '../actions';

const mapStateToProps = ({ time }, ownProps) => ({
  time
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  click: (event) => {
    event.preventDefault();
    dispatch(fetchTime());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Time);
