package thurs1030group5.majorproject.services;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import thurs1030group5.majorproject.model.AppUser;
import thurs1030group5.majorproject.repository.UserRepository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

@SpringBootTest
@AutoConfigureTestDatabase
public class UserServiceTest {

    @Autowired
    private UserService userService;

    @MockBean
    private UserRepository userRepository;

    @BeforeEach
    public void setUp() {
        AppUser testUser = new AppUser();
        testUser.setUsername("UserTest");
        Mockito.when(userRepository.findByUsername(testUser.getUsername())).thenReturn(testUser);
        Mockito.when(userRepository.findByUsername("invalidUsername")).thenReturn(null);
    }
    @Test
    public void whenValidUsername_thenUserShouldBeFound() {
        String username = "UserTest";
        UserDetails foundUser = userService.loadUserByUsername(username);
        assertEquals(username, foundUser.getUsername());
    }

    @Test
    public void whenInvalidUsername_thenUsernameNotFoundExceptionThrown() {
        String username = "invalidUsername";
        assertThrows(UsernameNotFoundException.class, () -> userService.loadUserByUsername(username));
    }

}
