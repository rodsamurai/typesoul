// builder.js
// Handles dynamic dropdowns, UI logic, and build sharing for Type://Soul Builder

function rarityClass(rarity) {
  switch (rarity) {
    case 'common': return 'rarity rarity-common';
    case 'rare': return 'rarity rarity-rare';
    case 'legendary': return 'rarity rarity-legendary';
    case 'mythic': return 'rarity rarity-mythic';
    default: return 'rarity';
  }
}

function createOption(item) {
  let percent = item.percent ? ` (${item.percent}%)` : '';
  let desc = item.desc ? `<span class='desc-hover'> ℹ <span class='desc-popup'>${item.desc}</span></span>` : '';
  return `<option value="${item.name}">${item.name}${percent}</option>`;
}

function fillDropdown(id, items, label, extra = "") {
  if (!items || !items.length) return '';
  let html = `<label for="${id}">${label}</label><select id="${id}" name="${id}"><option value="">Select ${label}</option>`;
  for (const item of items) {
    html += createOption(item);
  }
  html += '</select>' + (extra || '');
  return html;
}

function showSection(id, html) {
  const el = document.getElementById(id);
  if (html) {
    el.innerHTML = html;
    el.style.display = '';
  } else {
    el.innerHTML = '';
    el.style.display = 'none';
  }
}

function onRaceChange() {
  const race = document.getElementById('race').value;
  const raceData = DATA.races.find(r => r.name.toLowerCase() === race);
  // Clan
  showSection('clan-section', fillDropdown('clan', raceData?.clans, 'Clan'));
  // Weapon
  showSection('weapon-section', fillDropdown('weapon', raceData?.weapons, 'Weapon'));
  // Transformation (Shikai/Bankai, Resurrection/Segunda, Vollstandig)
  let transHtml = '';
  if (race === 'shinigami') {
    transHtml += fillDropdown('shikai', raceData.shikais, 'Shikai');
    transHtml += '<br/>';
    transHtml += '<label>Bankai: <input type="checkbox" id="bankai" name="bankai"></label>';
  } else if (race === 'hollow') {
    transHtml += fillDropdown('resurrection', raceData.resurrections, 'Resurrection');
    transHtml += '<br/>';
    transHtml += '<label>Segunda: <input type="checkbox" id="segunda" name="segunda"></label>';
  } else if (race === 'quincy') {
    transHtml += fillDropdown('vollstandig', [{name:'Vollständig',rarity:'legendary'}], 'Vollständig');
  }
  showSection('transformation-section', transHtml);
  // Cybernetics for Quincy
  if (race === 'quincy') {
    showSection('cybernetic-section', fillDropdown('cybernetic', raceData.cybernetics?.map(c=>({name:c})), 'Cybernetic'));
  } else {
    showSection('cybernetic-section', '');
  }
  // Skill trees
  document.getElementById('skill-section').innerHTML = fillSkillTreeSection();
  // Essences
  document.getElementById('essence-section').innerHTML = fillEssenceSection();
  // Transformations (extra, not main race transformation)
  document.getElementById('ultra-section').innerHTML = fillTransformationSection(race);
}

// Ensure DOM is loaded before attaching event listeners
function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  if (!window.DATA) {
    console.error('DATA is not defined! Check builder-data.js');
  }
  var raceEl = document.getElementById('race');
  if (raceEl) {
    raceEl.addEventListener('change', onRaceChange);
  } else {
    console.error('Race dropdown not found!');
  }
  // If build param in URL, load it
  const params = new URLSearchParams(location.search);
  if (params.has('build')) {
    const build = decodeBuild(params.get('build'));
    if (build) {
      for (const [k, v] of Object.entries(build)) {
        const el = document.getElementsByName(k)[0];
        if (el) {
          if (el.type === 'checkbox') el.checked = v;
          else el.value = v;
        }
      }
      onRaceChange();
    }
  }
  // Save/Share button
  var saveBtn = document.getElementById('save-btn');
  if (saveBtn) {
    saveBtn.onclick = function() {
      const code = encodeBuild();
      const url = `${location.origin}${location.pathname}?build=${code}`;
      const linkBox = document.getElementById('share-link');
      linkBox.textContent = url;
      linkBox.style.display = '';
    };
  }
});

// Save/Share build
function encodeBuild() {
  const form = document.getElementById('builder-form');
  const data = {};
  for (const el of form.elements) {
    if (el.name && (el.type !== 'checkbox' || el.checked)) {
      data[el.name] = el.value || (el.type === 'checkbox' ? el.checked : '');
    }
  }
  return btoa(encodeURIComponent(JSON.stringify(data)));
}

function decodeBuild(str) {
  try {
    return JSON.parse(decodeURIComponent(atob(str)));
  } catch {
    return null;
  }
}

// Add dynamic dropdowns for skill trees, skills, ultras, and transformations
function fillSkillTreeSection() {
  let html = '';
  if (!DATA.skillTrees) return html;
  for (const tree of DATA.skillTrees) {
    html += `<div class='section'><label>${tree.name}</label>`;
    if (tree.skills && tree.skills.length) {
      html += `<select name="${tree.name.replace(/\s+/g, '_').toLowerCase()}_skill">`;
      html += `<option value="">Select Skill</option>`;
      for (const skill of tree.skills) {
        html += `<option value="${skill.name}">${skill.name}${skill.desc ? ' ℹ' : ''}</option>`;
      }
      html += `</select>`;
    }
    if (tree.ultra) {
      html += `<div class='rarity rarity-mythic' style='margin-top:6px;'>Ultra: ${tree.ultra.name} (${tree.ultra.cost} SP)}`;
      if (tree.ultra.desc) html += ` <span class='desc-hover'>ℹ<span class='desc-popup'>${tree.ultra.desc}</span></span>`;
      html += `</div>`;
    }
    if (tree.ultras) {
      for (const ultra of tree.ultras) {
        html += `<div class='rarity rarity-mythic' style='margin-top:6px;'>Ultra: ${ultra.name} (${ultra.cost} SP)}`;
        if (ultra.desc) html += ` <span class='desc-hover'>ℹ<span class='desc-popup'>${ultra.desc}</span></span>`;
        html += `</div>`;
      }
    }
    html += `</div>`;
  }
  return html;
}

function fillEssenceSection() {
  let html = '';
  if (!DATA.essences) return html;
  html += `<label for='essence'>Essence</label><select id='essence' name='essence'><option value=''>Select Essence</option>`;
  for (const e of DATA.essences) {
    html += `<option value='${e.name}'>${e.name}</option>`;
  }
  html += `</select>`;
  return html;
}

function fillTransformationSection(race) {
  let html = '';
  if (!DATA.transformations) return html;
  const relevant = DATA.transformations.filter(t => t.race === race);
  if (relevant.length) {
    html += `<label for='transformation'>Transformation</label><select id='transformation' name='transformation'><option value=''>Select Transformation</option>`;
    for (const t of relevant) {
      html += `<option value='${t.name}'>${t.name}</option>`;
    }
    html += `</select>`;
  }
  return html;
}
