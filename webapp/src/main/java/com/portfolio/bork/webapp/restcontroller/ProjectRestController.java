package com.portfolio.bork.webapp.restcontroller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

import com.portfolio.bork.webapp.services.db.ContentBlockDao;
import com.portfolio.bork.webapp.services.db.ProjectDao;

import java.util.List;

import com.portfolio.bork.webapp.model.ContentBlock;
import com.portfolio.bork.webapp.model.Project;


@RestController
public class ProjectRestController {

    private ProjectDao projectDao;
    private ContentBlockDao contentBlockDao;
    /*
        get condensed projects
        return 
        id
        title
        // images
        // type

     */
    @RequestMapping(value = "/project/getall", method = RequestMethod.GET )
    public List<Project> getAllProjectsCondensed() {
        return projectDao.getAllProjectsCondensed();
    }

    // get project
    @RequestMapping(value = "/project/{projectId}", method = RequestMethod.GET )
    public Project getProjectById( @PathVariable String projectId) {
        Long projectIdLong = Long.parseLong(projectId);
            return projectDao.getProjectById(projectIdLong);
    }

    // Create Project
    @RequestMapping(value = "/project", method = RequestMethod.POST )
    public Project createProject(@RequestBody Project project) {
        // TODO: set the date here
         return projectDao.saveProject(project);
        
    }

    // Delete Project
    @RequestMapping(value = "/project/{projectId}", method = RequestMethod.DELETE )
    public boolean deleteProjectById( @PathVariable String projectId) {
        Long projectIdLong = Long.parseLong(projectId);
            return projectDao.deleteProject(projectIdLong);
    }

    // Save ContentBlock
    @RequestMapping(value = "/contentblock/{projectId}", method = RequestMethod.POST )
    public ContentBlock saveContentBlock( @PathVariable String projectId, @RequestBody ContentBlock contentBlock) {
        Long projectIdLong = Long.parseLong(projectId);
        Project project = projectDao.getProjectById(projectIdLong);
        return contentBlockDao.saveContentBlock(project, contentBlock);
    }
    
    // Delete ContentBlock
    @RequestMapping(value = "/contentblock/{projectId}/{contentBlockId}", method = RequestMethod.DELETE )
    public boolean deleteContentBlock( @PathVariable String projectId, @PathVariable String contentBlockId) {
        Long projectIdLong = Long.parseLong(projectId);
        Long contentBlockIdLong = Long.parseLong(contentBlockId);
        Project project = projectDao.getProjectById(projectIdLong);
        return contentBlockDao.deleteContentBlock(project, contentBlockIdLong);
    }
    
    // for constructor injection
    public ProjectRestController(ProjectDao projectDao, ContentBlockDao contentBlockDao) {
        this.projectDao = projectDao;
        this.contentBlockDao = contentBlockDao;
    }

    public void setProjectDao(ProjectDao projectDao) {
        this.projectDao = projectDao;
    }
    
    public void setContentBlockDao(ContentBlockDao contentBlockDao) {
        this.contentBlockDao = contentBlockDao;
    }

}