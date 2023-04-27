import React from 'react'

interface Props {
	children: React.ReactNode
}

function ContentWidthContainer(props: Props) {
	const { children } = props

	return <div className='content-width-container'>{children}</div>
}

export default ContentWidthContainer
