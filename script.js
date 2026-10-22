document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? '×' : '☰';
    });
  }
  document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());
  const form = document.getElementById('enquiry');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const data = new FormData(form);
      const fields = [
        ['Full name', data.get('name')],
        ['Phone', data.get('phone')],
        ['Email', data.get('email')],
        ['Preferred city/location', data.get('city')],
        ['Investment budget', data.get('budget') || 'Not specified'],
        ['Experience', data.get('experience') || 'Not specified'],
        ['Message', data.get('message') || 'Not provided']
      ];
      const body = fields.map(([label, value]) => label + ': ' + value).join('\n');
      const subject = encodeURIComponent('Healthy Hippo Franchise Enquiry — ' + data.get('name'));
      const mailBody = encodeURIComponent(body + '\n\nConsent to be contacted: Yes');
      document.getElementById('form-status').textContent = 'Opening your email app with the enquiry details. Please review and press Send to submit it.';
      window.location.href = 'mailto:healthyhippo.kochi@gmail.com?subject=' + subject + '&body=' + mailBody;
    });
  }
});