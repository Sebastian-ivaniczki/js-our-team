
// * preparazione

const teamElement = document.getElementById('team-info'); 

const ourTeam = [{
    fullName: 'Wayne Barnet',
    role: 'founder & CEO',
    profileImage:'wayne-barnett-founder-ceo.jpg'
},
{
    fullName: 'Angela Carol',
    role: 'Cheif Editor',
    profileImage:'angela-caroll-chief-editor.jpg'
},
{
    fullName: 'Walter Gordon',
    role: 'Office Manager',
    profileImage:'walter-gordon-office-manager.jpg'  
},
{
    fullName: 'Angela Lopez',
    role: 'Social Media Manager',
    profileImage:'angela-lopez-social-media-manager.jpg'
},
{
    fullName: 'Scot Estrada',
    role: 'Developer',
    profileImage:'scott-estrada-developer.jpg'  
},
{
    fullName: 'Barbara Ramons',
    role: 'Graphic Designer',
    profileImage:'barbara-ramos-graphic-designer.jpg'  
}];

//! creo un ciclo for per girare nell'Aray ed una variabile d'appoggio

let employerProfile = '';
for(let i = 0; i < ourTeam.length; i++){
   const team = ourTeam[i]

    employerProfile += `<div class="card ">
                <img src="img/${team.profileImage}" class="card-img-top" alt="${team.fullName}">
                <div class="card-body text-center">
                    <h6>${team.fullName}</h6>
                    <p class="card-text">${team.role}</p>
                </div>
            </div>`
}

teamElement.innerHTML =  employerProfile