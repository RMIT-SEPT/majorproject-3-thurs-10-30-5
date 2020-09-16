package thurs1030group5.majorproject.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import thurs1030group5.majorproject.model.Business;
import thurs1030group5.majorproject.model.Worker;
import thurs1030group5.majorproject.services.BusinessService;

import javax.validation.Valid;
import java.util.List;
@CrossOrigin("*")
@RestController
public class BusinessController {

    private final BusinessService businessService;
    @Autowired
    public BusinessController(BusinessService businessService) {
        this.businessService = businessService;
    }
    @GetMapping("/api/public/business")
    private List<Business> getAllBusinesses() {
        return businessService.getAllBusinesses();
    }

    @PostMapping("/api/public/business/worker")
    private Business getBusinessFromWorkerId(@Valid @RequestBody Worker worker) {
        return businessService.getBusinessFromWorkerId(worker.getId());
    }
}
