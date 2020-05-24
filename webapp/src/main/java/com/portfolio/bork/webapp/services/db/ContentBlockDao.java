package com.portfolio.bork.webapp.services.db;

import com.portfolio.bork.webapp.model.ContentBlock;
import com.portfolio.bork.webapp.model.Project;

public interface ContentBlockDao {
    public ContentBlock saveContentBlock(Project project, ContentBlock contentBlock);
    public ContentBlock getContentBlockById( Long contentBlockId);
    public boolean deleteContentBlock(Project project, Long contentBlockId);
}