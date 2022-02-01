// Get the GitHub username input form
const gitHubForm = document.getElementById('gitHubForm');

// Listen for submissions on GitHub username input form
gitHubForm.addEventListener('submit', (e) => {

    // Prevent default form submission action
    e.preventDefault();

    // Get the GitHub username input field on the DOM
    let usernameInput = document.getElementById('usernameInput');

    // Get the value of the GitHub username input field
    let gitHubUsername = usernameInput.value;

    // Run GitHub API function, passing in the GitHub username
    loadUserRepo(gitHubUsername);

})

/** Calling GIT API **/
let fetchUserRepos = async(userName) =>{
  const url = `https://api.github.com/users/${userName}/repos`;
  const response = await fetch(url);
  if (response.status !== 200) {
    throw new Error("User not found");
  }
  const repos = await response.json();
  return repos;
}

/** loading data **/
let loadUserRepo = (userName)=>{
  clearReposInDom();

  fetchUserRepos(userName).then(repos =>{
   addReposInDom(repos);
 })
 .catch(error=>{
   showErrorMessage(userName)
 })
};

let clearReposInDom = () =>{
  let ul = document.getElementById('userRepos');
  ul.innerHTML=""
}
/** Adding repos to HTML **/
let addReposInDom = (repos)=>{
  // Get the ul with id of of userRepos
  let ul = document.getElementById('userRepos');
  let p = document.createElement('p');
  p.innerHTML = (`<p><strong>Number of Public Repos:<span class="badge badge-secondary">${repos.length}</span></p>`)
  ul.appendChild(p);


  for (let repo of repos) {
      // Create variable that will create li's to be added to ul
      let li = document.createElement('li');
      li.style.border="0px"

      // Add Bootstrap list item class to each li
      li.classList.add('list-group-item')

      // Create the html markup for each li
      li.innerHTML = (`
      <div class="card">
      <div class="card-body">
      <p><strong>Repo:</strong> ${repo.name}</p>
      <p><strong>Description:</strong> ${repo.description}</p>
      <p><strong>URL:</strong> <a href="${repo.html_url}">${repo.html_url}</a></p>
      </div>
     </div>
  `);

      // Append each li to the ul
      ul.appendChild(li);

  }

}

/** showing error in HTML**/
let showErrorMessage = (userName) =>{
  let ul = document.getElementById('userRepos');

  // Create variable that will create li's to be added to ul
  let li = document.createElement('li');

  // Add Bootstrap list item class to each li
  li.classList.add('list-group-item')
      // Create the html markup for each li
  li.innerHTML = (`
      <p><strong>No account exists with username:</strong> ${userName}</p>`);
  // Append each li to the ul
  ul.appendChild(li);
}