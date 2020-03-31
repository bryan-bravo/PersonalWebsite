drop schema if exists personalwebsite;
create schema personalwebsite;
use personalwebsite;

    create table content_block (
       cb_id bigint not null auto_increment,
        cb_content varchar(255),
        cb_order integer,
        cb_type varchar(255),
        fk_project_id bigint,
        primary key (cb_id)
    ) engine=MyISAM;

    create table project (
       p_id bigint not null auto_increment,
        p_date_modified varchar(255),
        p_title varchar(255),
        primary key (p_id)
    ) engine=MyISAM;

    alter table content_block
       add constraint FK4affs3o396i6ovc9d5ba1asgj
       foreign key (fk_project_id)
       references project (p_id);