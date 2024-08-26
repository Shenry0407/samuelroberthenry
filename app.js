function toggleArticle(articleId) {
    var article = document.getElementById(articleId);
    if (article.style.display === "block") {
        article.style.display = "none";
    } else {
        article.style.display = "block";
    }
}

function toggleReadMore(button) {
    // Get the parent article
    var article = button.closest('article');
    // Find the hidden text within this article
    var hiddenText = article.querySelector('.hidden');
    
    if (hiddenText) {
        if (hiddenText.classList.contains('hidden')) {
            hiddenText.classList.remove('hidden'); // Show the hidden text
            button.textContent = "Show Less"; // Change button text
        } else {
            hiddenText.classList.add('hidden'); // Hide the text again
            button.textContent = "Read More"; // Change button text
        }
    }
}
function showSection(sectionId) {
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    var activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // Close all widgets when switching to the "Travel Entries" section
    if (sectionId === 'travel') {
        var articles = document.querySelectorAll('.portfolio__item');
        articles.forEach(function(article) {
            article.style.display = "none"; // Ensure all articles are hidden by default
        });
    }
}
<a href="travelentries" onclick="navigateToTravelEntries()">Travel Entries</a>

function navigateToTravelEntries() {
    // Change the URL without reloading the page
    window.history.pushState({}, '', '/travelentries');

    // Add any additional logic to load your travel entries content here
    // For example, you might want to show the relevant section:
    document.getElementById('travel-entries-section').style.display = 'block';
    // Hide other sections if needed
}


