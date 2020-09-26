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

    private String description;

    @PastOrPresent
    private Date dateCreated;

    //Many-to-one relationship with appointment type, appointments can only have one type
    @ManyToOne()
    @JoinColumn(name = "appointment_type", referencedColumnName = "type")
    private AppointmentType appointmentType;
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

    public AppointmentType getType() {
        return appointmentType;
    }

    public void setType(AppointmentType appointmentType) {
        this.appointmentType = appointmentType;
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