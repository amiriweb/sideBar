const btn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
btn.addEventListener('click',function() {
  sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click',function() {
  if (sidebar.classList.contains("show-sidebar")) {
      sidebar.classList.remove("show-sidebar");
  }
});
