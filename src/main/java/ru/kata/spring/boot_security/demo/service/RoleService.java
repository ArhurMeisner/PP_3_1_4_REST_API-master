package ru.kata.spring.boot_security.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.kata.spring.boot_security.demo.model.Role;
import ru.kata.spring.boot_security.demo.repository.RoleRepository;

import java.util.List;
@Service
public class RoleService {

    public final RoleRepository repository;

    @Autowired
    public RoleService(RoleRepository repository) {
        this.repository = repository;
    }
    public List<Role> getAllRoles() {
        return repository.findAll();
    }

    public List<Role> getByName(String name) {
        return repository.findRoleByName(name);
    }
}
