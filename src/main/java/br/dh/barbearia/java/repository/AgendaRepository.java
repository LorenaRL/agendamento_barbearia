package br.dh.barbearia.java.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.dh.barbearia.java.entity.Agenda;

@Repository
public interface AgendaRepository extends JpaRepository<Agenda, Long>{
	
	List<Agenda> findByChaveDeCancelamento(String chaveDeCancelamento);
	
	List<Agenda> findAll();
	
	List<Agenda> findByDataAndHoraAndFuncionario(String data,Integer hora, String funcionario);
}
