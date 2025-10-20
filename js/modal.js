// Функция для открытия PDF в новой вкладке
function openPdf(pdfUrl) {
  window.open(pdfUrl, '_blank');
}

function closeModal() {
  const modal = document.getElementById('certificateModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Закрытие по клику вне изображения
document.getElementById('certificateModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// Закрытие по ESC
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});