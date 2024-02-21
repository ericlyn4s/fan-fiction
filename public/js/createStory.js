document.addEventListener("DOMContentLoaded", () => {
  const createStoryForm = document.querySelector("#create-story-form");
  createStoryForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = {};
    for (const field of createStoryForm.elements) {
      if (field.name) {
        formData[field.name] = field.value;
      }
    }

    try {
      const response = await fetch("/api/stories/create-story", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error creating story");
      }

      window.location.href = "/";
    } catch (error) {
      console.error(error);
      alert("An error occurred while creating the story");
    }
  });
});
