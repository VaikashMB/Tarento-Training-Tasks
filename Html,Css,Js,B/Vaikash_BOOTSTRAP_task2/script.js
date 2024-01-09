


document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
  
    
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
  
    
    if (isDarkMode) {
      body.classList.add('dark-mode');
    }
  
    darkModeToggle.addEventListener('click', () => {
      
      body.classList.toggle('dark-mode');
  
      
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        document.getElementById("darkModalAdded").classList.add("darkModal");
        document.getElementById("darkModalRemoved").classList.add("darkModal");
        document.getElementById("darkModalConfirmed").classList.add("darkModal");
        document.getElementById("darkModalPlaced").classList.add("darkModal");
        
      } else {
        localStorage.setItem('darkMode', 'disabled');
        document.getElementById("darkModalAdded").classList.remove("darkModal");
        document.getElementById("darkModalRemoved").classList.remove("darkModal");
        document.getElementById("darkModalConfirmed").classList.remove("darkModal");
        document.getElementById("darkModalPlaced").classList.remove("darkModal");
      }
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
  
    darkModeToggle.addEventListener('click', function () {
      
      if (darkModeToggle.innerHTML === 'Dark-Mode') {
        darkModeToggle.innerHTML = 'Light-Mode';
      } else {
        darkModeToggle.innerHTML = 'Dark-Mode';
      }
    });
  });
  
  
