import Project from '../models/Project';
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
    // Save a project
    saveProject(project?: Project): Promise<Project> {
        return axios.post(
            `${this.basePath}/project`,
            project
        );
    }
    // Delete Project
    deleteProject(id: number): Promise<boolean> {
        return axios.delete(`${this.basePath}/project/${id}`);
    }
}