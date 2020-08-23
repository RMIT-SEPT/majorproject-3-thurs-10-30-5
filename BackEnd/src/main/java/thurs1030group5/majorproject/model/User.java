package thurs1030group5.majorproject.model;


import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Set;




@Entity
public class User {
    @Id
    @Size(min = 3, message = "*Your user name must have at least 3 characters")
    @NotBlank(message = "*Please provide a user name")
    private String username;

    @NotBlank(message = "*Please provide your password")
    private String password;

    //REQUIRED FOR SPRING SECURITY (SAYS WHETHER ACTIVE USER, CANNOT AUTHENTICATE IF FALSE)
    private Boolean active;

    //Generate ManyToMany relationship table as user_role w/ user.username and role.id columns
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "user_role",
            joinColumns = {@JoinColumn(name = "user_username")},
            inverseJoinColumns = {@JoinColumn(name = "role_id")}
    )
    private Set<Role> roles;

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

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }
}
