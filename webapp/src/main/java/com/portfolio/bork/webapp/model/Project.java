package com.portfolio.bork.webapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name = "project")
public class Project {
    @Id
    @GeneratedValue
    @Column (name = "project_id")
    private Long id;
    @Column( name="project_title" )
    String title;
    @Column( name = "project_date_modified")
    String dateModified;


    public Project() {
    }

    public Project(Long id, String title, String dateModified) {
        this.id = id;
        this.title = title;
        this.dateModified = dateModified;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDateModified() {
        return this.dateModified;
    }

    public void setDateModified(String dateModified) {
        this.dateModified = dateModified;
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", title='" + getTitle() + "'" +
            ", dateModified='" + getDateModified() + "'" +
            "}";
    }


}