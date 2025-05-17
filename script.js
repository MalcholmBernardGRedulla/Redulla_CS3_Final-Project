

document.addEventListener("DOMContentLoaded", () => {
    const quizForm = document.getElementById("quizForm");
    if (quizForm) {
      quizForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const correctAnswers = {
          q1: "b",
          q2: "a",
          q3: "a",
          q4: "b",
          q5: "a",
          q6: "b",
          q7: "c",
          q8: "b",
          q9: "a",
          q10: "b"
        };
  
        let score = 0;
        for (let q in correctAnswers) {
          const userAnswer = quizForm.elements[q].value;
          if (userAnswer === correctAnswers[q]) {
            score++;
          }
        }
  
        const resultText = document.getElementById("result");
        resultText.textContent = `You scored ${score}/10. ${score >= 7 ? "Great job!" : "Keep learning!"}`;
      });
    }
  
    const faders = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.1 });
  
    faders.forEach(fader => observer.observe(fader));
  });
  