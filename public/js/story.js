// document.addEventListener("DOMContentLoaded", () => {
//   const likeButtons = document.querySelectorAll(".like-btn");

//   likeButtons.forEach((button) => {
//     button.addEventListener("click", async (event) => {
//       event.stopPropagation();

//       const storyId = button.dataset.storyId;
      
//       // try {
//       //   const response = await fetch(`/api/stories/like-story/${storyId}`, {
//       //     method: "GET",
//       //   });

//       //   if (!response.ok) {
//       //     console.log(response);
//       //     throw new Error("Error liking the story");
//       //   }
//       //   window.location.reload();
//       // } catch (error) {
//       //   console.error(error);
//       //   alert("An error occurred while liking the story");
//       // }
//     });
//   });
// });
