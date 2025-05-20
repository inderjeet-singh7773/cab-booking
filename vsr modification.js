// Background Image Rotation
const backgrounds = [
    'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1920',
    'https://upload.wikimedia.org/wikipedia/commons/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg',
    'https://media.istockphoto.com/id/469793632/photo/birla-mandir-jaipur.jpg?s=612x612&w=0&k=20&c=oC1KyEpCLXVpPIzJVN4GtB-P9D8NOtyhJuS6dIi_BfQ=',
    'https://images.unsplash.com/photo-1627301517152-11505d049286?auto=format&fit=crop&q=80&w=1920'
  ];
  
  let currentBg = 0;
  const hero = document.getElementById('hero');
  
  setInterval(() => {
    currentBg = (currentBg + 1) % backgrounds.length;
    hero.style.backgroundImage = `url(${backgrounds[currentBg]})`;
  }, 5000);
  
  // Car Selection
  const carCards = document.querySelectorAll('.car-card');
  let selectedCar = 'honda';
  
  carCards.forEach(card => {
    card.addEventListener('click', () => {
      carCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedCar = card.dataset.car;
    });
  });
  
  // Promo Code Validation
  const validPromoCodes = {
    'FIRST10': 10,
    'SUMMER25': 25,
    'VSR2025': 15
  };
  
  const promoInput = document.querySelector('input[name="promoCode"]');
  const promoMessage = document.getElementById('promoMessage');
  let promoDiscount = 0;
  
  promoInput.addEventListener('input', (e) => {
    const code = e.target.value.toUpperCase();
    if (!code) {
      promoDiscount = 0;
      promoMessage.textContent = '';
      promoMessage.className = '';
      return;
    }
  
    const discount = validPromoCodes[code];
    if (discount) {
      promoDiscount = discount;
      promoMessage.textContent = `${discount}% discount applied!`;
      promoMessage.className = 'promo-message success';
    } else {
      promoDiscount = 0;
      promoMessage.textContent = 'Invalid promo code';
      promoMessage.className = 'promo-message error';
    }
  });
  
  // Form Submission
  const form = document.getElementById('cabBookingForm');
  const modal = document.getElementById('confirmationModal');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const bookingData = Object.fromEntries(formData.entries());
    
    // Here you would typically send the data to a server
    console.log('Booking Data:', bookingData);
    
    // Show confirmation modal
    modal.style.display = 'flex';
  });
  
  // Close Modal
  function closeModal() {
    modal.style.display = 'none';
  }
  
  // Close modal when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Calculate Price
  function calculatePrice(basePrice) {
    return basePrice - (basePrice * (promoDiscount / 100));
  }