import { connect } from 'react-redux'
import { setSearchTerm } from '../actions'
import CardFilterView from '../components/card-filter-view'

const mapStateToProps = (state) => {
  const searchTerm = state.search.searchTerm
  const filteredRobots = state.robotData.robots.filter(
    robot => robot.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )
  return {
    searchTerm,
    robots: filteredRobots,
    isPending: state.robotData.isPending,
  }
}

const mapDispatchToProps = dispatch => ({
  onSearchChange: evt => dispatch(setSearchTerm(evt.target.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CardFilterView)
