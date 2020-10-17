package thurs1030group5.majorproject.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import thurs1030group5.majorproject.model.AppUser;
import thurs1030group5.majorproject.model.AppUserDetails;
import thurs1030group5.majorproject.model.Role;
import thurs1030group5.majorproject.repository.RoleRepository;
import thurs1030group5.majorproject.repository.UserDetailsRepository;
import thurs1030group5.majorproject.repository.UserRepository;

@Service
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final UserDetailsRepository userDetailsRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, RoleRepository roleRepository, BCryptPasswordEncoder bCryptPasswordEncoder, UserDetailsRepository userDetailsRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.userDetailsRepository = userDetailsRepository;

    }
//    Retrieves the user from database, throws exception if not found
    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {
        AppUser user = userRepository.findByUsername(username);
        if(user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return user;
    }

//    Saves the user into the database. Also used to update user details
    public AppUser saveUser(AppUser user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setEnabled(true);
        String roleString = user.getRole().getRole();
        Role userRole = findRole(roleString);
        user.setRole(userRole);
        saveAppUserDetails(user.getUserDetails());
        return userRepository.save(user);
    }

    public AppUserDetails saveAppUserDetails(AppUserDetails appUserDetails) {
        return userDetailsRepository.save(appUserDetails);
    }

    public Role findRole(String roleString) {
        return roleRepository.findByRole(roleString);
    }

    public AppUser getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}
