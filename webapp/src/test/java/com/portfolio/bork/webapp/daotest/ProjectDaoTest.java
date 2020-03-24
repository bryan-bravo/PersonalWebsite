package com.portfolio.bork.webapp.daotest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.testng.AbstractTransactionalTestNGSpringContextTests;
import org.testng.annotations.Test;
import com.portfolio.bork.webapp.services.db.ProjectDao;

@Test
@ContextConfiguration(locations = "classpath:SpringTestDaoContext.xml")
public class ProjectDaoTest extends AbstractTransactionalTestNGSpringContextTests {
    
    ProjectDao projectDao;

    @Test(description = "Get Project")
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