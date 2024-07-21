import { ABOUT_ME, JOURNEY, SKILLS_LIST, PROJECT_LIST , INFO , EXPERIENCE_LIST, EXPERIENCE_LIST2} from './variables.js';
import { createArticleWithList, createArticleWithText, positionTooltip } from './function.js';

document.querySelector('.main-title').innerHTML = `${INFO.nome}`;
document.querySelector('.sub-title').innerHTML = `${INFO.profissao}`;
document.querySelector('footer span').innerHTML = `${INFO.nome}, 2024 - Todos os direitos reservados.`;

createArticleWithText('.about-me', 'Sobre Mim', ABOUT_ME);
createArticleWithText('.professional-journey', 'Jornada Profissional', JOURNEY);
createArticleWithList('.skills', 'Habilidades', SKILLS_LIST);
createArticleWithList('.skills', 'Experiencia Profissional', EXPERIENCE_LIST);
createArticleWithList('.skills', 'Certificações ', EXPERIENCE_LIST2);
createArticleWithList('.projects', 'Projetos', PROJECT_LIST);

// Adiciona o comportamento ao passar o mouse sobre o elemento "Sobre Mim"
const aboutMeSection = document.querySelector('.about-me');
const tooltip = document.getElementById('tooltip');

aboutMeSection.addEventListener('mouseover', () => {
  tooltip.style.display = 'block';
  tooltip.innerHTML = `Idade: ${INFO.idade} anos, Cidade: ${INFO.cidade}-${INFO.estado}, Email: ${INFO.email}, Cel: ${INFO.telefone}`;
});

aboutMeSection.addEventListener('mousemove', (event) => {
  positionTooltip(event);
});

aboutMeSection.addEventListener('mouseout', () => {
  tooltip.style.display = 'none';
});

