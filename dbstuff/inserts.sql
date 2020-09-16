insert into project (p_date_modified, p_title) values ("01-01-2020", "test");
insert into content_block ( cb_content, cb_order, cb_type, cb_url, fk_project_id) values ("loreum ipsum dolor", 0, "text", "", 1);
insert into content_block ( cb_content, cb_order, cb_type, cb_url, fk_project_id) values ("loreum ipsum dolor", 0, "link", "https://www.google.com/", 1);
insert into content_block ( cb_content, cb_order, cb_type, cb_url, fk_project_id) values ("internal image", 0, "image", "https://lh3.googleusercontent.com/2Fz6Fn5zq_hh75oNLsyNqyGSHzPopHojN77Eu6GImw_3bb4JteONR_K8lnCY2nRbZQV9RD7ACVYvTHEEoW6oGt2GNkAVXzsGdHl1XI9JWwr9ojo3N7t5mYgqaux8lESdvi4mJTti4Ok", 1);
insert into content_block ( cb_content, cb_order, cb_type, cb_url, fk_project_id) values ("image by web endpoint", 0, "image", "mydoink.jpg", 1);
insert into content_block ( cb_content, cb_order, cb_type, cb_url, fk_project_id) values ("video of the boulder", 0, "video", "https://www.youtube.com/embed/0_qCE82oqrA", 1);