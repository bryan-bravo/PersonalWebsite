package com.portfolio.bork.webapp.restcontroller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.http.ResponseEntity;
import com.portfolio.bork.webapp.services.db.ProjectDao;
import com.portfolio.bork.webapp.model.Project;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
public class ProjectRestController {

    private ProjectDao projectDao;
    
    // get project
    @RequestMapping(value = "/project/{projectId}", method = RequestMethod.GET )
    public ResponseEntity getProjectById( @PathVariable String projectId) {
        Long projectIdLong = Long.parseLong(projectId);
        return new ResponseEntity<Project> ( 
            projectDao.getProjectById(projectIdLong) , HttpStatus.OK
        );
    }


    // for constructor injection
    public ProjectRestController(ProjectDao projectDao) {
        this.projectDao = projectDao;
    }

    public void setProjectDao(ProjectDao projectDao) {
        this.projectDao = projectDao;
    }

}