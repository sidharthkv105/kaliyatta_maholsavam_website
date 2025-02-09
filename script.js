function showDetails(eventName) {
    let details = {
      hackathon: "Hackathon: Compete in a 24-hour coding marathon and win amazing prizes.",
      robotics: "Robotics Challenge: Bring your robots to life and take part in obstacle courses and races.",
      gaming: "Gaming Tournament: Join the biggest gaming tournament in town and battle it out for the grand prize."
    };
  
    document.getElementById("event-details").innerText = details[eventName];
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(header);
  });
  

  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollY = window.scrollY;
    header.style.transform = `translateY(${scrollY * -0.5}px)`; // Adjust -0.5 for faster or slower upward movement
  });


  function showModal(committeeName, members) {
  document.getElementById('modal-title').textContent = committeeName;
  
  const memberList = document.getElementById('modal-members');
  memberList.innerHTML = '';
  members.forEach(member => {
    const listItem = document.createElement('li');
    listItem.textContent = member;
    memberList.appendChild(listItem);
  });

  const modal = document.getElementById('committeeModal');
  modal.style.display = 'block';
  
  // Trigger animation by resetting and applying the animation again
  const modalContent = modal.querySelector('.modal-content');
  modalContent.style.animation = 'none';
  setTimeout(() => {
    modalContent.style.animation = '';
  }, 10);
}

function closeModal() {
  document.getElementById('committeeModal').style.display = 'none';
}

window.onclick = function(event) {
  if (event.target === document.getElementById('committeeModal')) {
    closeModal();
  }
}
