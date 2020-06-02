export default class Project {

    id:number;
    title:string;
    dateModified:string;
    contentBlocks:any;

	constructor(id:number, title:string, dateModified:string, contentBlocks:any) {
        this.id = id;
        this.title = title;
        this.dateModified = dateModified;
        this.contentBlocks = contentBlocks;
    }
    
}

