package com.portfolio.bork.webapp.services.db;

import org.springframework.stereotype.Repository;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import com.portfolio.bork.webapp.model.Project;

@Repository
public class ProjectDaoImpl implements ProjectDao {
    
    @PersistenceContext
    private EntityManager entityManager;
    
    public ProjectDaoImpl() {}

    @Override
    public List<Project> getAllProjectsCondensed() {
        // this uses Result Classes (Constructor Expressions)
        String query = "SELECT NEW com.portfolio.bork.webapp.model.Project( P.id, P.title ) from Project as P";
        return entityManager.createQuery(query, Project.class).getResultList();
    }

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