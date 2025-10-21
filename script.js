const roadmapData = {
    "Web Development": [
        "Learn HTML & CSS basics",
        "Understand JavaScript fundamentals",
        "Build mini projects (Portfolio, To-Do List)",
        "Learn a frontend framework (React, Vue)",
        "Explore backend basics (Node.js, Express)",
        "Deploy projects on platforms (Netlify, Vercel)"
    ],
    "AI / Machine Learning": [
        "Learn Python fundamentals",
        "Understand math basics (Linear Algebra, Stats)",
        "Learn NumPy & Pandas",
        "Study machine learning models",
        "Build ML projects using Scikit-learn",
        "Explore Deep Learning (TensorFlow / PyTorch)"
    ],
    "Cybersecurity": [
        "Learn networking fundamentals",
        "Understand Linux commands",
        "Study vulnerability scanning tools",
        "Learn ethical hacking basics",
        "Practice using CTF platforms",
        "Explore certifications (CEH, CompTIA)"
    ]
};

const careerSelect = document.getElementById('career-path');
const generateButton = document.getElementById('generate-btn');
const roadmapOutput = document.getElementById('roadmap-output');

generateButton.addEventListener('click', function() {

    const selectedPath = careerSelect.value;

    roadmapOutput.innerHTML = '';

    if (selectedPath === "") {
        roadmapOutput.innerHTML = "<p>Please select a career path.</p>";
        return; // Stops further execution
    }

    const steps = roadmapData[selectedPath];

    const ul = document.createElement('ul');

    steps.forEach(function(step) {
        const li = document.createElement('li');
        li.textContent = step;
        ul.appendChild(li);
    });

    // Step 10: Add the generated list to the output div
    roadmapOutput.appendChild(ul);
});
