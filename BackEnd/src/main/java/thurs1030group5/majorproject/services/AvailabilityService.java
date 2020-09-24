package thurs1030group5.majorproject.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import thurs1030group5.majorproject.model.Availability;
import thurs1030group5.majorproject.repository.AvailabilityRepository;

@Service
public class AvailabilityService {
    private final AvailabilityRepository availabilityRepository;

    @Autowired
    public AvailabilityService(AvailabilityRepository availabilityRepository){
        this.availabilityRepository = availabilityRepository;
    }

    public Availability getAvailabilityById(Long id){
        return availabilityRepository.findAvailabilityById(id);
    }
}
