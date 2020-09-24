package thurs1030group5.majorproject.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import thurs1030group5.majorproject.model.Availability;
import thurs1030group5.majorproject.model.Worker;
import thurs1030group5.majorproject.services.AvailabilityService;

import javax.validation.Valid;

@RestController
public class AvailabilityController {
    private final AvailabilityService availabilityService;

    @Autowired
    public AvailabilityController(AvailabilityService availabilityService){
        this.availabilityService = availabilityService;
    }

    @PostMapping("/api/public/availability/worker")
    public Availability getAvailabilityByWorker(@Valid @RequestBody Worker worker){
        return availabilityService.getAvailabilityById(worker.getAvailabilityId());
    }
}
