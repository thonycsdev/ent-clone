import React from 'react'
import AccordionItemSearch from './AccordionItem'
import { Accordion } from '@chakra-ui/react'
import {AiOutlineUser} from "react-icons/ai"
function AccordionMain() {
	return (
		<Accordion allowMultiple>
			<AccordionItemSearch content='AAAAAAAAAAAA' icon={<AiOutlineUser size={25}/>} title='Pesquisa Comportamental'/>
		</Accordion>
	)
}

export default AccordionMain