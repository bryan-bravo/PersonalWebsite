package com.portfolio.bork.webapp.restcontroller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

import org.apache.commons.io.IOUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestMapping;
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
     private final String BASE_PATH = "C:/var/image/";
    // based off the url path, the front end will handle most of the image calling language 
    // if web url, make http client call
    // else, will invoke this controller with a content block Id
    @RequestMapping(value = "/image/{imageName}", method = RequestMethod.GET )
    public ResponseEntity getImageByName(@PathVariable String imageName) {
        
        // read the file
        File fileToDownload = new File(this.BASE_PATH + imageName);
        byte[] media = null;
        try (FileInputStream in = new FileInputStream( fileToDownload );) {
            media = IOUtils.toByteArray( in);
        } catch (IOException e ) {
            // log
            e.printStackTrace();
            // send a bad response
            return new ResponseEntity( e.getMessage(), HttpStatus.BAD_REQUEST);
        }

        ResponseEntity<byte[]> responseEntity = new ResponseEntity<>(media, HttpStatus.OK);
        return responseEntity;

    }

}