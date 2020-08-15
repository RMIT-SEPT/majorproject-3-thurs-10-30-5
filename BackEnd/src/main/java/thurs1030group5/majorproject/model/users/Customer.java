package thurs1030group5.majorproject.model.users;

import javax.persistence.Entity;
import javax.validation.constraints.NotBlank;

@Entity
public class Customer extends User {
    @NotBlank(message = "Name cannot be blank")
    String firstName;
    @NotBlank(message = "Name cannot be blank")
    String lastName;
    @NotBlank(message = "Address cannot be blank")
    String address;
    @NotBlank(message = "Phone Number cannot be blank")
    String phoneNumber;

    public Customer() {

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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
