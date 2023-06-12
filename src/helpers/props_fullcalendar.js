const headerToolbarOptions = {
  left: "today prev,next",
  center: "title",
  right: "dayGridMonth,timeGridWeek,timeGridDay",
};

const toolbarButtonsText = {
  today: "Hoy",
  month: "Mes",
  week: "Semana",
  day: "Día",
  list: "list",
};

const eventClickTask = (eventInfo) => {
  alert(`Tarea - ${eventInfo.event.extendedProps.description}`);
};

export { headerToolbarOptions, toolbarButtonsText, eventClickTask };
