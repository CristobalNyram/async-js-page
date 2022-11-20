'use-strict';
window.onload=function(){

    function getDetailsProfile(){
       
        const user_name='CristobalNyram';
        const urlApi='https://api.github.com/users/';
    
        fetch(urlApi+user_name)
        .then(response=>response.json())
        .then(  
                data=>fiel_inputs(data)
        )
        .catch(console.log());
    
    
    }

    function fiel_inputs(data){
        console.log(data);
        let input_user_name=document.getElementById('user_name');
        let input_user_image=document.getElementById('user_profile_image');
        let input_user_bio=document.getElementById('user_bio_description');
        let input_user_company=document.getElementById('user_company_in');
        input_user_company.innerText=data.company;
        input_user_name.innerText=data.name,
        input_user_image.src=data.avatar_url
        input_user_bio.innerText=data.bio;
    }
    
    getDetailsProfile();

}

