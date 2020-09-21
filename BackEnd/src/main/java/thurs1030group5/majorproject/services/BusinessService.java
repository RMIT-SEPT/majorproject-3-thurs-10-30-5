package thurs1030group5.majorproject.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import thurs1030group5.majorproject.model.Business;
import thurs1030group5.majorproject.repository.BusinessRepository;

import java.util.List;

@Service
public class BusinessService {
    private final BusinessRepository businessRepository;

    @Autowired
    public BusinessService(BusinessRepository businessRepository) {
        this.businessRepository = businessRepository;
    }
//    Get all business objects in the database
    public List<Business> getAllBusinesses()
    {
        return businessRepository.findAll();
    }

// Get a specific business from the database based on a worker that works for it
    public Business getBusinessFromWorkerId(Long workerId) {
        return businessRepository.findBusinessByWorker_Id(workerId);
    }
}
