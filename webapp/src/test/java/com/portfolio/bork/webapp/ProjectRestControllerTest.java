package com.portfolio.bork.webapp;

import static org.junit.Assert.assertTrue;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;


@RunWith(SpringRunner.class)
//  @SpringBootTest(classes = StudentServicesApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@SpringBootTest(classes = WebappApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@ContextConfiguration(classes=TestConfig.class)
public class ProjectRestControllerTest {

    @LocalServerPort
    private int port;
    
	TestRestTemplate restTemplate = new TestRestTemplate();

	HttpHeaders headers = new HttpHeaders();

	@Test
	public void getProject() {

		HttpEntity<String> entity = new HttpEntity<String>(null, headers);
        String projectId = "1";
		ResponseEntity<String> response = restTemplate.exchange(
				createURLWithPort("/project/" + projectId ),
				HttpMethod.GET, entity, String.class);

        // JSONAssert.assertEquals(expected, response.getBody(), false);
        System.out.println(response.getBody());
        assert !response.getBody().isEmpty();
	}

	private String createURLWithPort(String uri) {
		return "http://localhost:" + port + uri;
	}

}