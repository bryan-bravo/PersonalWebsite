package com.portfolio.bork.webapp.webtest;

import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import org.springframework.web.context.WebApplicationContext;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import org.springframework.test.context.ContextConfiguration;

@Test
@WebAppConfiguration
@ContextConfiguration(
    locations = { "classpath:SpringTestDaoContext.xml", "classpath:SpringTestWebContext.xml" }
)
public class ProjectRestControllerTest {

    private WebApplicationContext wac;
    private MockMvc mockMvc;
    
    @BeforeClass
	void setup() {
		this.mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
    }
    
    @Test
	void getProjectByIdRequestTest() throws Exception{
		String projectId = "1";
		MockHttpServletRequestBuilder request = get("/project/" + projectId);
  		//test request
  		this.mockMvc.perform(request)
  		.andExpect( status().isOk());
    }
          
    public ProjectRestControllerTest(WebApplicationContext wac) {
        this.wac = wac;
    }

    public void setWac(WebApplicationContext wac) {
        this.wac = wac;
    }
	
}
