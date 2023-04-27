import React from 'react'

interface Props {
	children: React.ReactNode
}

function CenterVertically(props: Props) {
	const { children } = props
	return (
		<div className='center-vertically'>
			<div>{children}</div>
		</div>
	)
}

export default CenterVertically
