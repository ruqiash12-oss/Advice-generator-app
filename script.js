const button = document.querySelector('.dice-button');
const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');

const savedAdvice = localStorage.getItem('advice');
if (savedAdvice) {
  const advice = JSON.parse(savedAdvice);
  adviceId.textContent = `Advice #${advice.id}`;
  adviceText.textContent = `"${advice.advice}"`;
}
button.addEventListener('click', () => {
  showLoading();
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      adviceId.textContent = `Advice #${data.slip.id}`;
      adviceText.textContent = `"${data.slip.advice}"`;
      localStorage.setItem('advice', JSON.stringify(data.slip));
    })
    .catch(error => {
      console.error('Error fetching advice:', error);
    })
    .finally(() => {
      hideLoading();
    });
});
function showLoading() {
    const loadingOverlay = document.getElementById('current-loading');
    if (loadingOverlay) {
      loadingOverlay.classList.remove('hidden');
      
    } 
  }
function hideLoading() {
    const loadingOverlay = document.getElementById('current-loading');
    if (loadingOverlay) {
      loadingOverlay.classList.add('hidden');
    }
  }