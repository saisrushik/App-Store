import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTab, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    onClickTab(tabId)
  }

  const btnclass = isActive ? 'button active' : 'button'

  return (
    <li className="tab-item">
      <button type="button" className={btnclass} onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
