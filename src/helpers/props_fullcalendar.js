const headerToolbarOptions = {
  left: "today prev,next",
  center: "title",
  right: "dayGridMonth,timeGridWeek,timeGridDay,agendaButton",
};

const toolbarButtonsText = {
  today: "Hoy",
  month: "Mes",
  week: "Semana",
  day: "Día",
  list: "list",
};

const colorsEventTasks = [
  "#BD3C14",
  "#FF2717",
  "#E71F63",
  "#8F3E97",
  "#65499D",
  "#4554A4",
  "#1770AB",
  "#0B9BE3",
  "#06A3B7",
  "#009688",
  "#009606",
  "#8D9900",
  "#D97900",
  "#FD5D10",
  "#F06291",
];

const customButtonsCalendar = {
  agendaButton: {
    text: "Agenda",
    click: function () {
      console.log("Click del boton agenda");
    },
  },
};

export {
  headerToolbarOptions,
  toolbarButtonsText,
  colorsEventTasks,
  customButtonsCalendar,
};
