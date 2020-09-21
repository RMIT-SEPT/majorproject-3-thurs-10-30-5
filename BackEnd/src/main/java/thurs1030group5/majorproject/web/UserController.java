package thurs1030group5.majorproject.web;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import thurs1030group5.majorproject.model.AppUser;
import thurs1030group5.majorproject.services.UserService;

import javax.validation.Valid;

@RestController

public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/api/public/user")
    private AppUser getUser(@Valid @RequestBody String username) {
        return userService.getUserByUsername(username);
    }

}