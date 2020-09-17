package thurs1030group5.majorproject.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import thurs1030group5.majorproject.model.Appointment;
import thurs1030group5.majorproject.repository.AppointmentRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class AppointmentService {
    private final AppointmentRepository appointmentRepository;

    @Autowired
    public AppointmentService(AppointmentRepository appointmentRepository){
        this.appointmentRepository = appointmentRepository;
    }

    public List<Appointment> getAllAppointments(){
        return appointmentRepository.findAll();
    }

    public List<Appointment> getAllAppointmentByType(String type) {
        return appointmentRepository.findAllByType(type);
    }
}
