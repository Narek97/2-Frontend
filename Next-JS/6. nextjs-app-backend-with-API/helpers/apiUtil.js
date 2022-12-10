export async function getAllEvents() {

  try {
    const res = await fetch(
      "https://nextjs-course-3d0ef1-default-rtdb.firebaseio.com/events.json"
    );
    const data = await res.json();
    if (data.error) {
      return { error: data.error }
    }
    const events = [];

    for (const key in data) {
      events.push({
        id: key,
        ...data[key],
      });
    }
    return events;
  } catch (e) {
    console.log(e, 'e');
  }


}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  // return allEvents.filter((event) => event.isFeatured);
  return []
}

export async function getFilteredEvents(dateFilter) {
  const allEvents = await getAllEvents();
  const { year, month } = dateFilter;

  let filteredEvents = allEvents?.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}
