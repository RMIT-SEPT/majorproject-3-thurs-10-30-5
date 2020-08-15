package thurs1030group5.majorproject.model.users;

import thurs1030group5.majorproject.model.Business;

import javax.persistence.Entity;

@Entity
public class Admin extends User {

    private int businessId;
}
