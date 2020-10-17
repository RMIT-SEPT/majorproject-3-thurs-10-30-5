package thurs1030group5.majorproject.web;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import thurs1030group5.majorproject.model.Appointment;
import thurs1030group5.majorproject.model.Booking;
import thurs1030group5.majorproject.model.Worker;
import thurs1030group5.majorproject.security.JwtAuthenticationFilter;
import thurs1030group5.majorproject.services.BookingService;
import thurs1030group5.majorproject.services.UserService;
import thurs1030group5.majorproject.services.WorkerService;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.time.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
public class BookingController {
    private final int WORK_DAY_START = 9;
    private final int WORK_DAY_END = 17;
    private final int APPOINTMENT_INCREMENTS = 30;
    private final BookingService bookingService;
    private final UserService userService;
    private final WorkerService workerService;
    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    @Autowired
    public BookingController(BookingService bookingService, UserService userService, WorkerService workerService, JwtAuthenticationFilter jwtAuthenticationFilter) {
        this.bookingService = bookingService;
        this.userService = userService;
        this.workerService = workerService;
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
    }



    @PostMapping("/api/booking/create")
    public ResponseEntity<?> makeBooking(@Valid @RequestBody Booking booking) {

//        To make sure there is no possibility of discrepancy between front end and back end data, set
//        the details of the booking's worker and customer from the database
        booking.setUser(userService.getUserByUsername(booking.getUser().getUsername()));
        booking.setWorker(workerService.getWorker(booking.getWorker().getId()));
        bookingService.createBooking(booking);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
//Gets all bookings in the database for the logged in user
    @PostMapping("/api/booking/customer")
    public List<Booking> getAllCustomerBookings(HttpServletRequest request) {
        String currentUsername = jwtAuthenticationFilter.getUsernameFromAuthenticationHeader(request);

        List<Booking> userBookings = bookingService.getCustomerBookings(currentUsername);
//        Gets the worker names for front end use
        for(Booking booking : userBookings) {
            booking.getWorker().setFirstName(booking.getWorker().getUser().getUserDetails().getFirstName());
            booking.getWorker().setLastName(booking.getWorker().getUser().getUserDetails().getLastName());
        }
//        Lambda expression to sort the booking list by appointmentTime (date and time of appointment)
        userBookings.sort((booking1, booking2) -> booking1.getAppointment().getAppointmentTime().compareTo(booking2.getAppointment().getAppointmentTime()));
        return userBookings;
    }

    @PostMapping("/api/booking/availability")
    public List<Appointment> getAvailableTimes(@Valid @RequestBody Booking booking) {
        Date day = booking.getAppointment().getAppointmentTime();
//        Conversion to LocalDateTime for easier manipulation of time;
        LocalDate date = day.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();

        Worker worker = workerService.getWorker(booking.getWorker().getId());
        List<Appointment> availableAppointments = new ArrayList<>();

//        Ugly, disgusting statement that returns no appointments available if worker is not available that day
        if((date.getDayOfWeek() == DayOfWeek.MONDAY && !worker.getAvailability().isMonday()) ||
                (date.getDayOfWeek() == DayOfWeek.TUESDAY && !worker.getAvailability().isTuesday()) ||
                (date.getDayOfWeek() == DayOfWeek.WEDNESDAY && !worker.getAvailability().isWednesday()) ||
                (date.getDayOfWeek() == DayOfWeek.THURSDAY && !worker.getAvailability().isThursday()) ||
                (date.getDayOfWeek() == DayOfWeek.FRIDAY && !worker.getAvailability().isFriday()) ||
                (date.getDayOfWeek() == DayOfWeek.SATURDAY && !worker.getAvailability().isSaturday()) ||
                (date.getDayOfWeek() == DayOfWeek.SUNDAY && !worker.getAvailability().isSunday())) {
            return availableAppointments;
        }
//        If worker is available that day, check all appointments for that day
        LocalTime midnight = LocalTime.MIDNIGHT;
        LocalDateTime dayBegin = LocalDateTime.of(date, midnight);
        LocalDateTime dayEnd = dayBegin.plusDays(1);
        dayEnd = dayEnd.minusSeconds(1);



        Date dateStart = Date.from(dayBegin.toInstant(ZoneOffset.UTC));
        Date dateEnd = Date.from(dayEnd.toInstant(ZoneOffset.UTC));



        List<Booking> bookings = bookingService.getWorkerBookings(booking.getWorker().getId(), dateStart, dateEnd);
        LocalDateTime workDay = dayBegin.plusHours(9);
        int minute = 0;
        int hour = WORK_DAY_START;
        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
        String strDate = formatter.format(day);

//        Adds every appointment time from 9:00 till 16:30 with 30 minute increments
        while(hour != WORK_DAY_END) {
            StringBuilder sb = new StringBuilder();
            sb.append(strDate + " at " + hour + ":" + minute + "0");
//            %6 so the minute is always either 0 or 3 (so xx:00 or xx:30)
            minute = (minute + 3) % 6;
//            if minute is 0, it's ticked over to a new hour
            if (minute == 0) {
                hour++;
            }
            sb.append("-" + hour + ":" + minute + "0");
//            Gets offset for date and time to make sure all dates are in the same time zone
            OffsetDateTime odt = OffsetDateTime.now(ZoneId.systemDefault());
            Timestamp appointmentTime = Timestamp.from(workDay.toInstant(odt.getOffset()));
            boolean bookedAlready = false;
            for(Booking b : bookings) {
                Date bookingTime = b.getAppointment().getAppointmentTime();
                if(b.getAppointment().getAppointmentTime().equals(appointmentTime)) {
                    bookedAlready = true;
                    break;
                }
            }
//            If time is already in use, don't list it in free times
            if(!bookedAlready) {
                Appointment apt = new Appointment();
                apt.setDescription(sb.toString());
                apt.setAppointmentTime(Date.from(workDay.toInstant(ZoneOffset.UTC)));
                availableAppointments.add(apt);
            }

            workDay = workDay.plusMinutes(APPOINTMENT_INCREMENTS);
        }
    return availableAppointments;
    }


}
