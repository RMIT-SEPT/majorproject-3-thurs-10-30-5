package thurs1030group5.majorproject.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import thurs1030group5.majorproject.model.users.Admin;
import thurs1030group5.majorproject.model.users.Customer;
import thurs1030group5.majorproject.model.users.User;
import thurs1030group5.majorproject.model.users.Worker;
import thurs1030group5.majorproject.services.UserService;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;


    @PostMapping("/admin")
    public ResponseEntity<?> createNewCustomer(@Valid @RequestBody Admin admin, BindingResult result) {
        return createUser(admin, result);
    }

    @PostMapping("/worker")
    public ResponseEntity<?> createNewWorker(@Valid @RequestBody Worker worker, BindingResult result) {
        return createUser(worker, result);
    }

    @PostMapping("/customer")
    public ResponseEntity<?> createNewCustomer(@Valid @RequestBody Customer customer, BindingResult result) {
        return createUser(customer, result);
    }

    private ResponseEntity<?> createUser(User user, BindingResult result) {
        if (result.hasErrors()){
            Map<String, String> errorMap = new HashMap<>();
//            Finds error in response entity and gives all details for each error
            for (FieldError error : result.getFieldErrors()) {
                return new ResponseEntity<>(result.getFieldErrors(), HttpStatus.BAD_REQUEST);
            }
//            Returns a generic "Invalid User object"
            return new ResponseEntity<>("Invalid User Object", HttpStatus.BAD_REQUEST);
        }
        User user1 = userService.saveOrUpdateUser(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

}