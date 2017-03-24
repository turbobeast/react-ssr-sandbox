import React from 'react'
import SearchBox from './search-box'
import CardList from './card-list'
import Scroll from './scroll'

const CardFilterView = (props) => {
  const {
    onSearchChange,
    searchTerm,
    isPending,
    robots } = props

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

CardFilterView.defaultProps = {
  robots: [],
}

CardFilterView.propTypes = {
  onSearchChange: React.PropTypes.func.isRequired,
  searchTerm: React.PropTypes.string.isRequired,
  isPending: React.PropTypes.bool.isRequired,
  robots: React.PropTypes.array,
}

export default CardFilterView
