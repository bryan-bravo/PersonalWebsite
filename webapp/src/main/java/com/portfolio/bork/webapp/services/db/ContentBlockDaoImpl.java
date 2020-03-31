package com.portfolio.bork.webapp.services.db;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import com.portfolio.bork.webapp.model.ContentBlock;

@Repository
public class ContentBlockDaoImpl implements ContentBlockDao {

    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    public ContentBlockDaoImpl() {}
    
    @Override
    public ContentBlock getContentBlockById(Long contentBlockId) {
        return entityManager.find(ContentBlock.class, contentBlockId);
    }
    @Override
    public ContentBlock saveContentBlock(ContentBlock contentBlock) {
        // TODO:since this is bi directional I think I have to do both sides or cascade
        return entityManager.merge(contentBlock);
    };

}