//CLASSNAME: Appointment
//DESCRIPTION: A class to represent a specific appointment for a customer

package thurs1030group5.majorproject.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.PastOrPresent;
import java.util.Date;

@Entity
public class Appointment {

    //====================== COLUMNS ======================//
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date appointmentTime;

    @NotBlank(message = "*Appointment must have a type")
    private String type;

    private String description;

    @PastOrPresent
    private Date dateCreated;
    //====================== COLUMNS ======================//

    //====================== GETTERS / SETTERS ======================//
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getAppointmentTime() {
        return appointmentTime;
    }

    public void setAppointmentTime(Date appointmentTime) {
        this.appointmentTime = appointmentTime;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }
    //====================== GETTERS / SETTERS ======================//
}