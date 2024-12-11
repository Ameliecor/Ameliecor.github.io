// Load the JSON file and parse the questions
fetch('questions_answer_qwen.json')
  .then(response => response.json())
  .then(data => {
    const questionSelect = document.getElementById('questionSelect');

    // Populate the dropdown with questions
    data.forEach((item, index) => {
      const option = document.createElement('option');
      option.value = index; // Use the index as the value for each option
      option.textContent = item.question;
      questionSelect.appendChild(option);
    });

    // Add an event listener to show the answer when a question is selected
    questionSelect.addEventListener('change', function() {
      const selectedIndex = this.value;
      const answerDiv = document.getElementById('answer');
      
      // Clear previous answer
      answerDiv.textContent = '';

      // If a valid question is selected, show the answer
      if (selectedIndex !== '') {
        answerDiv.textContent = data[selectedIndex].answer;
      }
    });
  })
  .catch(error => {
    console.error('Error loading the JSON file:', error);
  });