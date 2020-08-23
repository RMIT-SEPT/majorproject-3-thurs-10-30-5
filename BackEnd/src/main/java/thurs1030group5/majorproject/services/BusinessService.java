package thurs1030group5.majorproject.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import thurs1030group5.majorproject.model.Business;
import thurs1030group5.majorproject.repository.BusinessRepository;

import java.util.List;

@Service
public class BusinessService {
    private BusinessRepository businessRepository;

    @Autowired
    public BusinessService(BusinessRepository businessRepository) {
        this.businessRepository = businessRepository;
    }

    public List<Business> getAllBusinesses()
    {
        return businessRepository.findAll();
    }
}
