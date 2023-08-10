import React from 'react'
import AccordionItemSearch from './AccordionItem'
import { Accordion } from '@chakra-ui/react'
import {AiOutlineUser} from "react-icons/ai"
import { AccordionItem, AccordionItemContent } from '@/root/models/AccordionItem'
import { title } from 'process'
function AccordionMain() {
const contents: AccordionItemContent[] = [
	{content: "Anthony", percentage: 25}
]
const items: AccordionItem[] = [
	{
		contents: contents,
		title: "Primeiro"
	}
]


	return (
		<Accordion allowMultiple>
			{items.map((item, index) => (
				<AccordionItemSearch contents={item.contents} icon={<AiOutlineUser/>} title={item.title} key={index}/>
			))}
		</Accordion>
	)
}

export default AccordionMain