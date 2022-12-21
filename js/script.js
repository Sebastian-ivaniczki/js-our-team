/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede e rendere la pagina gradevole (potete usare lo screen in allegato come spunto
*/

// * preparazione

const teamElement = document.getElementById('team-info'); 

const ourTeam = [{
    fullName: 'wayne Barnet',
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

//creo un ciclo for per girare nell'Aray

for(let i = 0; i < ourTeam.length; i++){
   const team = ourTeam[i]
    console.log(team.fullName)
}
