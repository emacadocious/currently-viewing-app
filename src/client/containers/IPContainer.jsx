import { connect } from 'react-redux';
import { getIPAddress } from '../actions/ipActions';
import Card from '../components/Card';

const mapStateToProps = state => ({
  loading: state.loading,
  ip: state.ip,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  getIPAddress: id => dispatch(getIPAddress(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
