new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    //pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
     // Responsive Breakpoint
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      },
    }
  
  });

  //      ~~~~~~   Service Script         ~~~~~~~                //

  document.addEventListener('DOMContentLoaded', function() {
  const serviceContent = document.getElementById('serviceContent');
  const services = document.querySelectorAll('.serviceType div');

  // Load the last selected service from localStorage
  const lastSelectedService = localStorage.getItem('selectedService') || 'enfants'; // Set default to 'enfants'

  updateServiceContent(lastSelectedService);
  highlightSelection(lastSelectedService);

  services.forEach(service => {
    service.addEventListener('click', function() {
      const serviceType = this.classList[0]; // Get the first class as the service type
      updateServiceContent(serviceType);
      highlightSelection(serviceType);
      localStorage.setItem('selectedService', serviceType);
    });
  });

  function updateServiceContent(serviceType) {
    let content = '';
    switch (serviceType) {
      case 'enfants':
        content = `
          <span class="service-title">Services aux enfants</span>
          <p>Nos services sont conçus pour soutenir le développement harmonieux de votre enfant en lui offrant des interventions personnalisées et les outils nécessaires à son bien-être. Notre objectif est d’accompagner chaque enfant de manière bienveillante, tout en respectant son rythme.</p>
          <ul class="service-list">
            <li>Soutien à l’intégration</li>
            <li>Stimulation du langage</li>
            <li>Stimulation précoce</li>
            <li>Animation sur les habiletés sociales</li>
            <li>Outils pédagogiques adaptés</li>
          </ul>
          <p>Nos rencontres se déroulent selon vos besoins et vos préférences : à votre domicile, en ligne, ou directement dans le milieu de garde ou scolaire de votre enfant. Nous intervenons dans la région de Montréal, incluant la Montérégie et la Rive-Nord.</p>
        `;
        break;
      case 'parents':
        content = `
          <span class="service-title">Services aux parents</span>
          <p>Notre objectif est de vous fournir les outils, ressources et conseils nécessaires pour renforcer votre confiance et vous aider à surmonter les défis de la parentalité. Nous vous accompagnons en respectant vos besoins et votre rythme</p>
          <ul>
            <li>Coaching parental</li>
            <li>Planification et suivi des routines familiales</li>
            <li>Soutien en période de transitions</li>
            <li>Ateliers et formations pédagogiques</li>
            <li>Outils pédagogiques adaptés</li>
          </ul>
          <p>Nos rencontres se déroulent selon vos besoins et vos préférences : à votre domicile, en ligne, ou directement dans le milieu de garde ou scolaire de votre enfant. Nous intervenons dans la région de Montréal, incluant la Montérégie et la Rive-Nord.</p>
        `;
        break;
      case 'travailleurs':
        content = `
          <span class="service-title">Services aux milieux de garde & organismes </span>
          <p>Nous avons pour objectif de vous offrir les ressources adaptées à vos besoins spécifiques, afin de maximiser l'efficacité de vos actions et leur impact.</p>
          <ul>
            <li>Soutien pédagogique pour renforcer les compétences de votre équipe</li>
            <li>Atelier et formation pédagogique</li>
            <li>Animation de groupe</li>
            <li>Soutien dans vos initiatives éducatives</li>
            <li>Outils pédagogiques adaptés</li>
          </ul>
          <p>Nos rencontres se déroulent selon vos besoins et vos préférences : à votre domicile, en ligne, ou directement dans le milieu de garde ou scolaire de votre enfant. Nous intervenons dans la région de Montréal, incluant la Montérégie et la Rive-Nord.</p>
        `;
        break;
      default:
        content = `<span class="service-title">Services aux milieux de garde & organismes </span>
          <p>Nous avons pour objectif de vous offrir les ressources adaptées à vos besoins spécifiques, afin de maximiser l'efficacité de vos actions et leur impact.</p>
          <ul>
            <li>Soutien pédagogique pour renforcer les compétences de votre équipe</li>
            <li>Atelier et formation pédagogique</li>
            <li>Animation de groupe</li>
            <li>Soutien dans vos initiatives éducatives</li>
            <li>Outils pédagogiques adaptés</li>
          </ul>
          <p>Nos rencontres se déroulent selon vos besoins et vos préférences : à votre domicile, en ligne, ou directement dans le milieu de garde ou scolaire de votre enfant. Nous intervenons dans la région de Montréal, incluant la Montérégie et la Rive-Nord.</p>`;
    }
    serviceContent.innerHTML = content;
  }

  function highlightSelection(serviceType) {
    services.forEach(service => {
      if (service.classList.contains(serviceType)) {
        service.classList.add('selected');
      } else {
        service.classList.remove('selected');
      }
    });
  }
});


  document.addEventListener('DOMContentLoaded', function() {
  // Array of commitments
  const commitments = [
    "Cette première rencontre, réalisée en visioconférence pour plus de flexibilité, nous permet de bien comprendre vos besoins,d’évaluer les services que nous pouvons offrir et de répondre à vos questions. Si nous convenons ensemble de poursuivre, nous procédons à l’ouverture du dossier.",
    "L’éducateur spécialisé observe l’enfant dans son environnement habituel afin de recueillir des informations clés, repérer les problématiques et poser des hypothèses. Cette étape est essentielle pour cibler les besoins et préparer un accompagnement adapté.",
    "En collaboration avec vous, et le cas échéant, les autres professionnels impliqués, nous partageons nos observations, priorisons les besoins et définissons ensemble les objectifs. Ces éléments sont formalisés dans un plan d’accompagnement personnalisé.",
    "Nous mettons en œuvre les moyens définis et travaillons sur les objectifs fixés. Les suivis permettent également d’évaluer les progrès, d’ajuster les interventions et, si nécessaire, de réviser le plan. Ces rencontres peuvent se faire en présentiel ou en ligne, selon ce qui convient le mieux à votre situation.",
  
  ];
  const commitTitle = [
    "Consultation d’orientation (en visioconférence)",
    "Rencontre d’observation",
    "Élaboration du plan d’accompagnement",
    "Suivis réguliers",
  ];

  // Get DOM elements
  const commitmentText = document.getElementById('commitment-text');
  const commitmentTitle = document.getElementById('commitment-title');
  const backArrow = document.getElementById('back-arrow');
  const forwardArrow = document.getElementById('forward-arrow');

  // Track the current index
  let currentIndex = 0;

  // Function to update the displayed commitment
  function updateCommitment() {
    commitmentText.textContent = commitments[currentIndex];
  }
  function titleUpdate() {
    commitmentTitle.textContent = commitTitle[currentIndex];
  }

  // Initial content display
  titleUpdate();
  updateCommitment();

  // Back arrow click event
  backArrow.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--; // Move to the previous commitment
    } else {
      currentIndex = commitments.length - 1; // Loop to the last commitment
    }
    titleUpdate();
    updateCommitment();
  });

  // Forward arrow click event
  forwardArrow.addEventListener('click', function() {
    if (currentIndex < commitments.length - 1) {
      currentIndex++; // Move to the next commitment
    } else {
      currentIndex = 0; // Loop to the first commitment
    }
    titleUpdate();
    updateCommitment();
  });
});

  document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".serviceType");
  const leftButton = document.querySelector(".scroll-left");
  const rightButton = document.querySelector(".scroll-right");

  function checkScroll() {
    const isSmallScreen = window.innerWidth <= 768; // Adjust for small screens
    const needsScroll = container.scrollWidth > container.clientWidth;

    if (isSmallScreen && needsScroll) {
      leftButton.style.display = "block";
      rightButton.style.display = "block";
    } else {
      leftButton.style.display = "none";
      rightButton.style.display = "none";
    }

    // Hide left button if at the beginning
    leftButton.style.opacity = container.scrollLeft === 0 ? "0.5" : "1";

    // Hide right button if at the end
    rightButton.style.opacity =
      container.scrollLeft + container.clientWidth >= container.scrollWidth
        ? "0.5"
        : "1";
  }

  leftButton.addEventListener("click", function () {
    container.scrollBy({ left: -200, behavior: "smooth" });
  });

  rightButton.addEventListener("click", function () {
    container.scrollBy({ left: 200, behavior: "smooth" });
  });

  // Check on scroll & resize
  container.addEventListener("scroll", checkScroll);
  window.addEventListener("resize", checkScroll);

  // Initial check
  checkScroll();
});



  //    ~~~~~~  Service Script         ~~~~~~~~                   //