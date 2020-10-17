package thurs1030group5.majorproject.repository;

import org.springframework.data.repository.CrudRepository;
import thurs1030group5.majorproject.model.Appointment;
import thurs1030group5.majorproject.model.AppointmentType;

import java.util.List;

public interface AppointmentRepository extends CrudRepository<Appointment, Long> {
    List<Appointment> findAll();
    List<Appointment> findAllByAppointmentType(AppointmentType appointmentType);
}
