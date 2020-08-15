package thurs1030group5.majorproject.model.users;

import thurs1030group5.majorproject.model.Business;

import javax.persistence.Entity;
import javax.validation.constraints.NotBlank;

@Entity
public class Worker extends User {

    private int businessId;

}
