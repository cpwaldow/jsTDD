// Tagged Template

const city = 'São Paulo';
const something = 'Terra da garoa';
const otherthing = 'Farialimers';

function green(template, ...values) {
  return template.reduce(
    (acc, part, i) => `
      ${acc}
      <span class="green">${values[i - 1].toUpperCase()}</span>
      ${part}
    `,
  );
}

const brazil = green`Eu moro em ${city} a cidade da ${something} e ${otherthing}!`;

document.body.innerHTML = brazil;
