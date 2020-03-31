package com.portfolio.bork.webapp.services.db;
import com.portfolio.bork.webapp.model.Project;

public interface ProjectDao {
    
    public Project getProjectById(Long projectId);

}