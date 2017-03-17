import { connect } from 'react-redux'
import { getRobots } from '../actions'
import ProfileView from '../components/profile/profile-view'

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.match.params.id, 10) || 1
  const isPending = state.robotData.isPending
  let robot = null

  if (!isPending) {
    robot = state.robotData.robots.find(robo => robo.id === id)
  }

  return {
    robot,
    isPending,
  }
}

const mapDispatchToProps = dispatch => ({
  getRobots: () => dispatch(getRobots()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView)
