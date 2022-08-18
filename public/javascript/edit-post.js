async function editFormHandler(event) {
  event.preventDefault();

  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  await fetch(`/api/post/${post_url}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
    }),
    headers: {
      "Content-Type": "application.json",
    },
  });
}

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
