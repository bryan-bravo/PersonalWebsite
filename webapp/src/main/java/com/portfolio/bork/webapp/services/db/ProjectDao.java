package com.portfolio.bork.webapp.services.db;

import java.util.List;
import com.portfolio.bork.webapp.model.Project;

public interface ProjectDao {
    
    public List<Project> getAllProjectsCondensed();

    public Project getProjectById(Long projectId);

    public Project saveProject(Project project);

    public boolean deleteProject (Long projectId);
    
}