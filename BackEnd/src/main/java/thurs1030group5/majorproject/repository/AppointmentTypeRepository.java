package thurs1030group5.majorproject.repository;

import org.springframework.data.repository.CrudRepository;
import thurs1030group5.majorproject.model.AppointmentType;

import java.util.List;

public interface AppointmentTypeRepository extends CrudRepository<AppointmentType, Long> {
    List<AppointmentType> findAll();
}