import React from 'react'
import ContentWidthContainer from './ContentWidthContainer'

interface Props {
	children: React.ReactNode
	bgColor?: string
	fullHeigt?: boolean
}

function Section(props: Props) {
	const { children, bgColor, fullHeigt } = props
	return (
		<>
			<section
				className={`section ${bgColor ? `bg-${bgColor}` : ''} ${fullHeigt ? 'full-height' : ''} `}
			>
				<ContentWidthContainer>{children}</ContentWidthContainer>
			</section>
		</>
	)
}

export default Section
