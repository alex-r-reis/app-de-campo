// src/data/tecnicos.js
import { visitasPadrao } from './appConfig.js';

const TECNICOS = [
  { id: 't1', nome: 'Alessandro Figueiredo Miranda', registro: 'ATEC-1001', regiao: 'Igarapé-Miri' },
  { id: 't2', nome: 'Alexsandro Lima De Sousa Junior', registro: 'ATEC-1002', regiao: 'Altamira / Medicilândia' },
  { id: 't3', nome: 'Geraldo Magela Andrade Rodrigues Junior', registro: 'ATEC-1003', regiao: 'Altamira / Medicilândia / Brasil Novo' },
  { id: 't4', nome: 'Marcelo Rodrigues Lima Filho', registro: 'ATEC-1004', regiao: 'Igarapé-Miri' },
  { id: 't5', nome: 'Paulo André Miranda Moreira', registro: 'ATEC-1005', regiao: 'Brasil Novo / Altamira' },
  { id: 't6', nome: 'Valdemir Ferreira Lima', registro: 'ATEC-1006', regiao: 'São Félix do Xingu' },
  { id: 't7', nome: 'Wellington Rodrigues Carneiro', registro: 'ATEC-1007', regiao: 'Igarapé-Miri' },
  { id: 't8', nome: 'Wellington Varela de Fraga', registro: 'ATEC-1008', regiao: 'Brasil Novo / Altamira' },
  { id: 't9', nome: 'Whalif Silva de Freitas', registro: 'ATEC-1009', regiao: 'São Félix do Xingu' },
  { id: 't10', nome: 'Carlos Eduardo Nunes Leal', registro: 'ATEC-1010', regiao: 'Tucumã' },
  { id: 't11', nome: 'Cristiane da Silva Morais', registro: 'ATEC-1011', regiao: 'Brasil Novo' },
  { id: 't12', nome: 'Deborah da Silva Araújo', registro: 'ATEC-1012', regiao: 'Brasil Novo' },
  { id: 't13', nome: 'Francisco Romildo Xavier Idelfonso', registro: 'ATEC-1013', regiao: 'Tucumã' },
  { id: 't14', nome: 'Kheiliany Luara Souza Barbosa', registro: 'ATEC-1014', regiao: 'Tucumã' },
  { id: 't15', nome: 'Lucas Morais Silva', registro: 'ATEC-1015', regiao: 'Tucumã' },
  { id: 't16', nome: 'Pablo Henrique Schmidt Amaral', registro: 'ATEC-1016', regiao: 'Tucumã' },
];

const TECNICOS_POR_CONTRATO = {
  cacau_i: ['t1', 't2', 't3', 't4', 't6', 't7', 't8', 't9'],
  cacau_ii: ['t10', 't11', 't12', 't13', 't14', 't15', 't16'],
};

const VISITAS_PADRAO = visitasPadrao();

function normalizarSenha(valor) {
  return String(valor || '').trim().toUpperCase();
}

function validarSenhaTecnico(tecnico, senha) {
  if (!tecnico) return false;
  return normalizarSenha(senha) === normalizarSenha(tecnico.registro);
}

function tecnicosPorContrato(variant) {
  const ids = TECNICOS_POR_CONTRATO[variant] || [];
  return TECNICOS.filter((tecnico) => ids.includes(tecnico.id));
}

function tecnicoPorId(id, variant) {
  return tecnicosPorContrato(variant).find((tecnico) => tecnico.id === id);
}

export { TECNICOS, VISITAS_PADRAO, validarSenhaTecnico, tecnicosPorContrato, tecnicoPorId };
