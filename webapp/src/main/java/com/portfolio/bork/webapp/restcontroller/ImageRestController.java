package com.portfolio.bork.webapp.restcontroller;
import org.springframework.web.bind.annotation.RestController;
/*
TODO: 
    accept a url which will be submitted by the content block,
    this url can be to the path on disk or to generated(online tool) google photos api end point
    return a outputstream of buffer of an image
    Going to initially hardcode the application, will eventually pull out to config
    first create two content blocks, one with a disk path and one with a google api font
*/
@RestController
public class ImageRestController { 
     private final String BASE_PATH = "C:/var/";
    // based off the url path, the front end will handle most of the image calling language 
    // if web url, make http client call
    // else, will invoke this controller with a content block Id
}