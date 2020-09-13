package thurs1030group5.majorproject.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import thurs1030group5.majorproject.model.Business;
import thurs1030group5.majorproject.services.BusinessService;

import java.util.List;

@RestController
public class BusinessController {
    @Autowired
    BusinessService businessService;

    @GetMapping("/api/business")
    List<Business> getAllBusinesses() {
        return businessService.getAllBusinesses();
    }
}
