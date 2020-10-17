//CLASSNAME: AppointmentType
//DESCRIPTION: Entity for all appointment types and their durations

package thurs1030group5.majorproject.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Entity
public class AppointmentType {

    //====================== COLUMNS ======================//
    @Id
    @NotBlank(message = "*Appointment type cannot be blank")
    private String type;

    //Represented in minutes
    private int duration;
    //====================== COLUMNS ======================//

    //====================== GETTERS / SETTERS ======================//
    public String getType(){
        return type;
    }

    public void setType(String type){
        this.type = type;
    }

    public int getDuration(){
        return duration;
    }

    public void setDuration(int duration){
        this.duration = duration;
    }
    //====================== GETTERS / SETTERS ======================//
}