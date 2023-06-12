package com.NCG.passwordGenerator;
import java.util.ArrayList;  
import java.util.List;  
import org.springframework.beans.factory.annotation.Autowired;  
import org.springframework.stereotype.Service;   
@Service  
public class passwordService   
{  
@Autowired  
passKeyRepository repository;  
//getting all student records  
public List<passKey> getAllPasswords()   
{  
List<passKey> passkeys = new ArrayList<passKey>();  
repository.findAll().forEach(passKey -> passkeys.add(passKey));  
return passkeys;  
}  
public void savePass(passKey pass) {
    repository.save(pass);
}
public void clearPass() {
    repository.deleteAll();
}
}  