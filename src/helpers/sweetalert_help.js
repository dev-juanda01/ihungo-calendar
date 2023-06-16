const sendMessageToViewAndUpdateTask = (task) => {
  Swal.fire({
    title: task.title,
    text: task.description,
    confirmButtonText: "Actualizar",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    // if (result.isConfirmed) {
    //   Swal.fire("Saved!", "", "success");
    // }
  });
};

export { sendMessageToViewAndUpdateTask };
