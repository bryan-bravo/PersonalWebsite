export default class Project {

    id: number | undefined;
    title: string;
    dateModified: string;
    contentBlocks: any;

    constructor(id: number | undefined , title: string, dateModified: string, contentBlocks: any) {
        this.id = id;
        this.title = title;
        this.dateModified = dateModified;
        this.contentBlocks = contentBlocks;
    }
    
}

