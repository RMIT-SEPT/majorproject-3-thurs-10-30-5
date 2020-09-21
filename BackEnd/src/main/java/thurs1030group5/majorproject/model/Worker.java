package thurs1030group5.majorproject.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.PastOrPresent;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

//Represents a worker employed by a business
@Entity
public class Worker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "*Worker must have a first name")
    private String firstName;

    @NotBlank(message =  "*Worker must have a last name")
    private String lastName;

    @ManyToOne()
    @JoinColumn(name = "business_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Business business;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "availability_id", referencedColumnName = "id")
    private Availability availability;

//    List of all bookings made with a worker
    @OneToMany(targetEntity = Booking.class, mappedBy = "worker", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Booking> bookings;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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


//    public Business getBusiness() {
//        return business;
//    }
//
    public void setBusiness(Business business) {
        this.business = business;
    }
//
//    public Availability getAvailability() {
//        return availability;
//    }
//
    public void setAvailability(Availability availability) {
        this.availability = availability;
    }
}
