// import Project from '../models/Project';
import axios from 'axios';
// will probably need axios

export default class HttpService {
    // need a path
    private basePath: string;
    
    constructor(basePath: string) {
        this.basePath = basePath;
    }
    // get all projects
    getProjects(): any {
        return axios.get(`${this.basePath}/project/getall`);
    }
    // return a list`
    // if  
}