<template>
    <div id="resume" class="main-component">
        <div id='contact-info'>
            <h2>Bryan Bravo</h2>
            <h4>Contact</h4>
            <p>Phone: 6262627041</p>
            <p>Email: bryanbravo90@yahoo.com</p>       
        <hr>
        <div>
            <h4>Skills</h4>
            <p>Java</p>
            <p>Spring Boot</p>
            <p>Apache Tomcat</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>Vue.js</p>
            <p>Angular</p>
            <p>SQL</p>
            <p>GIT</p>
            <p>Payment Processing</p>
        </div>

        </div>
        <div id='everything-else'>
                <div id='experience'>
                    
                    <h2>Work Experience</h2>
                    <hr>
                    <div class='job'>
                        <h3> ERP Developer II | CRLaurence US Aluminum</h3>
                        <h4>October 2019 - Current</h4>
                        <ul>
                            <li>California State University Los Angeles STEP Program :June 2013 - August 2013</li>
                        </ul>
                    </div>
                    <hr>
                    <div class='job'>
                        <h3> Junior Java Developer | Inovio Payments</h3>
                        <h4>August 2018 - October 2019</h4>
                        <ul>
                            <li>Integrate company’s system to make restful http service calls to payment processors and banks to handle transactions.</li>
                            <li>Develop tools that automate and optimize the development of new processor integrations, through dynamic code template generation.</li>
                            <li>Created client support restful web application in Spring and Vue, which enables a GUI for our employees removing the need for Jira tickets being made for reports from database queries</li>
                            <li>Edit spec files and build RPM packages, to deploy on our CentOS development and merge environment servers, for QA team. </li>
                        </ul>
                    </div>
                </div>  
            <div id='education'>
                <h2>Education</h2>
                <hr>
                <h3>California State University Los Angeles</h3>
                <ul>
                    <li>Bachelor's Science in Computer Science GPA 3.35</li>
                </ul>
            </div>
            <div id='projects'>
                <h2>Projects</h2>
                <hr>
                <h3>Aquila</h3>
                <ul>
                    <li>Team Lead and Full Stack Developer.</li>
                    <li>Restful web app to digitize Cal State LA’s administration of grants and contracts</li>
                    <li>Developing user interface in Angular 4 and Web Apis in Java Spring framework</li>
                    <li>Implementing different privileges for university applicants and proposal analyst</li>
                </ul>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
  /*----------------- resume stuff -------------------*/
    #resume {
        width: 89.9vw;
        margin: 5vh 5vw;
        display: grid;
        grid-gap: 1em;
        grid-template-columns: 1fr 3fr;
        grid-template-rows: 1fr 3fr;
    }
    /* gives the style to each resume element */
    #resume>div:nth-child(odd),
    #everything-else>div {
        /* border: 1px solid black; */
        box-shadow: 0 0 10px #FFFFFF;
        padding: 0 1em;
    }
    #everything-else {
        display: grid;
        grid-gap: 1em;
    }
    #contact-info {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 3;
    }
    #lang-and-tech {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 3;
    }
    #everything-else {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;
    }
</style>