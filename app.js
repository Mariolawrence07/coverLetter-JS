function startApp() {
    document.querySelector('#welcome').style.display = 'none'
    document.querySelector('#preloader').style.display = 'flex';
    setTimeout(()=> {
        document.querySelector('#preloader').style.display = 'none'
        document.querySelector('#app').style.display = 'block'
    }, 3000)
}function createLetter(){

    document.querySelector('#app').style.display='none';
    document.querySelector('#preloader').style.display = 'flex';
    
    setTimeout(()=>{
        document.querySelector('#preloader').style.display = 'none';
        document.querySelector('#results').style.display='block';
    },3000)
    // Creating variables to store form inputs
    
    let fullName= document.getElementById("fullname");
    let address= document.getElementById("address");
    let phone= document.getElementById("phone");
    let email= document.getElementById("email");
    let employerName= document.getElementById("employername");
    let companyAddress= document.getElementById("company-address");
    let degree= document.getElementById("degree");
    let speciality= document.getElementById("speciality");
    let role= document.getElementById("role");
    let prevWork= document.getElementById("prev-work");
    let positiveTraits= document.getElementById("positive-traits"); 
    // Creating variables for the cover letter components

    let yourName = document.getElementById("your-name");
    let yourAddress = document.getElementById("your-address");
    let yourPhone = document.getElementById("your-phone");
    let yourEmail = document.getElementById("your-email");
    let letterBody = document.getElementById("letter-body");
    let letterDate = document.getElementById("letter-date");
    let companyBlock = document.getElementById("company-block");
    let employer = document.getElementById("employer");
    let companysAddress= document.getElementById("companyaddress");
    let greetings = document.getElementById("greetings");
    let para1 = document.getElementById("para-1");
    let para2 = document.getElementById("para-2");
    let para3 = document.getElementById("para-3");
    let conclusion = document.getElementById("conclusion");
    let compliment = document.getElementById("compliment");

    // Preparing the cover letter statements
    yourName.innerHTML = fullName.value;
    yourAddress.innerHTML = address.value;
    yourPhone.innerHTML = phone.value;
    yourEmail.innerHTML = email.value;
    letterDate.innerHTML= new Date();
    employer.innerHTML = employerName.value;
    companysAddress.innerHTML = companyAddress.value;
    greetings.innerHTML = `Dear ${employerName.value},`;
    para1.innerHTML =`my name is ${fullName.value}. I am thrilled to be applying for the role of a
    ${role.value} in your company. After reviewing your job description, it is clear that you are looking for an enthusiastic
    applicant that can be relied upon to fully engange with the role and develop professionally in self-motivated manner,Given these requirements, i believe i am perfect for the job.`;
    
    // second para
    para2.innerHTML = ` I am a ${positiveTraits.value} professsional, with a ${degree.value} in ${speciality.value} professional in my field of study. over the course of my career, I have  developed proven ${prevWork.value},
    which i hope to leverage into the ${role.value} role at your company. `;
    // 3rd para

    para3.innerHTML = `After reviewing my resume, I hope you will find that i am the type of positive and driven candidate you're looking for.
    I am excited to elaborate on how my specific skills and abilities will benefit your organization.Please contact me at ${phone.value} or email@ ${email.value}, to arrange for a
    convienient meeting time.`

    conclusion.innerHTML = `Thank you for cosideration. i look forward to hearing from you soon`;
    compliment.innerHTML =`Best Regards,
                         <p>${fullName.value}</p>`
}