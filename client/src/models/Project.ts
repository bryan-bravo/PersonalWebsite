import ContentBlock from './ContentBlock'
export default class Project {

    id: number | undefined;
    title: string;
    dateModified: string;
    contentBlocks: any;
    
    // id can be undefined because to create a project we init a bean with no id
    constructor(id: number | undefined , title: string, dateModified: string, contentBlocks: any) {
        this.id = id;
        this.title = title;
        this.dateModified = dateModified;
        this.contentBlocks = contentBlocks;
    }
    
}

