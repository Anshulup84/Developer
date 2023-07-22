function validateLinkedInURL(input) {
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

    if (regex.test(input)) {
        console.log("Valid LinkedIn profile URL");
    } else {
        console.log("Invalid LinkedIn profile URL");
    }
}

const url1 = "https://www.linkedin.com/in/ansh-ku";
const url2 = "https://www.linkedin.com/in/neha_doe123";
const url3 = "https://www.linkedin.com/in/1234567890";
const url4 = "https://www.linkedin.com/in/username_with_hyphen-";
const url5 = "https://www.linkedin.com/in/too_long_usernames_should_not_be_valid";

validateLinkedInURL(url1);
validateLinkedInURL(url2);
validateLinkedInURL(url3);
validateLinkedInURL(url4);
validateLinkedInURL(url5);