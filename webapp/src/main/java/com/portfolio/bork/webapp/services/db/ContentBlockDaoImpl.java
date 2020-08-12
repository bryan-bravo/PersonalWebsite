package com.portfolio.bork.webapp.services.db;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import com.portfolio.bork.webapp.model.ContentBlock;
import com.portfolio.bork.webapp.model.Project;

@Repository
public class ContentBlockDaoImpl implements ContentBlockDao {

    @PersistenceContext
    private EntityManager entityManager;

    public ContentBlockDaoImpl() {}
    
    @Override
    public ContentBlock getContentBlockById(Long contentBlockId) {
        return entityManager.find(ContentBlock.class, contentBlockId);
    }
    
    @Override
    @Transactional
    public ContentBlock saveContentBlock(Project project, ContentBlock contentBlock) {
        project.getContentBlocks().add(contentBlock);
        contentBlock.setProject(project);
        entityManager.persist(contentBlock);
        return contentBlock;
    }; 
    
    @Override 
    @Transactional
    public boolean deleteContentBlock( Project project, Long contentBlockId ) {
        List<ContentBlock> cBlocks = project.getContentBlocks();
        
        // if exists find index of content blovk
        int cBlockIndexCounter = 0;
        boolean blockFound = false;
        for (int i = 0; i < cBlocks.size(); i++ ) {
            if (cBlocks.get(i).getId() == contentBlockId) {
                cBlockIndexCounter = i;
                blockFound = true;
            }
        }
        
        // if  block was found removve it
        if (blockFound) {
            cBlocks.remove(cBlockIndexCounter);
            ContentBlock contentBlock = entityManager.find(ContentBlock.class, contentBlockId);
            entityManager.remove(contentBlock);
        }

        return true;
    }


}