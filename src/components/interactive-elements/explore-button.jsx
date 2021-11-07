import { memo, useState, useEffect, useCallback, useMemo } from 'react'
import styles from 'components/interactive-elements/interactiveElements.module.scss'

export default memo(function ExploreButton(props) {
  return (
    <div className={`${styles.interactiveElements}`}>
      <button>
        <span>Explore</span>
      </button>
      <p>Landing Page Main Button - Idle</p>
    </div>
  )
})
