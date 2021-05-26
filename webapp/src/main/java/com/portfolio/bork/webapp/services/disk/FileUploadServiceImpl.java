package com.portfolio.bork.webapp.services.disk;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.util.StringUtils;
import com.portfolio.bork.webapp.exceptions.FileStorageException;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;

public class FileUploadServiceImpl {

    private final Path fileStorageLocation = "C:/var/image/";     

    public FileUploadServiceImpl () {}
        
    public String uploadImageIntoSeveralVersions(MultipartFile file) {
        // come up with naming convention
        // apply disk naming convention
        // get the image sizes
        // create an array of sized images with proper naming conventions
        // compress each one
        // save to disk
        // return size

        // Normalize file name
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            // Check if the file's name contains invalid characters
            if(fileName.contains("..")) {
                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + fileName);
            }

            // Copy file to the target location (Replacing existing file with the same name)
            Path targetLocation = this.fileStorageLocation.resolve(fileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

            return fileName;
        } catch (IOException ex) {
            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", ex);
        }
    }

}
