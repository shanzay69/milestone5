document
.getElementById("resumeform")?.addEventListener("submit",  function (event) {
event.preventDefault();

    const usernameElement= document.getElementById("username")as  HTMLInputElement  ;
    const nameElement= document.getElementById("name")as    HTMLInputElement  ;
    const emailElement= document.getElementById("email")as     HTMLInputElement  ;
    const phoneElement= document.getElementById("phone")as    HTMLInputElement   ;
    const ProfilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
    const educationElement= document.getElementById("education")as     HTMLInputElement  ;
    const experienceElement= document.getElementById("experience")as    HTMLInputElement   ;
    const skillsElement= document.getElementById("skills")as  HTMLInputElement ;
//** */


    
    if ( usernameElement && nameElement &&  emailElement && phoneElement && ProfilePictureInput &&  educationElement && experienceElement && skillsElement &&  usernameElement  ){
   
      const username = usernameElement.value.trim();
        const name = nameElement.value.trim();
        const email = emailElement.value.trim();
        const phone = phoneElement.value.trim();
        const education = educationElement.value.trim();
        const experience = experienceElement.value.trim();
        const skills = skillsElement.value.trim();
        
        const shareableLink = `http://127.0.0.1:5500/?username=${encodeURIComponent(username)}`;
      

        const profilePictureFile = ProfilePictureInput.files?.[0];

        let profilePictureURL = "";
        if (profilePictureFile instanceof File) {
          profilePictureURL = URL.createObjectURL(profilePictureFile);
        } else {
          console.error("Profile Picture file is not a valid File object.");
        }
        
        const resumeOutput =`
        <h2>Resume</h2>
         ${profilePictureURL ? `<img src="${profilePictureURL}"  alt="profile Picture" class="profilePicture">`:""}
        <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <h3>Education</h3>
          <p>${education}</p>
          <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
           <p><strong>Shareable Link:</strong> <a href="${shareableLink}" target="_blank">${shareableLink}</a> </p>

        `;
       const resumeOutputElement= document.getElementById('resumeOutput'); 
    if(resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput ;
       resumeOutputElement.classList.remove("hidden");
      } else{
        console.error('the resume Output elements are missing')
       
       }
    
    const buttonsContainer = document.createElement("div");
     buttonsContainer.id = "buttonscontainer";
     resumeOutputElement?.appendChild(buttonsContainer);

     const downloadButton = document.createElement("button");
     downloadButton.textContent = "Download as  PDF";
     downloadButton.style.marginBottom = "10px";
     downloadButton.addEventListener("click",() =>{
      window.print();

     });
buttonsContainer.appendChild(downloadButton);

const shareLinkButton = document.createElement("button");
shareLinkButton.textContent ="COPY SHAREABLE LINK";
shareLinkButton.addEventListener("click", async () => {


    try {
      
      await navigator.clipboard.writeText(shareableLink);
      alert("shareable link copied to clipboard");
    } catch (err) {
      console.error("failed to copy link:", err);
      alert("failed to copy linkto clipboard.please try again.");
    }
  });
  buttonsContainer.appendChild(shareLinkButton);
} else {
  alert("All fields are required.");
}




});  
        
       
       