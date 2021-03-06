package br.dh.barbearia.java.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "categoria")
public class Categoria {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id_categoria")
	private Integer idCategoria;

	@Column(name = "nome", nullable = false)
	private String nome;

	public Categoria() {

	}

	public Categoria(Integer idCategoria, String nome) {
		this.idCategoria = idCategoria;
		this.nome = nome;
	}
}
