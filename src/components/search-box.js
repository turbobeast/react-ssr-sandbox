import React from 'react'

const SearchBox = (props) => {
  const { onSearchChange, searchTerm } = props
  return (
    <div className="pa2">
      <input
        className="pa2"
        type="search"
        placeholder="search Robots..."
        value={searchTerm}
        onChange={onSearchChange}
      />
    </div>
  )
}

SearchBox.propTypes = {
  onSearchChange: React.PropTypes.func.isRequired,
  searchTerm: React.PropTypes.string.isRequired,
}

export default SearchBox
