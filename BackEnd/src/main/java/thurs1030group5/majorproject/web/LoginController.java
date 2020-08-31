package thurs1030group5.majorproject.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import thurs1030group5.majorproject.model.User;
import thurs1030group5.majorproject.services.UserDataService;
import thurs1030group5.majorproject.services.UserService;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

/*
Cross origin determines who can access the API. MUST BE CHANGED LATER AS '*' ALLOWS ANYONE TO CALL THE API
 */
@CrossOrigin("*")
@RestController
public class LoginController {
    @Autowired
    private UserService userService;

    @Autowired
    private UserDataService userDataService;

    @PostMapping("/api/registration")
    private ResponseEntity<?> createUser(@Valid @RequestBody User user, BindingResult result) {
        if (result.hasErrors()){
            Map<String, String> errorMap = new HashMap<>();
//            Finds error in response entity and gives all details for each error
            for (FieldError error : result.getFieldErrors()) {
                return new ResponseEntity<>(result.getFieldErrors(), HttpStatus.BAD_REQUEST);
            }
//            Returns a generic "Invalid User object"
            return new ResponseEntity<>("Invalid User Object", HttpStatus.BAD_REQUEST);
        }
        User user1 = userService.saveUser(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PostMapping("/api/login")
    public Boolean validateLogin(@Valid @RequestBody User user) {
        boolean result = false;

        User foundUser = userService.findUserByUsername(user.getUsername());
        if(foundUser != null) {
            BCryptPasswordEncoder bCryptPasswordEncoder  = new BCryptPasswordEncoder();
            if(bCryptPasswordEncoder.matches(user.getPassword(), foundUser.getPassword())) {
                result = true;
            }
        }

        return result;
    }
}
