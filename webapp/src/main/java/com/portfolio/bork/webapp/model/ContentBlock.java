package com.portfolio.bork.webapp.model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table (name = "content_block")
public class ContentBlock {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="cb_id")
    Long id;
        
    @Column(name="cb_type")
    String type;
    
    @Column(name="cb_content")
    String content;
    
    @Column(name="cb_order")
    int order;
    
    @ManyToOne
    @JoinColumn(name = "fk_project_id") // this generates the foreign key column in the database
    Project project; 
    

    public ContentBlock () {
    }

    public ContentBlock(Long id, String type, String content, int order, Project project) {
        this.id = id;
        this.type = type;
        this.content = content;
        this.order = order;
        this.project = project;
    }
    
    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getContent() {
        return this.content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getOrder() {
        return this.order;
    }

    public void setOrder(int order) {
        this.order = order;
    }

    public Project getProject() {
        return this.project;
    }

    public void setProject(Project project) {
        this.project = project;
    }
    

    // optional fields
    // ContentFile file;
    // Link link;
}