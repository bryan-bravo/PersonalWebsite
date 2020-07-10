export default class ContentBlock {
    id: number | undefined;
    type: string;
    content: any;
    order: number;

	constructor(id: number | undefined, type: string, content: any, order: number) {
        this.id =id;
        this.type = type;
        this.content = content;
        this.order = order;
    }

} 
