package com.portfolio.bork.webapp.restcontroller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

import com.portfolio.bork.webapp.services.db.ProjectDao;
import com.portfolio.bork.webapp.model.Project;


@RestController
public class ProjectRestController {

    private ProjectDao projectDao;
    
    // get project
    @RequestMapping(value = "/project/{projectId}", method = RequestMethod.GET )
    public Project getProjectById( @PathVariable String projectId) {
        Long projectIdLong = Long.parseLong(projectId);
            return projectDao.getProjectById(projectIdLong);
    }


    // for constructor injection
    public ProjectRestController(ProjectDao projectDao) {
        this.projectDao = projectDao;
    }

    public void setProjectDao(ProjectDao projectDao) {
        this.projectDao = projectDao;
    }

}