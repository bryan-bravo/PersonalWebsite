package com.portfolio.bork.webapp.services.db;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import com.portfolio.bork.webapp.model.Project;

@Repository
public class ProjectDaoImpl implements ProjectDao {
    
    @PersistenceContext
    private EntityManager entityManager;
    
    public ProjectDaoImpl() {}

    public Project getProjectById(Long projectId) {
        return entityManager.find(Project.class, projectId);
    }

    @Override
    @Transactional
    public Project saveProject (Project project) {
        return entityManager.merge(project);
    }

    @Override
    @Transactional
    public boolean deleteProject(Long projectId) {
		Project project = entityManager.find(Project.class, projectId);
        entityManager.remove(project);
        return true;
    }
}