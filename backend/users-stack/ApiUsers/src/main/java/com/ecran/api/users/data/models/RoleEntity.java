package com.ecran.api.users.data.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Collection;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="roles")
public class RoleEntity implements Serializable {
    private static final long serialVersionUID = 2907511651993292420L;

    @Id
    @GeneratedValue
    private Long id;


    private String name;

    @ManyToMany(mappedBy="roles")
    private Collection<UserEntity> users;

    @ManyToMany(cascade=CascadeType.PERSIST, fetch=FetchType.EAGER)
    @JoinTable(name="roles_authorities", joinColumns=@JoinColumn(name = "roles_id", referencedColumnName = "id"),
            inverseJoinColumns=@JoinColumn(name = "authorities_id", referencedColumnName = "id"))
    private Collection<AuthorityEntity> authorities;

    public RoleEntity(String name, Collection<AuthorityEntity> authorities) {
        this.name = name;
        this.authorities = authorities;
    }
}
