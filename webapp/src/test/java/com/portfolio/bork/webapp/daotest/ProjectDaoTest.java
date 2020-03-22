package com.portfolio.bork.webapp.daotest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.testng.AbstractTransactionalTestNGSpringContextTests;
import org.testng.annotations.Test;
import com.portfolio.bork.webapp.services.db.ProjectDao;

@Test
@ContextConfiguration(locations = "classpath:SpringTestContext.xml")
public class ProjectDaoTest extends AbstractTransactionalTestNGSpringContextTests {
    
    @Autowired
    ProjectDao projectDao;

    @Test(description = "Get Project")
	public void getProject() {

        assert projectDao.getProjectById(1L) != null;
	}
}