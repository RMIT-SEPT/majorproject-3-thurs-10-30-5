package thurs1030group5.majorproject.web;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import thurs1030group5.majorproject.model.AppUser;
import thurs1030group5.majorproject.model.Appointment;
import thurs1030group5.majorproject.model.Booking;
import thurs1030group5.majorproject.model.Worker;
import thurs1030group5.majorproject.services.BookingService;
import thurs1030group5.majorproject.services.UserService;
import thurs1030group5.majorproject.services.WorkerService;

import javax.validation.Valid;

@RestController
public class BookingController {

    private final BookingService bookingService;
    private final UserService userService;
    private final WorkerService workerService;
    @Autowired
    public BookingController(BookingService bookingService, UserService userService, WorkerService workerService) {
        this.bookingService = bookingService;
        this.userService = userService;
        this.workerService = workerService;
    }



    @PostMapping("/api/public/booking/create")
    public ResponseEntity<?> makeBooking(@Valid @RequestBody Booking booking) {

//        To make sure there is no possibility of discrepancy between front end and back end data, set
//        the details of the booking's worker and customer from the database
        booking.setUser(userService.getUserByUsername(booking.getUser().getUsername()));
        booking.setWorker(workerService.getWorker(booking.getWorker().getId()));
        bookingService.createBooking(booking);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
