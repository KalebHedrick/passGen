package com.NCG.passwordGenerator;
import java.util.*;
import java.util.Scanner;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.core.io.ClassPathResource;
@Entity
@Table(name = "passKey")
public class passKey {
  private @Id @GeneratedValue Long id;
  @Column
  private int passLength; //number of words in password
  private String password; //private password string

  public passKey() throws IOException {
    this.passLength = 4;
    this.password = this.generate();
  }

  public passKey(int words) throws IOException { //constructor for passKey object
    this.passLength = words;
    this.password = this.generate();
  }

public String generate() throws IOException { //calls private password function and generate key
  return this.makeKey();
}

private String makeKey() throws IOException { //generates a new password and sets instance variable
  InputStream is = new ClassPathResource("/words.txt").getInputStream();
    String pass = "";
    try {
        File dictionary = convertInputStreamtoFile(is);
        Scanner myReader = new Scanner(dictionary);
        int lines = 0;
        while (myReader.hasNextLine()) {
            lines++;
            myReader.nextLine();
          }
    for(int i =0; i < passLength; i++) {
        myReader = new Scanner(dictionary);
        Random ran = new Random();
        int index = ran.nextInt(lines);
        while(index != 0) {
            index--;
            myReader.nextLine();
        }
        String word = myReader.nextLine();
        pass += word + " ";
    }
      myReader.close();
      dictionary.delete();
    }catch (FileNotFoundException e) {
      System.out.println("An error occurred, password could not be made.\n");
      e.printStackTrace();
    }
    this.password =  pass.substring(0, pass.length());
    return this.password;
}
private File convertInputStreamtoFile(InputStream is) throws IOException{
  File file = new File("tempwords.txt");
  try (FileOutputStream outputStream = new FileOutputStream(file, false)) {
    int read;
    byte[] bytes = new byte[8192];
    while ((read = is.read(bytes)) != -1) {
        outputStream.write(bytes, 0, read);
    }
}
  return file;
}
public void setpassLength(int words) { //setter for password length
  this.passLength = words;
}

public int getpassLength() { //getter for password length
  return this.passLength;
}

public String getpassword() {
    return this.password;
}

public Long getId() {
  return id;
}

public void setId(Long id) {
  this.id = id;
}
}