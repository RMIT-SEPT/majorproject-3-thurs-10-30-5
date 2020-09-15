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

    private final BusinessService businessService;
    @Autowired
    public BusinessController(BusinessService businessService) {
        this.businessService = businessService;
    }
    @GetMapping("/api/public/business")
    private List<Business> getAllBusinesses() {
        return businessService.getAllBusinesses();
    }
}
