package thurs1030group5.majorproject.services;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import thurs1030group5.majorproject.model.Appointment;
import thurs1030group5.majorproject.repository.AppointmentRepository;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;


@SpringBootTest
@AutoConfigureTestDatabase
public class AppointmentServiceTest {

    @Autowired
    private AppointmentService appointmentService;

    @MockBean
    private AppointmentRepository appointmentRepository;

    @BeforeEach
    public void setUp() {
        Date currentDateTime = new Date();
        Appointment app1 = new Appointment();
        app1.setId((long) 1);
        app1.setAppointmentTime(new Date(1607905800));
        app1.setType("TestType1");
        app1.setDescription("Test Appointment");
        app1.setDateCreated(currentDateTime);

        Appointment app2 = new Appointment();
        app2.setId((long) 2);
        app2.setAppointmentTime(new Date(1639441800));
        app2.setType("TestType2");
        app2.setDescription("Test Appointment 2");
        app2.setDateCreated(currentDateTime);

        Appointment app3 = new Appointment();
        app3.setId((long) 3);
        app3.setAppointmentTime(new Date(1609466400));
        app3.setType("TestType2");
        app3.setDescription("Test Appointment 3");
        app3.setDateCreated(currentDateTime);

        Mockito.when(appointmentRepository.findAll()).thenReturn(Arrays.asList(app1, app2, app3));
    }

    @Test
    public void getAllAppointments(){
        int expectedSize = 3;
        int actualSize = appointmentService.getAllAppointments().size();
        assertEquals(expectedSize, actualSize);
    }

    @Test
    public void getAllAppointmentsOfCertainType(){
        String type = "TestType2";
        int expectedSize = 2;
        List<Appointment> appointments = appointmentService.getAllAppointmentByType(type);
        int actualSize = appointments.size();
        assertEquals(expectedSize, actualSize);
    }

    @Test
    public void getAllAppointmentsOfNonExistingType(){
        String type = "FakeType";
        int resultSize = 0;
        assertEquals(resultSize, appointmentService.getAllAppointmentByType(type).size());
    }
}
