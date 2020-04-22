package com.portfolio.bork.webapp.services.db;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import com.portfolio.bork.webapp.model.Project;

@Repository
public class ProjectDaoImpl implements ProjectDao {
    
    @PersistenceContext
    private EntityManager entityManager;
    
    public ProjectDaoImpl() {}

    public Project getProjectById(Long projectId) {
        return entityManager.find(Project.class, projectId);
    }
}