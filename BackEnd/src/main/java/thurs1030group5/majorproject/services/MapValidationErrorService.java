package thurs1030group5.majorproject.services;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.HashMap;
import java.util.Map;

//Creates a map of all errors encountered by a controller
@Service
public class MapValidationErrorService {

    public ResponseEntity<?> MapValidationService(BindingResult result){

//        If there are errors, create a map containing all of them
        if(result.hasErrors()){
            Map<String, String> errorMap = new HashMap<>();

            for(FieldError error: result.getFieldErrors()){
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
//            As there are errors, send back a BAD_REQUEST
            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }
//        If no errors, return null
        return null;

    }
}