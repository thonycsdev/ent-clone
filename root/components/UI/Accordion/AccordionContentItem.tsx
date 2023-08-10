import { AccordionPanel } from '@chakra-ui/react'
import React from 'react'

type AccordionContentItemProps = {
	content: string,
	percentage: number,
}
function AccordionContentItem({content, percentage}: AccordionContentItemProps) {
	return (
		<AccordionPanel pb={4}>
			<div>
				{content}
			</div>
			<div>
				{percentage}
			</div>
			</AccordionPanel>
	)
}

export default AccordionContentItem