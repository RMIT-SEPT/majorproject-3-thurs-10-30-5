package thurs1030group5.majorproject.model;

import thurs1030group5.majorproject.model.users.Admin;
import thurs1030group5.majorproject.model.users.Worker;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.List;
@Entity
public class Business {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private int ownerId;

}
