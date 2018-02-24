import React from 'react'
import PropTypes from 'prop-types'
import { MenuItem } from 'material-ui/Menu'

const SelectListItem = ({ value, children, label }) => (
  <React.Fragment>
    <MenuItem value={value}>{children || label}</MenuItem>
  </React.Fragment>
)

SelectListItem.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.string,
  label: PropTypes.string
}

export default SelectListItem