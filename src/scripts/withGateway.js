const baseUrl = "https://6311c24df5cba498da84fb51.mockapi.io/api/v1/events";
export const getEventsList = () => {
  return fetch(baseUrl)
    .then((response) => response.json())
    .catch((error) => {
      throw new Error("Could get events list");
    });
};

export const createEvent = (eventData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(eventData),
  });
};

export const deleteEvent = (eventId) => {
  return fetch(`${baseUrl}/${eventId}`, {
    method: "DELETE",
  });
};
