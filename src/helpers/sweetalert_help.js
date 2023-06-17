const sendMessageToViewAndUpdateTask = (task) => {
  return Swal.fire({
    title: task.activity_type,
    text: task.description,
    confirmButtonText: `<button
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      style="background-color: #fff0; border: none; font-size: 1.2rem; color: #fff;"
    >
      Actualizar
    </button>`,
  }).then((result) => {
    Swal.close();
    return result.value;
  });
};

const confirmDeleteTask = () => {
  return Swal.fire({
    title: "¿Estas seguro de eliminar esta tarea?",
    text: "La tarea sera eliminada de la base de datos",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar!",
    preConfirm: (isConfirm) => {
      return isConfirm;
    },
  }).then((result) => {
    Swal.close();
    return result.value;
  });
};

export { sendMessageToViewAndUpdateTask, confirmDeleteTask };
