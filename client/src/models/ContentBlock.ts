export default class ContentBlock {
    id: number | undefined;
    type: string;
    content: string;
    url: string;
    order: number;
    language!: string;
	constructor(id: number | undefined, type: string, content: string, url: string, order: number, language: string) {
        this.id =id;
        this.type = type;
        this.content = content;
        this.url = url;
        this.order = order;
        this.language = language;
    }

} 
