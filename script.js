// Function to fetch dog breed information
async function fetchDogBreed(breed) {
  try {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
      const data = await response.json();

      if (data.status === "success") {
          const imageUrl = data.message;
          document.getElementById("result-container").innerHTML = `<img src="${imageUrl}" alt="${breed}" width="300">`;
      } else {
          document.getElementById("result-container").innerHTML = "Breed not found.";
      }
  } catch (error) {
      console.error("Error fetching data:", error);
      document.getElementById("result-container").innerHTML = "An error occurred while fetching data.";
  }
}

// Event listener for the search button
document.getElementById("search-button").addEventListener("click", () => {
  const breedInput = document.getElementById("breed-input").value.toLowerCase();
  fetchDogBreed(breedInput);
});
