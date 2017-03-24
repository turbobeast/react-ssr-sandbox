import { connect } from 'react-redux'
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

export default connect(mapStateToProps)(ProfileView)
