async function getUserProfile(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        if (!response.ok) {
            throw "User not found";
        }

        const data = await response.json();

        console.log(`Name: ${data.name}`);
        console.log(`Email: ${data.email}`);

    } catch (error) {
        console.log(error);
    }
}

// Example
getUserProfile(1);