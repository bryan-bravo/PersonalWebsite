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
    Going to initially hardcode the path, will eventually pull out to config
    @media (min-width:320px)  { smartphones, portrait iPhone, portrait 480x320 phones (Android) }
    @media (min-width:480px)  { smartphones, Android phones, landscape iPhone }
    @media (min-width:600px)  { portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) }
    @media (min-width:801px)  { tablet, landscape iPad, lo-res laptops ands desktops }
    @media (min-width:1025px) { big landscape tablets, laptops, and desktops }
    @media (min-width:1281px) { hi-res laptops and desktops }
*/
@RestController
public class ImageRestController { 
     private final String BASE_PATH = "C:/var/image/";

    /**
     * Used to manually pull image saved on disk
     * @param imageName Name Of File as saved on disk
     * @return byte stream of the image
     */
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

    // public ResponseEntity saveImage( File ) {
    //     // get the image
    //     // apply disk naming convention
    //     // create an array of sized images with proper naming conventions
    //     // compress each one
    //     // save to disk
    //     // return size
    // }

}