const username = "Niranjan2257";
const apiUrl = `https://api.github.com/users/${username}`;

// Fetch user profile data
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const profileElement = document.getElementById("profile");

    // Create profile HTML
    const profileHTML = `
      <img src="${data.avatar_url}" alt="Profile Picture" width="100" height="100">
      <h2>${data.name}</h2>
      <p>${data.login}</p>
      <p>${data.bio}</p>
      <p>Followers: ${data.followers}</p>
      <p>Following: ${data.following}</p>
      <p>Public Repositories: ${data.public_repos}</p>
    `;

    profileElement.innerHTML = profileHTML;
  })
  .catch(error => {
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = "Error fetching profile data.";

    const profileElement = document.getElementById("profile");
    profileElement.appendChild(errorMessage);
    console.error(error);
  });

// Fetch user repositories
fetch(`${apiUrl}/repos`)
  .then(response => response.json())
  .then(data => {
    const repositoriesElement = document.getElementById("repositories");

    // Create repositories HTML
    let repositoriesHTML = "";
    data.forEach(repository => {
      repositoriesHTML += `
        <div class="repository">
          <h2>${repository.name}</h2>
          <p>${repository.description}</p>
          <p>Language: ${repository.language}</p>
          <p>Stars: ${repository.stargazers_count}</p>
          <p>Contributions: ${repository.contributions}</p>
        </div>
      `;
    });

    repositoriesElement.innerHTML = repositoriesHTML;
  })
  .catch(error => {
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = "Error fetching repositories.";

    const repositoriesElement = document.getElementById("repositories");
    repositoriesElement.appendChild(errorMessage);
    console.error(error);
  });
