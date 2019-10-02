const remoteURL = "http://localhost:3003"

export default {
  get(id) {
    return fetch(`${remoteURL}/location/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/location`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/location/${id}`, {
      method: "DELETE"
    })
      .then(result => result.json())
  },
  update(editedLocation) {
    return fetch(`${remoteURL}/locations/${editedLocation.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedLocation)
    }).then(data => data.json());
  }
}