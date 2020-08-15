package thurs1030group5.majorproject.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import thurs1030group5.majorproject.model.users.Customer;
import thurs1030group5.majorproject.model.users.Worker;
import thurs1030group5.majorproject.services.CustomerService;
import thurs1030group5.majorproject.services.WorkerService;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/worker")
public class WorkerController {
    @Autowired
    private WorkerService workerService;

    @PostMapping("")
    public ResponseEntity<?> createNewWorker(@Valid @RequestBody Worker worker, BindingResult result) {

        if (result.hasErrors()){
            Map<String, String> errorMap = new HashMap<>();
//            Finds error in response entity and gives all details for each error
            for (FieldError error : result.getFieldErrors()) {
                return new ResponseEntity<List<FieldError>>(result.getFieldErrors(), HttpStatus.BAD_REQUEST);
            }
//            Returns a generic "Invalid Worker object
            return new ResponseEntity<String>("Invalid Worker Object", HttpStatus.BAD_REQUEST);
        }
        Worker worker1 = workerService.saveOrUpdateWorker(worker);
        return new ResponseEntity<Worker>(worker, HttpStatus.CREATED);
    }


}