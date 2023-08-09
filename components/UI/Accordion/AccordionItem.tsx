import { AccordionButton, AccordionIcon, AccordionPanel, Box, AccordionItem } from '@chakra-ui/react'
import React from 'react'


interface AccordionItemSearchProps {
	title: string,
	content: string,
	icon: React.ReactNode
}

function AccordionItemSearch({title, content,icon}: AccordionItemSearchProps) {
	return (
		<AccordionItem>
    <h3>
      <AccordionButton gap={5}>
			{icon}
        <Box as="span" flex='1' textAlign='left'>
          {title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h3>
    <AccordionPanel pb={4}>
			{content}
    </AccordionPanel>
  </AccordionItem>
	)
}

export default AccordionItemSearch