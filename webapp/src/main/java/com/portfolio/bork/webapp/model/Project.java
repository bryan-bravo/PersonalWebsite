package com.portfolio.bork.webapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Project {
    @Id
    @GeneratedValue
    @Column (name = "project_id")
    private Long id;
    @Column( name="project_title" )
    String title;
    @Column( name = "project_date_modified")
    String dateModified;

}