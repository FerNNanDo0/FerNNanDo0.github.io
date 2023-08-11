$(function(){

    const obs = [
        'Cores: preta, branca, marron.',
        'Cores: preta, branca.',
        'Cores: preta, branca.',
        'Cores: preta, branca, cinza.',
        'Cores: preta, branca, cinza.',
        'Cores: preta, branca, cinza.',
        'Cores: preta, branca, cinza.',
        'Cores: preta, branca, cinza.',
        'Cores: preta, branca, cinza.',
    ];
    
    const produtos = [
        {item:'Camisa Hight', img:'img-01.jpg', preco:'50,00', desc:obs[0]},
        {item:'Bermuda Jeans', img:'img-01.jpg', preco:'70,00', desc:obs[1]},
        {item:'Calça 0.40', img:'img-01.jpg', preco:'100,00', desc:obs[2]},
    
        {item:'Camisa Nike', img:'img-01.jpg', preco:'98,90', desc:obs[3]},
        {item:'Tênis Nike', img:'img-01.jpg', preco:'350,00', desc:obs[4]},
        {item:'Tênis Nike2', img:'img-01.jpg', preco:'350,00', desc:obs[4]},
    
        {item:'Tênis Nike3', img:'img-01.jpg', preco:'350,00', desc:obs[4]},
        {item:'Tênis Nike4', img:'img-01.jpg', preco:'350,00', desc:obs[4]},
        {item:'Tênis Ous', img:'img-01.jpg', preco:'400,00', desc:obs[5]},
    
        {item:'Tênis Adidas', img:'img-01.jpg', preco:'300,00', desc:obs[6]},
        {item:'Camisa Diamond', img:'img-01.jpg', preco:'00,00', desc:obs[7]},
        {item:'Moletom 0.40', img:'img-01.jpg', preco:'00,00', desc:obs[8]}
        // ... adicione mais objetos conforme necessário
    ];

    let htmlList = $('#list-itens');
    let item = '';
 
    // Loop para imprimir de 3 em 3 objetos
    for (let i = 0; i < produtos.length; i += 3) {
        const batch = produtos.slice(i, i + 3);
        let nameOne = batch[0]
        let nameTwo = batch[1]
        let nameThree = batch[2]
        //console.log( nameOne.item, nameTwo.item, nameThree.item )

        item += 
        `
        <!-- linha 1 -->
        <div class="row mb-3 text-center">
          <!-- produto - 1 -->
          <div class="col-4 pl-md-5 p-0">
            <a href="#" class="card-link" id="elevacao">
              <div id="div-imgs">
                <img src="imagens/${nameOne.img}" class="img-fluid">
                <h5 class="titulo">${nameOne.item}</h5>
                <p class="texto">${nameOne.desc}</p>
                <p class="real">R$${nameTwo.preco}</p>
              </div>
            </a>
          </div>
          <!-- produto - 2 -->
          <div class="col-4 pl-md-5 p-0">
            <a href="#" class="card-link" id="elevacao">
              <div id="div-imgs">
                <img src="imagens/${nameOne.img}" class="img-fluid">
                <h5 class="titulo">${nameTwo.item}</h5>
                <p class="texto">${nameOne.desc}</p>
                <p class="real">R$${nameTwo.preco}</p>
              </div>
            </a>
          </div>
          <!-- produto - 3 -->
          <div class="col-4 pl-md-5 p-0">
            <a href="#" class="card-link" id="elevacao">
              <div id="div-imgs">
                <img src="imagens/${nameOne.img}" class="img-fluid">
                <h5 class="titulo">${nameThree.item}</h5>
                <p class="texto">${nameOne.desc}</p>
                <p class="real">R$${nameTwo.preco}</p>
              </div>
            </a>
          </div>
        </div>
        `
        $(htmlList).html(item);
    }    

})