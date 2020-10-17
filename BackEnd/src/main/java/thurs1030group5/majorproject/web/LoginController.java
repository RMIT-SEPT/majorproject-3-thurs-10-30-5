package thurs1030group5.majorproject.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import thurs1030group5.majorproject.model.AppUser;
import thurs1030group5.majorproject.payload.JwtLoginSuccessResponse;
import thurs1030group5.majorproject.payload.LoginRequest;
import thurs1030group5.majorproject.security.JwtTokenProvider;
import thurs1030group5.majorproject.security.SecurityConstants;
import thurs1030group5.majorproject.services.MapValidationErrorService;
import thurs1030group5.majorproject.services.UserService;

import javax.validation.Valid;


/*
Cross origin determines who can access the API. MUST BE CHANGED LATER AS '*' ALLOWS ANYONE TO CALL THE API
 */
@CrossOrigin("*")
@RestController
public class LoginController {


    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    private final UserService userService;

    @Autowired
    public LoginController(UserService userService) {
        this.userService = userService;
    }

//    PostMapping to register a new user to the application
    @PostMapping("/api/registration")
    private ResponseEntity<?> createUser(@Valid @RequestBody AppUser appUser, BindingResult result) {

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
//        If errors with registering, return
        if(errorMap != null) {
            return errorMap;
        }
//        If no errors, save the new account into the database
        userService.saveUser(appUser);
//        Return a response to show the user was created
        return new ResponseEntity<>(appUser, HttpStatus.CREATED);
    }

//Get mapping that is used after a successful login. Will be fixed when JWT implemented
    @GetMapping("/")
    private String home(){
        return "Login Successful";
    }
    //Get mapping that is used after a failed login. Will be fixed when JWT implemented
    @GetMapping("/login")
    private String login(){
        return "LOGIN";
    }


    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private AuthenticationManager authenticationManager;

//    Mapping to attempt to log a user into the application through Spring Security
    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest, BindingResult result){
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
//        If errors, return the errors
        if(errorMap != null) return errorMap;
//        If no errors, username and password are valid and create an authentication token for it
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );
//        Set the authentication for the User of the platform as they have valid credentials
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = SecurityConstants.TOKEN_PREFIX +  tokenProvider.generateToken(authentication);

//        Return true as user is successfully logged in, and return json web token for front end to use
        return ResponseEntity.ok(new JwtLoginSuccessResponse(true, jwt));
    }
}
