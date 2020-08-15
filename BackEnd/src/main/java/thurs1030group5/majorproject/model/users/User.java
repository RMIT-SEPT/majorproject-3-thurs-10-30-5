package thurs1030group5.majorproject.model.users;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;




@Entity
public abstract class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Size(min=3,max=20, message = "Username must be between 3 and 20 characters")
    @NotBlank(message = "Username cannot be blank")
    private String username;
    @Size(min=3,max=20, message = "Password must be between 3 and 20 characters")
    @NotBlank(message = "Password is Required")
    private String password;
    @NotBlank(message = "Name cannot be blank")
    String firstName;
    @NotBlank(message = "Name cannot be blank")
    String lastName;

    public User() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
