package thurs1030group5.majorproject.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import thurs1030group5.majorproject.model.users.Admin;
import thurs1030group5.majorproject.repository.AdminRepository;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    public Admin saveOrUpdateAdmin(Admin admin) {

        return adminRepository.save(admin);
    }
}
