package com.portfolio.bork.webapp.daotest;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.testng.AbstractTransactionalTestNGSpringContextTests;
import org.testng.annotations.Test;
import com.portfolio.bork.webapp.services.db.ProjectDao;
import com.portfolio.bork.webapp.services.db.ContentBlockDao;


@Test
@ContextConfiguration(locations = "classpath:SpringTestDaoContext.xml")
public class ContentBlockDaoTest extends AbstractTransactionalTestNGSpringContextTests {
    
    ProjectDao projectDao;    
    ContentBlockDao contentBlockDao;

    @Test(description = "Get Content Block")
	public void getContentBlock() {
        assert contentBlockDao.getContentBlockById(1L) != null;
    }
    
    // constructor injection 
    public ContentBlockDaoTest(ProjectDao projectDao, ContentBlockDao contentBlockDao) {
        this.projectDao = projectDao;
        this.contentBlockDao = contentBlockDao;
    }

    public void setProjectDao(ProjectDao projectDao) {
        this.projectDao = projectDao;
    }

    public void setContentBlockDao(ContentBlockDao contentBlockDao) {
        this.contentBlockDao = contentBlockDao;
    }


}