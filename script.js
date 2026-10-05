const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
if(menuBtn&&nav){menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.textContent=open?'×':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');menuBtn.textContent='☰'}));}
const progress=document.getElementById('scrollProgress');
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(h>0?(window.scrollY/h)*100:0)+'%';},{passive:true});
const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
const copyBtn=document.getElementById('copyEmail');
const toast=document.getElementById('toast');
if(copyBtn){copyBtn.addEventListener('click',async()=>{try{await navigator.clipboard.writeText('mzainulabdeen513@gmail.com');toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800)}catch(e){window.location.href='mailto:mzainulabdeen513@gmail.com'}})}
document.getElementById('year').textContent=new Date().getFullYear();
