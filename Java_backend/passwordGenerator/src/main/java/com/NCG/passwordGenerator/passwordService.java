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
//this method gets all posted password (there will only be one since passwords are deleted with every post request) 
public List<passKey> getAllPasswords()   
{  
List<passKey> passkeys = new ArrayList<passKey>();  
repository.findAll().forEach(passKey -> passkeys.add(passKey));  
return passkeys;  
}  
public void savePass(passKey pass) { //this method saves password to repo
    repository.save(pass);
}
public void clearPass() { //clears password
    repository.deleteAll();
}
}  