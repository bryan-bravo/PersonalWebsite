insert into project (p_date_modified, p_title) values ("01-01-2020", "test");
insert into content_block ( cb_content, cb_order, cb_type, cb_url, fk_project_id) values ("loreum ipsum dolor", 0, "text", "", 1);
insert into content_block ( cb_content, cb_order, cb_type, cb_url, fk_project_id) values ("loreum ipsum dolor", 0, "link", "https://www.google.com/", 1);