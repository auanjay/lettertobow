/* ══════════════════════════════════════
   ENVELOPE OPEN & LETTER REVEAL
══════════════════════════════════════ */

let editing = false;

function openEnvelope() {
  const btn  = document.getElementById('env-btn');
  const flap = document.getElementById('env-flap-svg');
  const seal = document.getElementById('env-seal-svg');

  btn.style.pointerEvents = 'none';

  /* seal pop */
  seal.style.transition = 'transform .5s ease';
  seal.style.transformOrigin = '170px 130px';
  seal.style.transform = 'scale(1.2)';
  setTimeout(() => { seal.style.transform = 'scale(1)'; }, 400);

  /* flap fold up via SVG transform */
  setTimeout(() => {
    flap.style.transition = 'transform .7s cubic-bezier(.4,0,.2,1)';
    flap.style.transformOrigin = '170px 0px';
    flap.style.transform = 'rotateX(180deg) scaleY(-1)';
    flap.setAttribute('fill', '#f4b8cc');
  }, 350);

  /* start audio */
  const audio = document.getElementById('audio');
  audio.volume = 0.2;
  audio.play().catch(() => {});

  /* fade out gate, show letter */
  setTimeout(() => { document.getElementById('gate').classList.add('out'); }, 900);

  setTimeout(() => {
    document.getElementById('gate').style.display = 'none';
    document.getElementById('letter-stage').classList.add('on');
    setTimeout(() => {
      document.getElementById('paper').classList.add('on');
      document.getElementById('edit-fab').classList.add('on');
    }, 200);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 1600);
}

/* ══════════════════════════════════════
   EDIT MODE
══════════════════════════════════════ */
function toggleEdit() {
  editing = !editing;

  document.querySelectorAll('[contenteditable]').forEach(el => {
    el.contentEditable = editing ? 'true' : 'false';
  });

  const fab = document.getElementById('edit-fab');
  fab.textContent    = editing ? '✓ เสร็จ' : '✎ แก้ไข';
  fab.style.background   = editing ? 'var(--rose)' : '';
  fab.style.color        = editing ? '#fff' : '';
  fab.style.borderColor  = editing ? 'var(--rose)' : '';
}
