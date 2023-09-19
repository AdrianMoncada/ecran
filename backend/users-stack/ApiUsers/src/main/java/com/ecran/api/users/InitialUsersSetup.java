package com.ecran.api.users;

import com.ecran.api.users.data.models.AuthorityEntity;
import com.ecran.api.users.data.models.RoleEntity;
import com.ecran.api.users.data.models.UserEntity;
import com.ecran.api.users.data.repository.AuthorityRepository;
import com.ecran.api.users.data.repository.RoleRepository;
import com.ecran.api.users.data.repository.UsersRepository;
import com.ecran.api.users.shared.Roles;
import jakarta.persistence.Column;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import javax.management.relation.Role;
import java.util.Arrays;
import java.util.Collection;
import java.util.UUID;
    @Component
    public class InitialUsersSetup {

        @Autowired
        AuthorityRepository authorityRepository;

        @Autowired
        RoleRepository roleRepository;

        @Autowired
        BCryptPasswordEncoder bCryptPasswordEncoder;

        @Autowired
        UsersRepository usersRepository;

        @Transactional
        @EventListener
        public void onApplicationEvent(ApplicationReadyEvent event) {

            AuthorityEntity readAuthority = createAuthority("READ");
            AuthorityEntity writeAuthority = createAuthority("WRITE");
            AuthorityEntity deleteAuthority = createAuthority("DELETE");

//            createRole(Roles.ROLE_USER.name(), Arrays.asList(readAuthority, writeAuthority));
            RoleEntity roleAdmin = createRole(Roles.ROLE_ADMIN.name(), Arrays.asList(readAuthority, writeAuthority, deleteAuthority));

            if (roleAdmin == null) return;

            UserEntity adminUser = new UserEntity();
            adminUser.setFirstName("Admin");
            adminUser.setLastName("El Administrador");
            adminUser.setEmail("admin@ecran.com");
            adminUser.setUserId(UUID.randomUUID().toString());
            adminUser.setEncryptedPassword(bCryptPasswordEncoder.encode("admin"));
            adminUser.setRoles(Arrays.asList(roleAdmin));
            adminUser.setEnabled(true);

            UserEntity storedAdminUser = usersRepository.findByEmail("admin@ecran.com");

            if (storedAdminUser == null) {
                usersRepository.save(adminUser);
            }

        }

        @Transactional
        private AuthorityEntity createAuthority(String name) {

            AuthorityEntity authority = authorityRepository.findByName(name);

            if (authority == null) {
                authority = new AuthorityEntity(name);
                authorityRepository.save(authority);
            }

            return authority;
        }

        @Transactional
        private RoleEntity createRole(String name, Collection<AuthorityEntity> authorities) {

            RoleEntity role = roleRepository.findByName(name);

            if (role == null) {
                role = new RoleEntity(name, authorities);
                roleRepository.save(role);
            }

            return role;

        }
    }