import React, { Component } from 'react'
import SearchBox from './search-box'
import CardList from './card-list'
import Scroll from './scroll'

class CardFilterView extends Component {
  componentWillMount() {
    this.props.getRobots()
  }

  render() {
    const {
      onSearchChange,
      searchTerm,
      isPending,
      robots } = this.props

    return (
      <div>
        <SearchBox onSearchChange={onSearchChange} searchTerm={searchTerm} />
        <Scroll>
          {
              isPending
                ? <h2>Loading... { searchTerm }</h2>
                : <CardList robots={robots} />
            }
        </Scroll>
      </div>
    )
  }
}

CardFilterView.defaultProps = {
  robots: [],
}

CardFilterView.propTypes = {
  onSearchChange: React.PropTypes.func.isRequired,
  searchTerm: React.PropTypes.string.isRequired,
  isPending: React.PropTypes.bool.isRequired,
  robots: React.PropTypes.array,
  getRobots: React.PropTypes.func.isRequired,
}

export default CardFilterView
