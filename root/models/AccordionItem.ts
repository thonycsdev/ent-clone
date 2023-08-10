export type AccordionItemContent = {
	content: string,
	percentage: number;

}

export type AccordionItem = {
	contents: AccordionItemContent[],
	title: string,
}