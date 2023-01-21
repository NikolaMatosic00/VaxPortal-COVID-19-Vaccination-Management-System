package com.matosic.euprava.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.matosic.euprava.models.Vest;

@Repository
public interface VestRepository extends JpaRepository<Vest, Integer> {
	public List<Vest> findAllByOrderByDatumVremeObjavljivanjaDesc();
}
