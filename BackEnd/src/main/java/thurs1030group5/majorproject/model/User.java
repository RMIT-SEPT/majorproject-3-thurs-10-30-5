package thurs1030group5.majorproject.model;


import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;




@Entity
public class User {
    @Id
    @Size(min = 3, message = "*Your user name must have at least 3 characters")
    @NotBlank(message = "*Please provide a user name")
    private String username;

    @NotBlank(message = "*Please provide your password")
    private String password;

    @NotBlank(message = "*Please provide your email")
    private String email;

    @OneToOne(mappedBy = "user")
    private Booking booking;

    //REQUIRED FOR SPRING SECURITY (SAYS WHETHER ACTIVE USER, CANNOT AUTHENTICATE IF FALSE)
    private Boolean enabled;

    //Generate ManyToMany relationship table as user_role w/ user.username and role.id columns
//    TODO EAGER FETCH IS INEFFICIENT, HOWEVER DEFAULT GIVES EXCEPTION. LOOK INTO BETTER WAYS?
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(
            name = "user_role",
            joinColumns = {@JoinColumn(name = "user_username")},
            inverseJoinColumns = {@JoinColumn(name = "role_id")}
    )
    private Set<Role> roles;

    @OneToMany(targetEntity = Business.class, mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Business> businesses = new ArrayList<>();

    public User() {

    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public Boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }
}
