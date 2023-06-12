package com.NCG.passwordGenerator;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface passKeyRepository extends CrudRepository<passKey,Long> {
}