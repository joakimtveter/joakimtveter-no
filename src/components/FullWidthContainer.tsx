import React from 'react'

interface Props {
	children: React.ReactNode
}

function FullWidthContainer(props: Props) {
	const { children } = props

	return <div className='full-width-container'>{children}</div>
}

export default FullWidthContainer
