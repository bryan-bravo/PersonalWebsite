package com.portfolio.bork.webapp;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import com.portfolio.bork.webapp.services.db.ProjectDao;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@ContextConfiguration(classes=TestConfig.class)

public class ProjectDaoTest  {

    ProjectDao projectDao;

    @Test
	public void getProject() {
        assert projectDao.getProjectById(1L) != null;
        
    }
    
    public ProjectDaoTest() {}
    
    @Autowired
    public void setProjectDao(ProjectDao projectDao) {
        this.projectDao = projectDao;
    }
}

