const menu=document.getElementById('menu'), nav=document.getElementById('navLinks');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

const answers={
  project:"Sarvesh works across portfolio websites, business websites, Python projects, and AI/data science projects.",
  python:"Python is one of Sarvesh's core development skills, used for applications, automation and AI/data exploration.",
  web:"Sarvesh works with HTML, CSS and JavaScript to create responsive, modern web experiences.",
  ai:"Sarvesh is exploring AI and data science, including analytics, machine-learning concepts and AI-powered experiences.",
  course:"Completed courses include Python, Web Development, Data Analytics and C Language.",
  contact:"You can reach Sarvesh at sarveshbhatambrekar3@gmail.com, or connect through LinkedIn and GitHub below."
};
function ask(){
 const q=document.getElementById('question').value.toLowerCase();
 let key=Object.keys(answers).find(k=>q.includes(k));
 if(q.includes('work')||q.includes('build')) key='project';
 document.getElementById('answer').textContent=key?answers[key]:"I can help you explore Sarvesh's projects, Python, web development, AI/data science, courses or contact details.";
}
document.getElementById('ask').addEventListener('click',ask);
document.getElementById('question').addEventListener('keydown',e=>{if(e.key==='Enter')ask()});

const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
