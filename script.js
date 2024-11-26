document.getElementById("fetchUserBtn").addEventListener("click", fetchUser);

function fetchUser() {
    const userId = document.getElementById("userId").value;
    const userInfoDiv = document.getElementById("userInfo");

    // Limpiar contenido previo
    userInfoDiv.textContent = "Cargando datos...";

    if (!userId) {
        userInfoDiv.textContent = "Por favor, ingresa un ID válido.";
        return;
    }

    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(user => {
            // Mostrar los datos en formato amigable
            userInfoDiv.innerHTML = `
                <p><strong>Nombre:</strong> ${user.name}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Teléfono:</strong> ${user.phone}</p>
                <p><strong>Dirección:</strong> ${user.address.street}, ${user.address.city}</p>
                <p><strong>Compañía:</strong> ${user.company.name}</p>
            `;
        })
        .catch(error => {
            userInfoDiv.textContent = `Error: ${error.message}`;
        });
}
