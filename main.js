

const Toggle = ()=> {
    const menuContainer = document.querySelector('.menu-container');
    const closeMenu = document.querySelector('.close-menu');
    const Ul = document.querySelector('ul');

   

        menuContainer.addEventListener( "click", ()=>  {
            Ul.classList.toggle('show');
            
}       

    
)}

Toggle();



const UnorderedList = ()=> {
    const Ul = document.querySelector('ul');
    const li =  document.querySelectorAll('ul li')
    li.forEach( (link)=>{
        link.addEventListener('click', ()=> {
        Ul.classList.remove('show');
        })
    })
}

UnorderedList()






const CopyAndPaste = () => {

    
    const copyBtn = document.querySelector('.copyBtn')
        
        copyBtn.addEventListener( "click", async ()=> {
            try {
                const content = document.querySelector('.contact-info h1').textContent;
                await navigator.clipboard.writeText(content);
                
                const copiedTxt = await navigator.clipboard.readText();
                console.log(copiedTxt)
                
            } catch (error) {
                console.log(error);
                
            }
        });

    
}

CopyAndPaste()
