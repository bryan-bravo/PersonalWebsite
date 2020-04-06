package com.portfolio.bork.webapp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.testng.AbstractTransactionalTestNGSpringContextTests;
import org.testng.annotations.Test;
import com.portfolio.bork.webapp.services.db.ProjectDao;

@Test
@ContextConfiguration(locations = "classpath:SpringTestContext.xml")
public class ProjectDaoTest extends AbstractTransactionalTestNGSpringContextTests {
    
    ProjectDao projectDao;

    @Test
	public void getProject() {
        assert projectDao.getProjectById(1L) != null;
    }
    
    // constructor injection 
    public ProjectDaoTest(ProjectDao projectDao) {
        this.projectDao = projectDao;
    }

    public void setProjectDao(ProjectDao projectDao) {
        this.projectDao = projectDao;
    }

}