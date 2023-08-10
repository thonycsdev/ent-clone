import { AccordionItemContent } from '@/root/models/AccordionItem'
import { AccordionButton, AccordionIcon, AccordionPanel, Box, AccordionItem } from '@chakra-ui/react'
import React from 'react'
import AccordionContentItem from './AccordionContentItem'


interface AccordionItemSearchProps {
	title: string,
	contents: AccordionItemContent[],
	icon: React.ReactNode
}

function AccordionItemSearch({title, contents,icon}: AccordionItemSearchProps) {
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
			{contents.map((contentItem, index) => <AccordionContentItem content={contentItem.content} percentage={contentItem.percentage} key={index}/>)}
    </AccordionPanel>
  </AccordionItem>
	)
}

export default AccordionItemSearch