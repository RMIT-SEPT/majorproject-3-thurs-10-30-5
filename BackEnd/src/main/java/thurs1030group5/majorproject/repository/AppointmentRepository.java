package thurs1030group5.majorproject.repository;

import org.springframework.data.repository.CrudRepository;
import thurs1030group5.majorproject.model.Appointment;
import thurs1030group5.majorproject.model.User;

import java.util.List;

public interface AppointmentRepository extends CrudRepository<Appointment, Long> {
//    List<Appointment> findAppointmentsByUsername(String username);
//    List<Appointment> findAppointmentsByWorkerId(Long id);
}
