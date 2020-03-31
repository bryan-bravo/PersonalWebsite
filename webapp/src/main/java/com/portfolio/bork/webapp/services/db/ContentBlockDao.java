package com.portfolio.bork.webapp.services.db;

import com.portfolio.bork.webapp.model.ContentBlock;

public interface ContentBlockDao {
    public ContentBlock saveContentBlock(ContentBlock contentBlock);
    public ContentBlock getContentBlockById(Long contentBlockId);

}