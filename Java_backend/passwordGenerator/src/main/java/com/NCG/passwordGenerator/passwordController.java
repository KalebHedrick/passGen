package com.NCG.passwordGenerator;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;  
import org.springframework.web.bind.annotation.PostMapping;  
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;   
//creating RestController  
@RestController  
public class passwordController   
{  
@Autowired  
passwordService passwordObj;     
@RequestMapping(value = "/", method = RequestMethod.GET) 
private List<passKey> getAllPasswords()   
{ 
    List<passKey> k = passwordObj.getAllPasswords();
    
return k;  
}  
@PostMapping("/passKey") 
private long savePassword(@RequestBody passKey passs) throws IOException   
{  
    passKey pass = new passKey(passs.getpassLength());
    passwordObj.clearPass();
passwordObj.savePass(pass);  
return pass.getId(); 
}

}  