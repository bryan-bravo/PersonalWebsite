package com.portfolio.bork.webapp.services.db;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import com.portfolio.bork.webapp.model.Project;

@Repository
public class ProjectDao {
    
    @PersistenceContext
    private EntityManager entityManager;
    
    public ProjectDao () {
    }

    public Project getProjectById(Long projectId) {
        return entityManager.find(Project.class, projectId);
    }
}