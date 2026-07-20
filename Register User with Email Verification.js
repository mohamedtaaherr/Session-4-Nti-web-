function sendVerificationEmail(email) {
    return new Promise((resolve, reject) => {
        console.log("Sending verification email...");
        
        setTimeout(() => {
            if (email) {
                resolve("Email sent successfully");
            } else {
                reject("Email failed to send");
            }
        }, 2000); // simulate delay
    });
}

async function registerUser(name, email) {
    try {
        if (!name || !email) {
            throw "Invalid user data";
        }

        const result = await sendVerificationEmail(email);
        console.log(result);
        console.log("User registered successfully");

    } catch (error) {
        console.log(error);
    }
}

