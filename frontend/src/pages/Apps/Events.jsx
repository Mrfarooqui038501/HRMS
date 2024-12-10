import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, subDays, eachDayOfInterval, isToday } from "date-fns";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]); // Store events
  const [view, setView] = useState("month"); // "day", "week", "month"
  const [newEvent, setNewEvent] = useState(""); // Event input
  const [selectedDate, setSelectedDate] = useState(null); // Track the selected date for adding event
  const [editingEvent, setEditingEvent] = useState(null); // Track event being edited

  // Change view function
  const changeView = (viewType) => {
    setView(viewType);
  };

  // Get days for month view
  const getDaysOfMonth = () => {
    const startOfMonthDate = startOfMonth(currentDate);
    const endOfMonthDate = endOfMonth(currentDate);
    return eachDayOfInterval({ start: startOfMonthDate, end: endOfMonthDate });
  };

  // Get days for week view
  const getDaysOfWeek = () => {
    const startOfWeekDate = startOfWeek(currentDate);
    const endOfWeekDate = endOfWeek(currentDate);
    return eachDayOfInterval({ start: startOfWeekDate, end: endOfWeekDate });
  };

  // Get days for day view
  const getDayView = () => {
    return [currentDate];
  };

  // Add event to the selected day
  const addEvent = (date) => {
    if (newEvent.trim() === "") return;

    const eventDate = format(date, "yyyy-MM-dd");

    // If editing an existing event, update it
    if (editingEvent) {
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === editingEvent.id
            ? { ...event, event: newEvent, date: eventDate }
            : event
        )
      );
      setEditingEvent(null); // Reset the editing state after saving the event
    } else {
      // Otherwise, add a new event
      setEvents((prevEvents) => [
        ...prevEvents,
        { id: Date.now(), date: eventDate, event: newEvent }, // Adding unique id for each event
      ]);
    }
    setNewEvent(""); // Clear input after adding/editing event
    setSelectedDate(null); // Reset selected date
  };

  // Delete event
  const deleteEvent = (eventId) => {
    setEvents(events.filter((event) => event.id !== eventId));
  };

  // Start editing an event
  const startEditingEvent = (event) => {
    setNewEvent(event.event); // Populate the event details into the input field
    setEditingEvent(event); // Set the event as the one being edited
  };

  // Check if event exists for a day
  const getEventsForDay = (date) => {
    return events.filter((event) => event.date === format(date, "yyyy-MM-dd"));
  };

  // Render calendar cells
  const renderCalendarCells = () => {
    let days = [];

    if (view === "month") {
      days = getDaysOfMonth();
    } else if (view === "week") {
      days = getDaysOfWeek();
    } else if (view === "day") {
      days = getDayView();
    }

    return days.map((day) => {
      const isCurrentDay = isToday(day);
      const eventsForThisDay = getEventsForDay(day);

      return (
        <div
          key={format(day, "yyyy-MM-dd")}
          className={`p-2 cursor-pointer border ${isCurrentDay ? "bg-blue-200" : "bg-white"} rounded shadow-sm`}
        >
          <div className="font-bold">{format(day, "d")}</div>
          <div className="text-sm">
            {eventsForThisDay.map((event) => (
              <div key={event.id} className="mt-1 flex justify-between items-center">
                <span>{event.event}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => startEditingEvent(event)}
                    className="text-xs text-blue-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteEvent(event.id)}
                    className="text-xs text-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Click on a day to select it for adding an event */}
          <button
            className="text-xs text-blue-500 mt-1"
            onClick={() => {
              setSelectedDate(day); // Set selected date
              setEditingEvent(null); // Reset the editing state when selecting a new day
            }}
          >
            Add Event
          </button>
        </div>
      );
    });
  };

  // Handle change of month/year
  const changeMonth = (direction) => {
    if (direction === "next") {
      setCurrentDate(addDays(currentDate, 31));
    } else if (direction === "prev") {
      setCurrentDate(subDays(currentDate, 31));
    }
  };

  return (
    <div className="flex flex-col h-screen mt-20">
      <div className="flex justify-between items-center p-4 bg-blue-600 text-white">
        <button
          className="px-2 py-1 rounded bg-blue-500"
          onClick={() => changeMonth("prev")}
        >
          Previous
        </button>
        <div>
          <h2 className="text-xl font-semibold">{format(currentDate, "MMMM yyyy")}</h2>
          <div className="flex space-x-4 mt-2">
            <button
              className="text-sm text-white"
              onClick={() => changeView("month")}
            >
              Month
            </button>
            <button
              className="text-sm text-white"
              onClick={() => changeView("week")}
            >
              Week
            </button>
            <button
              className="text-sm text-white"
              onClick={() => changeView("day")}
            >
              Day
            </button>
          </div>
        </div>
        <button
          className="px-2 py-1 rounded bg-blue-500"
          onClick={() => changeMonth("next")}
        >
          Next
        </button>
      </div>

      <div className="flex-1 p-4">
        <div className="grid grid-cols-7 gap-4">
          {renderCalendarCells()}
        </div>
      </div>

      {selectedDate && (
        <div className="flex justify-center p-4">
          <input
            type="text"
            placeholder="Add or edit event"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
            className="p-2 border rounded mr-2"
          />
          <button
            onClick={() => addEvent(selectedDate)} // Add event for the selected day
            className="p-2 bg-blue-500 text-white rounded"
          >
            {editingEvent ? "Save Changes" : "Add Event"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Calendar;
